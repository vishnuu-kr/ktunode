import { NextResponse } from "next/server";
import { readSiteConfig } from "@/lib/siteConfig";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

export async function GET() {
  const cookieStore = await cookies();
  const adminSecret = cookieStore.get("admin_secret")?.value;
  const correctSecret = process.env.ADMIN_SECRET_KEY;

  if (!adminSecret || adminSecret !== correctSecret) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  return NextResponse.json(await readSiteConfig(), {
    headers: {
      "Cache-Control": "no-store, max-age=0",
    },
  });
}
