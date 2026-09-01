"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import {
  FaGooglePlay,
  FaApple,
  FaPlay,
  FaMapMarkerAlt,
  FaCheckCircle,
} from "react-icons/fa";


export default function Hero() {

  const [links, setLinks] = useState({
    instagram: "",
    facebook: "",
    youtube: "",
    android: "",
    ios: "",
    demo: "",
  });

  const [heroImage, setHeroImage] = useState("/images/bridge.png");

  useEffect(() => {
    const fetchLinks = async () => {
      try {
        const res = await fetch("/api/admin/links");

        if (!res.ok) {
          throw new Error("Failed to fetch links");
        }

        const data = await res.json();

        setLinks({
          instagram: data.instagram || "",
          facebook: data.facebook || "",
          youtube: data.youtube || "",
          android: data.android || "",
          ios: data.ios || "",
          demo: data.demo || "",
        });

        const hpRes = await fetch("/api/homepage");
        if (hpRes.ok) {
          const hpData = await hpRes.json();
          if (hpData.heroImage) setHeroImage(hpData.heroImage);
        }
      } catch (error) {
        console.error("Error loading website links:", error);
      }
    };

    fetchLinks();
  }, []);


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

                Modern Civic Technology

              </p>

              <p className="text-xs text-slate-500">

                Empowering Citizens & Communities

              </p>

            </div>

          </motion.div>

          {/* Heading */}

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .3 }}
            className="mt-10 text-4xl sm:text-[58px] md:text-[82px] leading-[1.1] sm:leading-[0.95] font-black tracking-tight text-slate-900"
          >

            See a Problem.
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Raise Your
            </span>
            <br />
            Voice.
          </motion.h1>

          {/* Subtitle */}

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .45 }}
            className="mt-8 text-lg sm:text-xl leading-relaxed sm:leading-9 text-slate-600 max-w-full sm:max-w-xl"
          >

            CityVoice helps citizens report local civic problems, gather community support, and bring attention to issues that matter. Your voice can drive real change.

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
            {/* Raise Voice */}
            <a
              href="#how-it-works"
              className="group rounded-2xl bg-gradient-to-r from-red-600 to-red-500 px-7 py-5 text-white shadow-[0_20px_50px_rgba(220,38,38,.30)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_60px_rgba(220,38,38,.40)]"
            >
              <div className="flex items-center gap-4">
                <div className="text-left">
                  <p className="text-[11px] uppercase tracking-widest text-red-100">
                    Take Action
                  </p>

                  <h3 className="text-lg font-semibold">
                    Raise Your Voice
                  </h3>
                </div>
              </div>
            </a>

            {/* Android */}
            <a
              href={links.android || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-slate-200 bg-white px-7 py-5 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-center gap-4">
                <FaGooglePlay className="text-3xl text-slate-900" />

                <div className="text-left">
                  <p className="text-[11px] uppercase tracking-widest text-slate-500">
                    Download App
                  </p>

                  <h3 className="text-lg font-semibold text-slate-900">
                    Android
                  </h3>
                </div>
              </div>
            </a>

            {/* iOS */}
            <a
              href={links.ios || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-slate-200 bg-white px-7 py-5 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-center gap-4">
                <FaApple className="text-3xl text-slate-900" />

                <div className="text-left">
                  <p className="text-[11px] uppercase tracking-widest text-slate-500">
                    Download App
                  </p>

                  <h3 className="text-lg font-semibold text-slate-900">
                    iPhone
                  </h3>
                </div>
              </div>
            </a>
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
              src={heroImage}
              alt="Bridge"
              width={900}
              height={750}
              priority
              className="h-[400px] sm:h-[500px] md:h-[650px] w-full object-cover"
            />

            {/* Overlay */}

            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent" />

          </div>

        </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-16">

          <div className="rounded-3xl bg-white border border-slate-100 shadow-xl p-6">

              <h2 className="text-4xl sm:text-5xl font-black text-blue-600">
              100K+
              </h2>

              <p className="mt-2 text-slate-500 font-medium">
              Citizens Connected
              </p>

          </div>

          <div className="rounded-3xl bg-white border border-slate-100 shadow-xl p-6">

              <h2 className="text-4xl sm:text-5xl font-black text-blue-600">
              25K+
              </h2>

              <p className="mt-2 text-slate-500 font-medium">
              Voices Raised
              </p>

          </div>

          <div className="rounded-3xl bg-white border border-slate-100 shadow-xl p-6">

              <h2 className="text-4xl sm:text-5xl font-black text-blue-600">
              150K+
              </h2>

              <p className="mt-2 text-slate-500 font-medium">
              Issues Supported
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