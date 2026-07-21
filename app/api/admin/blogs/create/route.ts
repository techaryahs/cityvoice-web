import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { v4 as uuid } from "uuid";

const filePath = path.join(process.cwd(), "data", "blogs.json");

export async function POST(req: Request) {
  const body = await req.json();

  const blogs = JSON.parse(
    fs.readFileSync(filePath, "utf8")
  );

  blogs.push({
    id: uuid(),
    ...body,
    createdAt: new Date().toISOString(),
  });

  fs.writeFileSync(
    filePath,
    JSON.stringify(blogs, null, 2)
  );

  return NextResponse.json({
    success: true,
  });
}