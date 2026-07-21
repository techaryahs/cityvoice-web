import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data", "categories.json");

export async function GET() {
  const data = fs.readFileSync(filePath, "utf8");

  return NextResponse.json(JSON.parse(data));
}

export async function POST(req: Request) {
  const { category } = await req.json();

  const categories = JSON.parse(fs.readFileSync(filePath, "utf8"));

  if (!categories.includes(category)) {
    categories.push(category);

    fs.writeFileSync(
      filePath,
      JSON.stringify(categories, null, 2)
    );
  }

  return NextResponse.json({
    success: true,
    categories,
  });
}