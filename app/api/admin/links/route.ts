import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const filePath = path.join(process.cwd(), "data", "links.json");

// GET
export async function GET() {
  const file = await fs.readFile(filePath, "utf8");
  return NextResponse.json(JSON.parse(file));
}

// PUT
export async function PUT(req: Request) {
  const body = await req.json();

  await fs.writeFile(
    filePath,
    JSON.stringify(body, null, 2),
    "utf8"
  );

  return NextResponse.json({
    success: true,
    message: "Links updated successfully",
  });
}