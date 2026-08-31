"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight, FaClock, FaNewspaper } from "react-icons/fa";
import type { BlogPost } from "@/lib/blogs";
import { formatBlogDate, getFeaturedBlog } from "@/lib/blogs";

export default function BlogSection() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function loadBlogs() {
      try {
        const response = await fetch("/api/blogs", { cache: "no-store" });
        if (!response.ok) {
          throw new Error("Unable to load articles.");
        }

        const data = (await response.json()) as BlogPost[];
        if (isMounted) {
          setBlogs(data);
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err.message : "Unable to load articles.");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadBlogs();

    return () => {
      isMounted = false;
    };
  }, []);

  const featured = getFeaturedBlog(blogs);
  const others = blogs.filter((blog) => blog.id !== featured?.id);

  return (
    <section id="blog" className="scroll-mt-28 relative overflow-hidden py-32">
      <div className="absolute left-1/2 top-20 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-5 py-2 font-semibold text-blue-700">
            <FaNewspaper />
            Latest Updates
          </span>

          <h2 className="mt-6 text-4xl sm:text-5xl font-black text-slate-900 md:text-6xl">
            Smart City Insights
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Explore articles, civic awareness tips and municipal updates that help citizens build cleaner, smarter and safer cities.
          </p>
        </motion.div>

        {loading && (
          <div className="mt-20 rounded-[30px] border border-white/60 bg-white/80 p-10 text-center shadow-[0_20px_60px_rgba(15,23,42,.08)] backdrop-blur-xl">
            <p className="text-lg font-semibold text-slate-700">Loading articles...</p>
          </div>
        )}

        {error && !loading && (
          <div className="mt-20 rounded-[30px] border border-white/60 bg-white/80 p-10 text-center shadow-[0_20px_60px_rgba(15,23,42,.08)] backdrop-blur-xl">
            <p className="text-lg font-semibold text-slate-700">{error}</p>
          </div>
        )}

        {!loading && !error && blogs.length === 0 && (
          <div className="mt-20 rounded-[30px] border border-white/60 bg-white/80 p-10 text-center shadow-[0_20px_60px_rgba(15,23,42,.08)] backdrop-blur-xl">
            <p className="text-lg font-semibold text-slate-700">No articles published yet.</p>
          </div>
        )}

        {!loading && !error && blogs.length > 0 && (
          <div className="mt-20 grid gap-8 lg:grid-cols-3">
            {featured && (
              <motion.article
                whileHover={{ y: -8 }}
                className="group overflow-hidden rounded-[34px] border border-white/60 bg-white/80 shadow-[0_30px_80px_rgba(15,23,42,.08)] backdrop-blur-xl lg:col-span-2"
              >
                <div className="relative h-[250px] sm:h-[300px] md:h-[430px] overflow-hidden">
                  <Image src={featured.image} alt={featured.title} fill className="object-cover transition duration-700 group-hover:scale-110" />
                  <div className="absolute left-6 top-6 rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white">
                    {featured.category}
                  </div>
                </div>

                <div className="p-6 sm:p-10">
                  <div className="flex items-center gap-4 text-sm text-slate-500">
                    <span>{formatBlogDate(featured.createdAt)}</span>
                    <span>•</span>
                    <span className="flex items-center gap-2">
                      <FaClock />
                      {featured.readTime}
                    </span>
                  </div>

                  <h3 className="mt-4 sm:mt-5 text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 transition group-hover:text-blue-600">
                    {featured.title}
                  </h3>

                  <p className="mt-6 text-lg leading-8 text-slate-600">{featured.description}</p>

                  <Link href={`/blog/${featured.slug}`} className="mt-8 flex items-center gap-3 font-semibold text-blue-600">
                    Read Full Article
                    <FaArrowRight className="transition group-hover:translate-x-2" />
                  </Link>
                </div>
              </motion.article>
            )}

            <div className="flex flex-col gap-8">
              {others.map((blog) => (
                <motion.article
                  key={blog.id}
                  whileHover={{ y: -8 }}
                  className="group overflow-hidden rounded-[30px] border border-white/60 bg-white/80 shadow-[0_20px_60px_rgba(15,23,42,.08)] backdrop-blur-xl"
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image src={blog.image} alt={blog.title} fill className="object-cover transition duration-700 group-hover:scale-110" />
                    <div className="absolute left-5 top-5 rounded-full bg-blue-600 px-4 py-2 text-xs font-semibold text-white">
                      {blog.category}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-3 text-sm text-slate-500">
                      <span>{formatBlogDate(blog.createdAt)}</span>
                      <span>•</span>
                      <span>{blog.readTime}</span>
                    </div>

                    <h3 className="mt-4 text-2xl font-bold text-slate-900 transition group-hover:text-blue-600">
                      {blog.title}
                    </h3>

                    <p className="mt-4 leading-7 text-slate-600">{blog.description}</p>

                    <Link href={`/blog/${blog.slug}`} className="mt-6 flex items-center gap-3 font-semibold text-blue-600">
                      Read More
                      <FaArrowRight className="transition group-hover:translate-x-2" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        )}

        <div className="mt-20 text-center">
          <Link href="/blogs" className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-10 py-5 font-semibold text-white shadow-[0_20px_50px_rgba(37,99,235,.30)] transition hover:-translate-y-1 hover:shadow-[0_30px_60px_rgba(37,99,235,.40)]">
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
}