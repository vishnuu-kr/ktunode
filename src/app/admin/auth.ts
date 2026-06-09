"use server";

import crypto from "crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

function safeEqual(a: string, b: string): boolean {
  if (!a || !b) return false;
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  if (bufA.length !== bufB.length) return false;
  return crypto.timingSafeEqual(bufA, bufB);
}

function getAdminAccessKey(): string {
  const secret = process.env.ADMIN_SECRET_KEY || "";
  return crypto.createHash("sha256").update(secret).digest("hex").slice(0, 16);
}

export async function loginAdmin(prevState: { error: string } | null, formData: FormData): Promise<{ error: string }> {
  const secret = formData.get("secret");
  const accessKey = formData.get("accessKey") as string;
  const adminSecret = process.env.ADMIN_SECRET_KEY;
  if (!adminSecret) {
    return { error: "ADMIN_SECRET_KEY environment variable is not set on the server." };
  }
  if (secret && adminSecret && safeEqual(secret as string, adminSecret)) {
    const cookieStore = await cookies();
    cookieStore.set("admin_secret", adminSecret, {
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    });
    const key = accessKey || getAdminAccessKey();
    redirect(`/admin?key=${key}`);
  }
  return { error: "Incorrect password. Try again." };
}

export async function logoutAdmin(formData: FormData) {
  const accessKey = formData.get("accessKey") as string;
  const cookieStore = await cookies();
  cookieStore.delete("admin_secret");
  const key = accessKey || getAdminAccessKey();
  redirect(`/admin?key=${key}`);
}
