import { NextResponse } from "next/server";
import { normalizeBlogInput, readBlogs, writeBlogs } from "@/lib/blogs-server";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const body = await req.json();

  const title = body?.title?.toString()?.trim();
  const description = body?.description?.toString()?.trim();
  const content = body?.content?.toString()?.trim();
  const category = body?.category?.toString()?.trim();

  if (!title || !description || !content || !category) {
    return NextResponse.json(
      { success: false, message: "Title, description, content, and category are required." },
      { status: 400 }
    );
  }

  const blogs = readBlogs();
  const normalized = normalizeBlogInput({
    title,
    slug: body?.slug?.toString(),
    description,
    content,
    category,
    image: body?.image?.toString(),
    featured: Boolean(body?.featured),
    published: body?.published ?? true,
    author: body?.author?.toString(),
  });

  blogs.push(normalized);
  writeBlogs(blogs);

  return NextResponse.json({ success: true, blog: normalized });
}