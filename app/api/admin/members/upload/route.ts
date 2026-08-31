import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("image") as File | null;

    if (!file) {
      return NextResponse.json(
        { success: false, message: "No image provided." },
        { status: 400 }
      );
    }

    const uploadDir = path.join(process.cwd(), "public", "images", "members");
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    const extension = path.extname(file.name) || ".jpg";
    const fileName = `${Date.now()}-${file.name.replace(/\s+/g, "-")}`;
    const filePath = path.join(uploadDir, fileName);
    const imagePath = `/images/members/${fileName}`;

    const buffer = Buffer.from(await file.arrayBuffer());
    fs.writeFileSync(filePath, buffer);

    return NextResponse.json({ success: true, image: imagePath });
  } catch (error) {
    console.error("Error uploading member image:", error);
    return NextResponse.json(
      { success: false, message: "Failed to upload image." },
      { status: 500 }
    );
  }
}
