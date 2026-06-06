import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import crypto from "crypto";

const usersFilePath = path.join(process.cwd(), "constants", "users.json");

function readUsers() {
  try {
    if (fs.existsSync(usersFilePath)) {
      const data = fs.readFileSync(usersFilePath, "utf8");
      return JSON.parse(data);
    }
  } catch (e) {
    console.error("Failed to read users database:", e);
  }
  return [];
}

function writeUsers(users: any[]) {
  try {
    const dir = path.dirname(usersFilePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2), "utf8");
    return true;
  } catch (e) {
    console.error("Failed to write users database:", e);
    return false;
  }
}

function hashPassword(password: string) {
  return crypto.createHash("sha256").update(password).digest("hex");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { action, email, name, password, completedTopics } = body;

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const emailNormalized = email.trim().toLowerCase();
    const users = readUsers();

    if (action === "signup") {
      if (!name || typeof name !== "string" || !name.trim()) {
        return NextResponse.json({ error: "Name is required" }, { status: 400 });
      }
      if (!password || typeof password !== "string" || password.length < 6) {
        return NextResponse.json({ error: "Password must be at least 6 characters" }, { status: 400 });
      }

      // Check if user already exists
      const existingUser = users.find((u: any) => u.email.toLowerCase() === emailNormalized);
      if (existingUser) {
        return NextResponse.json({ error: "An account with this email already exists" }, { status: 400 });
      }

      const newUser = {
        name: name.trim(),
        email: emailNormalized,
        passwordHash: hashPassword(password),
        completedTopics: [],
        createdAt: new Date().toISOString(),
      };

      users.push(newUser);
      if (!writeUsers(users)) {
        return NextResponse.json({ error: "Database write error" }, { status: 500 });
      }

      return NextResponse.json({
        user: {
          name: newUser.name,
          email: newUser.email,
          completedTopics: newUser.completedTopics
        }
      });
    }

    if (action === "signin") {
      if (!password || typeof password !== "string") {
        return NextResponse.json({ error: "Password is required" }, { status: 400 });
      }

      const user = users.find((u: any) => u.email.toLowerCase() === emailNormalized);
      if (!user) {
        return NextResponse.json({ error: "Invalid email or password" }, { status: 400 });
      }

      const incomingHash = hashPassword(password);
      if (user.passwordHash !== incomingHash) {
        return NextResponse.json({ error: "Invalid email or password" }, { status: 400 });
      }

      return NextResponse.json({
        user: {
          name: user.name,
          email: user.email,
          completedTopics: user.completedTopics || []
        }
      });
    }

    if (action === "sync") {
      if (!Array.isArray(completedTopics)) {
        return NextResponse.json({ error: "completedTopics must be an array" }, { status: 400 });
      }

      const userIndex = users.findIndex((u: any) => u.email.toLowerCase() === emailNormalized);
      if (userIndex === -1) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
      }

      users[userIndex].completedTopics = completedTopics;
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
