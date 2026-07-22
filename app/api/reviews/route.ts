import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const filePath = path.join(process.cwd(), "data", "reviews.json");

// ====================
// GET ALL REVIEWS
// ====================

export async function GET() {
  try {
    const file = await fs.readFile(filePath, "utf8");
    const reviews = JSON.parse(file);

    return NextResponse.json(reviews);

  } catch (err) {
    return NextResponse.json([]);
  }
}

// ====================
// SAVE REVIEW
// ====================

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    let reviews = [];

    try {
      const file = await fs.readFile(filePath, "utf8");
      reviews = JSON.parse(file);
    } catch {}

    reviews.push({
      id: Date.now(),
      ...body,
      status: "pending",
      createdAt: new Date().toISOString(),
    });

    await fs.writeFile(
      filePath,
      JSON.stringify(reviews, null, 2)
    );

    return NextResponse.json({
      success: true,
    });

  } catch (err) {
    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}