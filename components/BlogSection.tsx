"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaClock,
  FaNewspaper,
} from "react-icons/fa";

const blogs = [
  {
    title: "How Potholes Affect Road Safety During Monsoon",
    description:
      "Poor road maintenance causes thousands of accidents every year. Learn how timely reporting can help municipalities respond faster.",
    image: "/images/blog/road.jpg",
    category: "Road Safety",
    date: "12 Jan 2026",
    time: "5 min read",
    featured: true,
  },
  {
    title: "Why Garbage Complaints Should Be Reported Early",
    description:
      "Clean streets improve health, reduce pollution and make cities more livable for everyone.",
    image: "/images/blog/garbage.jpg",
    category: "Clean City",
    date: "08 Jan 2026",
    time: "3 min read",
  },
  {
    title: "Street Light Not Working? Here's What To Do",
    description:
      "Street lighting improves safety for both pedestrians and drivers. Report faulty lights instantly.",
    image: "/images/blog/streetlight.jpg",
    category: "Public Safety",
    date: "05 Jan 2026",
    time: "4 min read",
  },
];

export default function BlogSection() {
  const featured = blogs.find((b) => b.featured);
  const others = blogs.filter((b) => !b.featured);

  return (
    <section
    id="blog"
    className="scroll-mt-28 relative overflow-hidden py-32"
    >

      {/* Background Glow */}

      <div className="absolute left-1/2 top-20 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[160px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

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

          <h2 className="mt-6 text-5xl md:text-6xl font-black text-slate-900">

            Smart City Insights

          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">

            Explore articles, civic awareness tips and municipal updates
            that help citizens build cleaner, smarter and safer cities.

          </p>

        </motion.div>

        {/* Layout */}

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {/* Featured */}

          {featured && (

            <motion.article
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-[34px] border border-white/60 bg-white/80 shadow-[0_30px_80px_rgba(15,23,42,.08)] backdrop-blur-xl lg:col-span-2"
            >

              <div className="relative h-[430px] overflow-hidden">

                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute left-6 top-6 rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white">

                  {featured.category}

                </div>

              </div>

              <div className="p-10">

                <div className="flex items-center gap-4 text-sm text-slate-500">

                  <span>{featured.date}</span>

                  <span>•</span>

                  <span className="flex items-center gap-2">

                    <FaClock />

                    {featured.time}

                  </span>

                </div>

                <h3 className="mt-5 text-4xl font-black text-slate-900 transition group-hover:text-blue-600">

                  {featured.title}

                </h3>

                <p className="mt-6 text-lg leading-8 text-slate-600">

                  {featured.description}

                </p>

                <button className="mt-8 flex items-center gap-3 font-semibold text-blue-600">

                  Read Full Article

                  <FaArrowRight className="transition group-hover:translate-x-2" />

                </button>

              </div>

            </motion.article>

          )}

          {/* Side Blogs */}

          <div className="flex flex-col gap-8">

            {others.map((blog, index) => (

              <motion.article
                key={index}
                whileHover={{ y: -8 }}
                className="group overflow-hidden rounded-[30px] border border-white/60 bg-white/80 shadow-[0_20px_60px_rgba(15,23,42,.08)] backdrop-blur-xl"
              >

                <div className="relative h-56 overflow-hidden">

                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute left-5 top-5 rounded-full bg-blue-600 px-4 py-2 text-xs font-semibold text-white">

                    {blog.category}

                  </div>

                </div>

                <div className="p-6">

                  <div className="flex items-center gap-3 text-sm text-slate-500">

                    <span>{blog.date}</span>

                    <span>•</span>

                    <span>{blog.time}</span>

                  </div>

                  <h3 className="mt-4 text-2xl font-bold text-slate-900 transition group-hover:text-blue-600">

                    {blog.title}

                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">

                    {blog.description}

                  </p>

                  <button className="mt-6 flex items-center gap-3 font-semibold text-blue-600">

                    Read More

                    <FaArrowRight className="transition group-hover:translate-x-2" />

                  </button>

                </div>

              </motion.article>

            ))}

          </div>

        </div>

        {/* Button */}

        <div className="mt-20 text-center">

          <button className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-10 py-5 font-semibold text-white shadow-[0_20px_50px_rgba(37,99,235,.30)] transition hover:-translate-y-1 hover:shadow-[0_30px_60px_rgba(37,99,235,.40)]">

            View All Articles

          </button>

        </div>

      </div>

    </section>
  );
}