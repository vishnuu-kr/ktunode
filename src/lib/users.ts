import fs from "fs";
import path from "path";
import { isServerless, readFromKV, writeToKV } from "@/lib/github";

export interface UserRecord {
  name: string;
  email: string;
  passwordHash: string;
  completedTopics?: string[];
  createdAt?: string;
  updatedAt?: string;
}

export const usersFilePath = path.join(process.cwd(), "constants", "users.json");

export async function readUsers(): Promise<UserRecord[]> {
  try {
    if (isServerless()) {
      const kvUsers = await readFromKV<UserRecord[]>("users");
      return Array.isArray(kvUsers) ? kvUsers : [];
    }

    if (fs.existsSync(usersFilePath)) {
      const data = JSON.parse(fs.readFileSync(usersFilePath, "utf8"));
      return Array.isArray(data) ? data : [];
    }
  } catch (error) {
    console.error("Failed to read users database:", error);
  }

  return [];
}

export async function writeUsers(users: UserRecord[]): Promise<boolean> {
  try {
    if (isServerless()) {
      await writeToKV("users", users);
      return true;
    }

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
