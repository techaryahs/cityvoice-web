import Link from "next/link";
import Image from "next/image";
import { formatBlogDate, getPublishedBlogs } from "@/lib/blogs";
import { readBlogs } from "@/lib/blogs-server";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Articles | CityVoice",
  description: "Browse the latest published articles and civic insights.",
};

export default function BlogsPage() {
  const blogs = getPublishedBlogs(readBlogs());

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16 text-slate-900">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
              Stories & updates
            </p>
            <h1 className="mt-2 text-4xl font-black tracking-tight text-slate-900">
              All articles
            </h1>
            <p className="mt-3 max-w-2xl text-lg text-slate-600">
              Explore the latest public posts and civic insights from the CityVoice community.
            </p>
          </div>
        </div>

        {blogs.length === 0 ? (
          <div className="rounded-3xl border border-slate-200 bg-white p-12 text-center shadow-sm">
            <p className="text-lg font-semibold text-slate-700">No blogs published yet.</p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {blogs.map((blog) => (
              <Link key={blog.id} href={`/blog/${blog.slug}`} className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="relative h-56 overflow-hidden">
                  <Image src={blog.image} alt={blog.title} fill className="object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <p className="text-sm font-semibold text-blue-600">{blog.category}</p>
                  <h2 className="mt-3 text-2xl font-bold text-slate-900">{blog.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{blog.description}</p>
                  <div className="mt-5 flex items-center gap-3 text-sm text-slate-500">
                    <span>{formatBlogDate(blog.createdAt)}</span>
                    <span>•</span>
                    <span>{blog.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
