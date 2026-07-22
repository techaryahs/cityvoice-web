import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const filePath = path.join(process.cwd(), "data", "reviews.json");

export async function GET() {
  try {
    const file = await fs.readFile(filePath, "utf8");
    const reviews = JSON.parse(file);

    const approved = reviews.filter(
      (review: any) => review.status === "approved"
    );

    return NextResponse.json(approved);
  } catch (error) {
    console.error(error);
    return NextResponse.json([]);
  }
}