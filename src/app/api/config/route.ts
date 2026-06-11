import { NextResponse } from "next/server";
import { readSiteConfig } from "@/lib/siteConfig";
import { cookies } from "next/headers";
import { safeEqual } from "@/lib/crypto";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const config = await readSiteConfig();
    
    // Create a copy of the config and strip sensitive data
    const publicConfig = { ...config };
    delete (publicConfig as any).lockdownPasscode;

    return NextResponse.json(publicConfig, {
      headers: {
        "Cache-Control": "no-store, max-age=0",
      },
    });
  } catch (error) {
    console.error("Failed to load public site config:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
