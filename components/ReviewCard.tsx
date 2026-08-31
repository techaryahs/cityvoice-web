"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaQuoteLeft,
  FaStar,
  FaCheckCircle,
  FaTimes,
} from "react-icons/fa";

interface ReviewCardProps {
  name: string;
  review: string;
  index?: number;
}

export default function ReviewCard({
  name,
  review,
  index = 0,
}: ReviewCardProps) {
  const [showModal, setShowModal] = useState(false);

  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  const shortReview =
    review.length > 150
      ? review.slice(0, 150) + "..."
      : review;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.15 }}
        whileHover={{
          y: -10,
          scale: 1.02,
        }}
        className={`group relative flex h-full min-h-[470px] flex-col overflow-hidden rounded-[34px]
        border border-slate-100
        bg-white
        p-8
        shadow-[0_20px_70px_rgba(15,23,42,.08)]
        transition-all
        duration-500
        hover:border-blue-200
        hover:shadow-[0_30px_90px_rgba(37,99,235,.15)]
        ${
          index === 1
            ? "lg:translate-y-8"
            : index === 2
            ? "lg:-translate-y-4"
            : ""
        }`}
      >
        {/* Decorative Glow */}
        <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-100/40 blur-3xl" />

        {/* Top */}
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex gap-1 text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-lg" />
            ))}
          </div>

          <div className="flex items-center gap-2 rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
            <FaCheckCircle />
            Verified
          </div>
        </div>

        {/* Quote Icon */}
        <FaQuoteLeft className="relative z-10 mt-8 text-5xl text-blue-100" />

        {/* Review */}
        <div className="relative z-10 mt-6 flex-1">
          <p className="text-lg italic leading-8 text-slate-600">
            "{shortReview}"
          </p>

          {review.length > 150 && (
            <button
              onClick={() => setShowModal(true)}
              className="mt-6 font-semibold text-blue-600 transition hover:text-blue-700"
            >
              Read More →
            </button>
          )}
        </div>

        {/* Divider */}
        <div className="my-7 h-px bg-slate-200" />

        {/* Footer */}
        <div className="relative z-10 flex items-center gap-4">
          <div
            className="flex h-16 w-16 items-center justify-center rounded-full
            bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-400
            text-xl font-bold text-white
            shadow-lg ring-4 ring-blue-100"
          >
            {initials}
          </div>

          <div>
            <h3 className="text-xl font-bold text-slate-900">
              {name}
            </h3>

            <p className="text-sm text-slate-500">
              Verified Citizen
            </p>
          </div>
        </div>
      </motion.div>

      {/* ========================= */}
      {/* Review Modal */}
      {/* ========================= */}

      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModal(false)}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 p-4 backdrop-blur-md"
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
                y: 30,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
              }}
              transition={{
                duration: 0.25,
              }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl rounded-[34px] bg-white p-6 sm:p-10 shadow-2xl"
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute right-4 top-4 sm:right-6 sm:top-6 text-xl text-slate-400 transition hover:text-red-500"
              >
                <FaTimes />
              </button>

              <div className="flex items-center gap-4 sm:gap-5">
                <div
                  className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full
                  bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-400
                  text-xl sm:text-2xl font-bold text-white shadow-lg"
                >
                  {initials}
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold">
                    {name}
                  </h2>

                  <div className="mt-2 flex items-center gap-2 rounded-full bg-green-50 px-3 py-1 text-xs sm:text-sm font-semibold text-green-700 w-fit">
                    <FaCheckCircle />
                    Verified Citizen
                  </div>
                </div>
              </div>

              <div className="mt-6 sm:mt-8 flex gap-1 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className="text-xl sm:text-2xl"
                  />
                ))}
              </div>

              <FaQuoteLeft className="mt-6 sm:mt-10 text-4xl sm:text-6xl text-blue-100" />

              <p className="mt-4 sm:mt-6 whitespace-pre-line text-lg sm:text-xl leading-8 sm:leading-10 text-slate-700">
                "{review}"
              </p>

              <button
                onClick={() => setShowModal(false)}
                className="mt-8 sm:mt-10 w-full sm:w-auto rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-semibold text-white shadow-lg transition hover:scale-105"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}