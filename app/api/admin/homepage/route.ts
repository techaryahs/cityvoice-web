import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const type = formData.get("type") as string | null;
    const action = formData.get("action") as string | null; // e.g., "delete"

    if (!type) {
      return NextResponse.json({ success: false, message: "Missing type." }, { status: 400 });
    }

    if (type !== "logo" && type !== "heroImage") {
      return NextResponse.json({ success: false, message: "Invalid type." }, { status: 400 });
    }

    const file = formData.get("image") as File | null;
    
    if (action !== "delete" && !file) {
      return NextResponse.json({ success: false, message: "Missing image." }, { status: 400 });
    }

    const uploadDir = path.join(process.cwd(), "public", "uploads", "homepage");
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    // Read current config to delete old file
    const configPath = path.join(process.cwd(), "data", "homepage.json");
    let config: any = { logo: "/images/logo.jpeg", heroImage: "/images/bridge.png" };
    if (fs.existsSync(configPath)) {
      config = JSON.parse(fs.readFileSync(configPath, "utf-8"));
    }

    const oldFilePath = config[type];
    
    // Delete old file if it's in /uploads/homepage/
    if (oldFilePath && oldFilePath.startsWith("/uploads/homepage/")) {
      const oldFileAbsPath = path.join(process.cwd(), "public", oldFilePath);
      if (fs.existsSync(oldFileAbsPath)) {
        fs.unlinkSync(oldFileAbsPath);
      }
    }

    if (action === "delete") {
      const defaultPath = type === "logo" ? "/images/logo.jpeg" : "/images/bridge.png";
      config[type] = defaultPath;
      fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
      return NextResponse.json({ success: true, image: defaultPath });
    }
    
    // Save new file
    const extension = path.extname(file!.name) || (type === "logo" ? ".png" : ".jpg");
    const fileName = `${type}-${Date.now()}${extension}`;
    const filePath = path.join(uploadDir, fileName);
    const publicPath = `/uploads/homepage/${fileName}`;

    const buffer = Buffer.from(await file!.arrayBuffer());
    fs.writeFileSync(filePath, buffer);

    // Update config
    config[type] = publicPath;
    fs.writeFileSync(configPath, JSON.stringify(config, null, 2));

    return NextResponse.json({ success: true, image: publicPath });
  } catch (error) {
    console.error("Error uploading image:", error);
    return NextResponse.json({ success: false, message: "Internal server error." }, { status: 500 });
  }
}
