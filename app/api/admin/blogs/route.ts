import { NextResponse } from "next/server";
import { getPublishedBlogs } from "@/lib/blogs";
import { readBlogs } from "@/lib/blogs-server";

export const runtime = "nodejs";

export async function GET() {
  const blogs = getPublishedBlogs(readBlogs());
  return NextResponse.json(blogs);
}
