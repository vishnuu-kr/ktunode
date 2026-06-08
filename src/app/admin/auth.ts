"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function loginAdmin(formData: FormData) {
  const secret = formData.get("secret");
  const adminSecret = process.env.ADMIN_SECRET_KEY;
  if (!adminSecret) {
    throw new Error("ADMIN_SECRET_KEY environment variable is not set.");
  }
  if (secret === adminSecret) {
    const cookieStore = await cookies();
    cookieStore.set("admin_secret", secret as string, { path: "/", maxAge: 60 * 60 * 24 * 7 });
    redirect("/admin");
  }
}
