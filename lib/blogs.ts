import slugify from "slugify";

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  category: string;
  image: string;
  featured: boolean;
  createdAt: string;
  updatedAt: string;
  author: string;
  readTime: string;
  published: boolean;
}

export interface BlogCreateInput {
  title: string;
  slug?: string;
  description: string;
  content: string;
  category: string;
  image?: string;
  featured?: boolean;
  published?: boolean;
  author?: string;
}

export function formatBlogDate(date: string): string {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}

export function calculateReadTime(content: string): string {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}

export function createSlug(input: string): string {
  return slugify(input, { lower: true, strict: true, trim: true });
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

export function getPublishedBlogs(blogs: BlogPost[]): BlogPost[] {
  return [...blogs]
    .filter((blog) => blog.published)
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
}

export function getFeaturedBlog(blogs: BlogPost[]): BlogPost | undefined {
  const publishedBlogs = getPublishedBlogs(blogs);
  return publishedBlogs.find((blog) => blog.featured) ?? publishedBlogs[0];
}
