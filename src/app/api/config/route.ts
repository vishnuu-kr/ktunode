import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const configPath = path.join(process.cwd(), "constants", "site-config.json");
    if (fs.existsSync(configPath)) {
      const data = fs.readFileSync(configPath, "utf8");
      return NextResponse.json(JSON.parse(data));
    }
  } catch (e) {
    console.error("Failed to read site configuration api:", e);
  }
  
  // Return fallback default values if file is missing
  return NextResponse.json({
    siteName: "KTU Node",
    maintenanceMode: false,
    activeScheme: "2024 Scheme",
    allowedBranches: ["cs", "ec", "me", "ce", "ee"],
    visibleSemesters: [1, 2, 3, 4, 5, 6, 7, 8],
    activeTools: {
      attendance: true,
      gpa: true,
      runway: true,
      lab: true
    },
    externalLinks: {
      studentLogin: "https://app.ktu.edu.in",
      ktuPortal: "https://ktu.edu.in"
    },
    bannerText: "",
    bannerEnabled: false
  });
}
