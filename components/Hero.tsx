"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaGooglePlay,
  FaApple,
  FaPlay,
  FaMapMarkerAlt,
  FaCheckCircle,
} from "react-icons/fa";
import ReviewCard from "./ReviewCard";

const reviews = [
  {
    name: "Rahul Sharma",
    city: "Mumbai",
    review:
      "Reported a pothole and it was repaired in just two days.",
    image: "/images/users/user1.jpg",
    complaint: "Road Repair Completed",
  },
  {
    name: "Priya Verma",
    city: "Delhi",
    review:
      "Garbage collection complaint resolved within 24 hours.",
    image: "/images/users/user2.jpg",
    complaint: "Garbage Cleared",
  },
  {
    name: "Amit Singh",
    city: "Lucknow",
    review:
      "The tracking system kept me updated until the issue was fixed.",
    image: "/images/users/user3.jpg",
    complaint: "Water Leakage Fixed",
  },
];

export default function Hero() {
  return (
    <section
    id="home"
    className="relative -isolate overflow-hidden scroll-mt-24 bg-gradient-to-b from-white via-slate-50 to-blue-50"
    >

      {/* Background Glow */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,.10),transparent_34%),radial-gradient(circle_at_top_right,rgba(34,211,238,.08),transparent_38%)]" />

      <div className="absolute left-1/2 top-[-200px] h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[160px]" />

      <div className="absolute -bottom-32 right-0 h-[700px] w-[700px] rounded-full bg-cyan-400/08 blur-[160px]" />

      {/* Grid */}

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-5 md:px-6 lg:px-8 2xl:max-w-[1600px]">
        <div className="relative grid items-center gap-20 pt-10 pb-24 lg:grid-cols-[1fr_1.05fr]">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
        >

          {/* Badge */}

          <motion.div
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: .2 }}
            className="inline-flex items-center gap-3 rounded-full border border-blue-200 bg-white/80 backdrop-blur-xl px-5 py-3 shadow-lg"
          >

            <div className="h-9 w-9 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">

              <FaMapMarkerAlt />

            </div>

            <div>

              <p className="font-semibold text-slate-900">

                Smart City Platform

              </p>

              <p className="text-xs text-slate-500">

                Trusted by Municipal Corporations

              </p>

            </div>

          </motion.div>

          {/* Heading */}

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .3 }}
            className="mt-10 text-[58px] md:text-[82px] leading-[0.95] font-black tracking-tight text-slate-900"
          >

            Transform

            <br />

            Your

            <br />

            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">

              City

            </span>

            {" "}Through

            <br />

            Citizen Voices.

          </motion.h1>

          {/* Subtitle */}

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .45 }}
            className="mt-8 text-xl leading-9 text-slate-600 max-w-xl"
          >

            Report potholes, garbage, water leakage,
            damaged roads and civic issues directly to
            local authorities with complete transparency
            and real-time progress tracking.

          </motion.p>

          {/* Trust */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .6 }}
            className="mt-8 flex flex-wrap gap-6"
          >

            <div className="flex items-center gap-2">

              <FaCheckCircle className="text-green-500" />

              <span className="font-medium">

                100% Free

              </span>

            </div>

            <div className="flex items-center gap-2">

              <FaCheckCircle className="text-green-500" />

              <span className="font-medium">

                Real-time Tracking

              </span>

            </div>

            <div className="flex items-center gap-2">

              <FaCheckCircle className="text-green-500" />

              <span className="font-medium">

                Secure Reports

              </span>

            </div>

          </motion.div>

          {/* Buttons */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 flex flex-wrap items-center gap-5"
            >
            {/* Android */}
            <button className="group rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-7 py-5 text-white shadow-[0_20px_50px_rgba(37,99,235,.30)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_60px_rgba(37,99,235,.40)]">
                <div className="flex items-center gap-4">
                <FaGooglePlay className="text-3xl" />

                <div className="text-left">
                    <p className="text-[11px] uppercase tracking-widest text-blue-100">
                    Download for
                    </p>

                    <h3 className="text-lg font-semibold">
                    Android
                    </h3>
                </div>
                </div>
            </button>

            {/* iOS */}
            <button className="group rounded-2xl border border-slate-200 bg-white px-7 py-5 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="flex items-center gap-4">
                <FaApple className="text-3xl text-slate-900" />

                <div className="text-left">
                    <p className="text-[11px] uppercase tracking-widest text-slate-500">
                    Download for
                    </p>

                    <h3 className="text-lg font-semibold text-slate-900">
                    iPhone
                    </h3>
                </div>
                </div>
            </button>

            {/* Demo */}
            <button className="group rounded-2xl border border-blue-100 bg-blue-50 px-7 py-5 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-100 hover:shadow-xl">
                <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white transition group-hover:scale-110">
                    <FaPlay className="ml-1" />
                </div>

                <div className="text-left">
                    <p className="text-[11px] uppercase tracking-widest text-slate-500">
                    Explore
                    </p>

                    <h3 className="text-lg font-semibold text-slate-900">
                    Watch Demo
                    </h3>
                </div>
                </div>
            </button>
        </motion.div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          className="relative"
        >

          {/* Glow */}

          <div className="absolute inset-0 scale-110 rounded-full bg-blue-500/20 blur-[130px]" />

          {/* Image */}

          <div className="relative z-20 overflow-hidden rounded-[42px] border border-white/40 bg-white shadow-[0_35px_90px_rgba(0,0,0,.18)]">

            <Image
              src="/images/bridge.png"
              alt="Bridge"
              width={900}
              height={750}
              priority
              className="h-[650px] w-full object-cover"
            />

            {/* Overlay */}

            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent" />

          </div>

        </motion.div>

                <div className="grid grid-cols-3 gap-5 mt-16">

        <div className="rounded-3xl bg-white border border-slate-100 shadow-xl p-6">

            <h2 className="text-5xl font-black text-blue-600">
            100K+
            </h2>

            <p className="mt-2 text-slate-500">
            Citizens
            </p>

        </div>

        <div className="rounded-3xl bg-white border border-slate-100 shadow-xl p-6">

            <h2 className="text-5xl font-black text-blue-600">
            25K+
            </h2>

            <p className="mt-2 text-slate-500">
            Complaints
            </p>

        </div>

        <div className="rounded-3xl bg-white border border-slate-100 shadow-xl p-6">

            <h2 className="text-5xl font-black text-blue-600">
            98%
            </h2>

            <p className="mt-2 text-slate-500">
            Resolved
            </p>

        </div>

        </div>
        </div>

      </div>

      {/* Reviews */}

{/* <section className="mt-24">

  <div className="text-center">

    <span className="rounded-full bg-blue-100 px-4 py-2 text-blue-700 font-semibold">
      ⭐ Citizen Reviews
    </span>

    <h2 className="mt-6 text-5xl font-black text-slate-900">
      Loved by Citizens
    </h2>

    <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
      Thousands of citizens are already helping improve their cities
      through transparent reporting and faster issue resolution.
    </p>

  </div>

 <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-20">
  {reviews.map((review, index) => (
    <ReviewCard
      key={index}
      {...review}
      index={index}
    />
  ))}
</div>

</section> */}

    </section>
  );
}