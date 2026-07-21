import fs from "fs";
import path from "path";
import { createSlug, calculateReadTime, type BlogCreateInput, type BlogPost } from "@/lib/blogs";

const BLOGS_FILE_PATH = path.join(process.cwd(), "data", "blogs.json");
const BLOGS_IMAGE_DIRECTORY = path.join(process.cwd(), "public", "images", "blog");
const PLACEHOLDER_IMAGE = "/images/blog/placeholder.svg";

function ensureBlogsFile(): void {
  const dir = path.dirname(BLOGS_FILE_PATH);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  if (!fs.existsSync(BLOGS_FILE_PATH)) {
    fs.writeFileSync(BLOGS_FILE_PATH, "[]", "utf8");
  }

  if (!fs.existsSync(BLOGS_IMAGE_DIRECTORY)) {
    fs.mkdirSync(BLOGS_IMAGE_DIRECTORY, { recursive: true });
  }
}

export function readBlogs(): BlogPost[] {
  ensureBlogsFile();

  const fileContents = fs.readFileSync(BLOGS_FILE_PATH, "utf8");
  const parsed = JSON.parse(fileContents) as BlogPost[];

  return Array.isArray(parsed) ? parsed : [];
}

export function writeBlogs(blogs: BlogPost[]): void {
  ensureBlogsFile();
  fs.writeFileSync(BLOGS_FILE_PATH, JSON.stringify(blogs, null, 2), "utf8");
}

export function normalizeBlogInput(input: BlogCreateInput, options?: { id?: string; createdAt?: string; updatedAt?: string }): BlogPost {
  const existingBlogs = readBlogs();
  const existingSlugs = existingBlogs.map((blog) => blog.slug);
  const title = input.title.trim();
  const slug = buildUniqueSlug(input.slug?.trim() || createSlug(title), existingSlugs);
  const content = input.content.trim();
  const description = input.description.trim();
  const now = new Date().toISOString();

  return {
    id: options?.id ?? crypto.randomUUID(),
    title,
    slug,
    description,
    content,
    category: input.category.trim(),
    image: input.image?.trim() || PLACEHOLDER_IMAGE,
    featured: Boolean(input.featured),
    createdAt: options?.createdAt ?? now,
    updatedAt: options?.updatedAt ?? now,
    author: input.author?.trim() || "Admin",
    readTime: calculateReadTime(content),
    published: input.published ?? true,
  };
}

export function buildUniqueSlug(baseSlug: string, existingSlugs: string[]): string {
  const normalized = baseSlug || "blog";
  let candidate = normalized;
  let counter = 2;

  while (existingSlugs.includes(candidate)) {
    candidate = `${normalized}-${counter}`;
    counter += 1;
  }

  return candidate;
}
