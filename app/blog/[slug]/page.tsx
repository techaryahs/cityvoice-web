import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { formatBlogDate } from "@/lib/blogs";
import { readBlogs } from "@/lib/blogs-server";

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = readBlogs().find((item) => item.slug === slug);

  if (!blog) {
    return {
      title: "Blog not found | CityVoice",
    };
  }

  return {
    title: `${blog.title} | CityVoice`,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      images: [blog.image],
    },
  };
}

export default async function BlogDetailPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const blog = readBlogs().find((item) => item.slug === slug);

  if (!blog || !blog.published) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16 text-slate-900">
      <div className="mx-auto max-w-5xl">
        <Link href="/" className="text-sm font-semibold text-blue-600">
          ← Back to home
        </Link>

        <div className="mt-8 overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm">
          <div className="relative h-[420px] w-full">
            <Image src={blog.image} alt={blog.title} fill className="object-cover" />
          </div>

          <div className="p-8 md:p-12">
            <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
              <span className="rounded-full bg-blue-50 px-3 py-1 font-semibold text-blue-700">{blog.category}</span>
              <span>{formatBlogDate(blog.createdAt)}</span>
              <span>•</span>
              <span>{blog.readTime}</span>
            </div>

            <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
              {blog.title}
            </h1>

            <p className="mt-5 text-lg leading-8 text-slate-600">{blog.description}</p>

            <div className="mt-10 whitespace-pre-line text-base leading-8 text-slate-700">
              {blog.content}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
