import { NextResponse } from "next/server";
import { readSiteConfig } from "@/lib/siteConfig";

export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json(await readSiteConfig(), {
    headers: {
      "Cache-Control": "no-store, max-age=0",
    },
  });
}
