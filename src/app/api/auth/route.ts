import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import crypto from "crypto";

export const dynamic = "force-dynamic";

interface UserRecord {
  name: string;
  email: string;
  passwordHash: string;
  completedTopics?: string[];
  createdAt?: string;
  updatedAt?: string;
}

const usersFilePath = path.join(process.cwd(), "constants", "users.json");

function readUsers(): UserRecord[] {
  try {
    if (fs.existsSync(usersFilePath)) {
      const data = JSON.parse(fs.readFileSync(usersFilePath, "utf8"));
      return Array.isArray(data) ? data : [];
    }
  } catch (error) {
    console.error("Failed to read users database:", error);
  }

  return [];
}

function writeUsers(users: UserRecord[]) {
  try {
    const dir = path.dirname(usersFilePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(usersFilePath, `${JSON.stringify(users, null, 2)}\n`, "utf8");
    return true;
  } catch (error) {
    console.error("Failed to write users database:", error);
    return false;
  }
}

function hashPassword(password: string) {
  const salt = crypto.randomBytes(16).toString("hex");
  const hash = crypto.pbkdf2Sync(password, salt, 120000, 32, "sha256").toString("hex");
  return `pbkdf2_sha256$120000$${salt}$${hash}`;
}

function verifyPassword(password: string, storedHash: string) {
  const parts = storedHash.split("$");
  if (parts[0] === "pbkdf2_sha256" && parts.length === 4) {
    const iterations = Number(parts[1]);
    const salt = parts[2];
    const expected = parts[3];
    const incoming = crypto.pbkdf2Sync(password, salt, iterations, 32, "sha256").toString("hex");
    return crypto.timingSafeEqual(Buffer.from(incoming, "hex"), Buffer.from(expected, "hex"));
  }

  const legacyHash = crypto.createHash("sha256").update(password).digest("hex");
  return storedHash === legacyHash;
}

function publicUser(user: UserRecord) {
  return {
    name: user.name,
    email: user.email,
    completedTopics: Array.isArray(user.completedTopics) ? user.completedTopics : [],
  };
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { action, email, name, password, completedTopics } = body;

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const emailNormalized = email.trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailNormalized)) {
      return NextResponse.json({ error: "Enter a valid email address" }, { status: 400 });
    }

    const users = readUsers();

    if (action === "signup") {
      if (!name || typeof name !== "string" || !name.trim()) {
        return NextResponse.json({ error: "Name is required" }, { status: 400 });
      }
      if (!password || typeof password !== "string" || password.length < 8) {
        return NextResponse.json({ error: "Password must be at least 8 characters" }, { status: 400 });
      }

      const existingUser = users.find((user) => user.email.toLowerCase() === emailNormalized);
      if (existingUser) {
        return NextResponse.json({ error: "An account with this email already exists" }, { status: 400 });
      }

      const newUser: UserRecord = {
        name: name.trim().slice(0, 120),
        email: emailNormalized,
        passwordHash: hashPassword(password),
        completedTopics: [],
        createdAt: new Date().toISOString(),
      };

      users.push(newUser);
      if (!writeUsers(users)) {
        return NextResponse.json({ error: "Database write error" }, { status: 500 });
      }

      return NextResponse.json({ user: publicUser(newUser) });
    }

    if (action === "signin") {
      if (!password || typeof password !== "string") {
        return NextResponse.json({ error: "Password is required" }, { status: 400 });
      }

      const userIndex = users.findIndex((user) => user.email.toLowerCase() === emailNormalized);
      if (userIndex === -1 || !verifyPassword(password, users[userIndex].passwordHash)) {
        return NextResponse.json({ error: "Invalid email or password" }, { status: 400 });
      }

      if (!users[userIndex].passwordHash.startsWith("pbkdf2_sha256$")) {
        users[userIndex].passwordHash = hashPassword(password);
        users[userIndex].updatedAt = new Date().toISOString();
        writeUsers(users);
      }

      return NextResponse.json({ user: publicUser(users[userIndex]) });
    }

    if (action === "sync") {
      if (!Array.isArray(completedTopics)) {
        return NextResponse.json({ error: "completedTopics must be an array" }, { status: 400 });
      }

      const userIndex = users.findIndex((user) => user.email.toLowerCase() === emailNormalized);
      if (userIndex === -1) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
      }

      users[userIndex].completedTopics = completedTopics
        .filter((topic) => typeof topic === "string")
        .map((topic) => topic.trim())
        .filter(Boolean)
        .slice(0, 5000);
      users[userIndex].updatedAt = new Date().toISOString();

      if (!writeUsers(users)) {
        return NextResponse.json({ error: "Database write error" }, { status: 500 });
      }

      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: "Invalid action" }, { status: 400 });
  } catch (error: any) {
    console.error("Auth API Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
