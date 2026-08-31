"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowRight, FaClock } from "react-icons/fa";

interface BlogCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  featured?: boolean;
}

export default function BlogCard({
  title,
  description,
  image,
  category,
  date,
  readTime,
  featured = false,
}: BlogCardProps) {
  return (
    <motion.article
      whileHover={{ y: -10 }}
      transition={{ duration: .4 }}
      className={`group overflow-hidden rounded-[32px] border border-white/60 bg-white/80 backdrop-blur-xl shadow-[0_25px_70px_rgba(15,23,42,.08)]
      ${featured ? "lg:col-span-2" : ""}`}
    >
      <div className={`relative overflow-hidden ${featured ? "h-[250px] sm:h-[350px] md:h-[420px]" : "h-56 sm:h-64"}`}>
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute left-6 top-6 rounded-full bg-blue-600 px-4 py-2 text-xs sm:text-sm font-semibold text-white">
          {category}
        </div>
      </div>

      <div className="p-6 sm:p-8">

        <div className="flex items-center gap-4 text-sm text-slate-500">

          <span>{date}</span>

          <span>•</span>

          <span className="flex items-center gap-2">

            <FaClock />

            {readTime}

          </span>

        </div>

        <h3 className="mt-4 sm:mt-5 text-2xl sm:text-3xl font-black text-slate-900 group-hover:text-blue-600 transition">

          {title}

        </h3>

        <p className="mt-5 leading-8 text-slate-600">

          {description}

        </p>

        <button className="mt-8 flex items-center gap-3 font-semibold text-blue-600">

          Read Article

          <FaArrowRight className="group-hover:translate-x-2 transition" />

        </button>

      </div>
    </motion.article>
  );
}