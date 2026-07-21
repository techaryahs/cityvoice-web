import { NextResponse } from "next/server";
import { readBlogs, writeBlogs } from "@/lib/blogs-server";

export const runtime = "nodejs";

export async function DELETE(req: Request) {
  const body = await req.json();
  const id = body?.id?.toString();

  if (!id) {
    return NextResponse.json({ success: false, message: "Blog id is required." }, { status: 400 });
  }

  const blogs = readBlogs();
  const nextBlogs = blogs.filter((blog) => blog.id !== id);

  if (nextBlogs.length === blogs.length) {
    return NextResponse.json({ success: false, message: "Blog not found." }, { status: 404 });
  }

  writeBlogs(nextBlogs);
  return NextResponse.json({ success: true });
}