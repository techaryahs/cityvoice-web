import { NextResponse } from "next/server";
import { readBlogs } from "@/lib/blogs-server";

export const runtime = "nodejs";

export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = readBlogs().find((item) => item.slug === slug);

  if (!blog) {
    return NextResponse.json({ error: "Blog not found" }, { status: 404 });
  }

  return NextResponse.json(blog);
}
