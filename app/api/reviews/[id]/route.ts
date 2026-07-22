import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const filePath = path.join(process.cwd(), "data", "reviews.json");

// ======================
// APPROVE REVIEW
// ======================

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const file = await fs.readFile(filePath, "utf8");
    const reviews = JSON.parse(file);

    const index = reviews.findIndex(
      (r: any) => r.id === Number(id)
    );

    if (index === -1) {
      return NextResponse.json(
        { message: "Review not found." },
        { status: 404 }
      );
    }

    reviews[index].status = "approved";

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

// ======================
// DELETE REVIEW
// ======================

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const file = await fs.readFile(filePath, "utf8");
    let reviews = JSON.parse(file);

    reviews = reviews.filter(
      (r: any) => r.id !== Number(id)
    );

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