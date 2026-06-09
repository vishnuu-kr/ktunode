// Run: node scripts/get-admin-key.js
// Make sure ADMIN_SECRET_KEY is set in your shell or .env.local

const crypto = require("crypto");

// Try to load from .env.local
let secret = process.env.ADMIN_SECRET_KEY;
if (!secret) {
  try {
    const fs = require("fs");
    const envContent = fs.readFileSync(".env.local", "utf8");
    const match = envContent.match(/ADMIN_SECRET_KEY\s*=\s*(.+)/);
    if (match) secret = match[1].trim().replace(/^["']|["']$/g, "");
  } catch {}
}

if (!secret) {
  console.error("ADMIN_SECRET_KEY not found.");
  console.error("Either:");
  console.error("  1. Set it in .env.local: ADMIN_SECRET_KEY=your_secret_here");
  console.error("  2. Or set it in your shell before running this script");
  process.exit(1);
}

const key = crypto.createHash("sha256").update(secret).digest("hex").slice(0, 16);
console.log(`\nYour admin access key: ${key}\n`);
console.log(`Bookmark this URL:\n  https://ktunode.com/admin?key=${key}\n`);
