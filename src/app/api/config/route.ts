import { NextResponse } from "next/server";
import { readSiteConfig } from "@/lib/siteConfig";
import { cookies } from "next/headers";
import crypto from "crypto";

export const dynamic = "force-dynamic";

function safeEqual(a: string, b: string): boolean {
  if (!a || !b) return false;
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  if (bufA.length !== bufB.length) return false;
  return crypto.timingSafeEqual(bufA, bufB);
}

export async function GET() {
  const cookieStore = await cookies();
  const adminSecret = cookieStore.get("admin_secret")?.value;
  const correctSecret = process.env.ADMIN_SECRET_KEY;

  if (!adminSecret || !correctSecret || !safeEqual(adminSecret, correctSecret)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  return NextResponse.json(await readSiteConfig(), {
    headers: {
      "Cache-Control": "no-store, max-age=0",
    },
  });
}
