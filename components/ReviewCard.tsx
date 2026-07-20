"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaCheckCircle, FaStar } from "react-icons/fa";

interface ReviewCardProps {
  name: string;
  city: string;
  review: string;
  image: string;
  complaint: string;
  index?: number;
}

export default function ReviewCard({
  name,
  city,
  review,
  image,
  complaint,
  index = 0,
}: ReviewCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
      whileHover={{ y: -10 }}
      className={`rounded-[32px]
      bg-white/80
      backdrop-blur-xl
      border border-white
      shadow-[0_25px_70px_rgba(15,23,42,.08)]
      p-8
      transition-all
      duration-500
      ${
        index === 1
          ? "lg:translate-y-10"
          : index === 2
          ? "lg:-translate-y-4"
          : ""
      }`}
    >
      <div className="flex gap-1 text-yellow-400 text-lg">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} />
        ))}
      </div>

      <FaQuoteLeft className="text-3xl text-blue-100 mt-6" />

      <p className="mt-5 text-slate-600 leading-8 text-lg italic">
        "{review}"
      </p>

      <div className="mt-8 flex items-center gap-4">
        <Image
          src={image}
          alt={name}
          width={60}
          height={60}
          className="rounded-full object-cover"
        />

        <div>
          <h3 className="font-bold text-lg">{name}</h3>
          <p className="text-slate-500">{city}</p>
        </div>
      </div>

      <div className="mt-6 flex items-center gap-2 text-green-600">
        <FaCheckCircle />
        <span className="font-medium">{complaint}</span>
      </div>
    </motion.div>
  );
}