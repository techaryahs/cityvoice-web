import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const runtime = "nodejs";

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "data", "homepage.json");
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({
        logo: "/images/logo.jpeg",
        heroImage: "/images/bridge.png"
      });
    }

    const data = fs.readFileSync(filePath, "utf-8");
    const json = JSON.parse(data);
    
    // Default fallbacks if they are empty
    return NextResponse.json({
      logo: json.logo || "/images/logo.jpeg",
      heroImage: json.heroImage || "/images/bridge.png",
    });
  } catch (error) {
    console.error("Error reading homepage.json:", error);
    return NextResponse.json({
      logo: "/images/logo.jpeg",
      heroImage: "/images/bridge.png"
    }, { status: 500 });
  }
}
