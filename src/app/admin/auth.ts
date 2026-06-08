"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function loginAdmin(prevState: { error: string } | null, formData: FormData): Promise<{ error: string }> {
  const secret = formData.get("secret");
  const adminSecret = process.env.ADMIN_SECRET_KEY;
  if (!adminSecret) {
    return { error: "ADMIN_SECRET_KEY environment variable is not set on the server." };
  }
  if (secret === adminSecret) {
    const cookieStore = await cookies();
    cookieStore.set("admin_secret", secret as string, {
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    });
    redirect("/admin");
  }
  return { error: "Incorrect password. Try again." };
}

export async function logoutAdmin() {
  const cookieStore = await cookies();
  cookieStore.delete("admin_secret");
  redirect("/admin");
}
