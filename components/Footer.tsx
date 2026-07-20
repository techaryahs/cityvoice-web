"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaGooglePlay,
  FaApple,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaArrowRight,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden pt-32">

      {/* Background Glow */}

      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[150px]" />

      {/* CTA */}

      <div className="relative max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[40px] bg-gradient-to-r from-blue-600 to-cyan-500 p-12 shadow-[0_35px_80px_rgba(37,99,235,.35)]"
        >
          <div className="grid lg:grid-cols-2 gap-10 items-center">

            <div>

              <h2 className="text-5xl font-black text-white leading-tight">
                Ready to Make
                <br />
                Your City Better?
              </h2>

              <p className="mt-6 text-blue-100 text-lg leading-8">
                Download City Voice today and report civic issues
                directly to your local authority with complete
                transparency and live tracking.
              </p>

            </div>

            <div className="flex flex-wrap lg:justify-end gap-5">

              <button className="rounded-2xl bg-white px-7 py-5 shadow-xl hover:scale-105 transition">

                <div className="flex items-center gap-4">

                  <FaGooglePlay className="text-3xl text-blue-600" />

                  <div className="text-left">

                    <p className="text-xs uppercase text-slate-500">
                      Download on
                    </p>

                    <h3 className="font-bold text-slate-900">
                      Google Play
                    </h3>

                  </div>

                </div>

              </button>

              <button className="rounded-2xl bg-slate-900 px-7 py-5 shadow-xl hover:scale-105 transition">

                <div className="flex items-center gap-4">

                  <FaApple className="text-3xl text-white" />

                  <div className="text-left">

                    <p className="text-xs uppercase text-slate-400">
                      Download on
                    </p>

                    <h3 className="font-bold text-white">
                      App Store
                    </h3>

                  </div>

                </div>

              </button>

            </div>

          </div>
        </motion.div>

      </div>

      {/* Footer */}

      <div className="relative mt-28 border-t border-slate-200 bg-white/80 backdrop-blur-xl">

        <div className="max-w-7xl mx-auto px-6 py-20">

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-14">

            {/* Logo */}

            <div>

              <Image
                src="/images/logo.jpeg"
                alt="City Voice"
                width={220}
                height={70}
              />

              <p className="mt-6 text-slate-600 leading-8">
                Your Voice.
                <br />
                Your City's Progress.
              </p>

              <p className="mt-4 text-slate-500">
                Empowering citizens to build cleaner,
                safer and smarter cities.
              </p>

            </div>

            {/* Links */}

            <div>

              <h3 className="text-xl font-bold text-slate-900">
                Quick Links
              </h3>

              <ul className="mt-6 space-y-4">

                {[
                  "Home",
                  "Features",
                  "Blog",
                  "Contact",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="group flex items-center gap-2 text-slate-600 hover:text-blue-600 transition"
                    >
                      <FaArrowRight className="text-xs group-hover:translate-x-1 transition" />
                      {item}
                    </a>
                  </li>
                ))}

              </ul>

            </div>

            {/* Contact */}

            <div>

              <h3 className="text-xl font-bold text-slate-900">
                Contact
              </h3>

              <div className="mt-6 space-y-5">

                <div className="flex gap-3">

                  <FaEnvelope className="mt-1 text-blue-600" />

                  <span className="text-slate-600">
                    cityvoiceofficial@gmail.com
                  </span>

                </div>

                <div className="flex gap-3">

                  <FaPhoneAlt className="mt-1 text-blue-600" />

                  <span className="text-slate-600">
                    +91 9769661197
                  </span>

                </div>

                <div className="flex gap-3">

                  <FaMapMarkerAlt className="mt-1 text-blue-600" />

                  <span className="text-slate-600">
                    Mumbai, Maharashtra, India
                  </span>

                </div>

              </div>

            </div>

            {/* Social */}

            <div>

              <h3 className="text-xl font-bold text-slate-900">
                Follow Us
              </h3>

              <div className="flex gap-4 mt-8">

                {[FaInstagram, FaFacebookF, FaYoutube].map((Icon, i) => (

                  <a
                    key={i}
                    href="#"
                    className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition hover:-translate-y-2 hover:bg-blue-600 hover:text-white"
                  >
                    <Icon size={22} />
                  </a>

                ))}

              </div>

              <p className="mt-8 text-slate-500 leading-7">
                Stay connected with the latest updates,
                city improvements and announcements.
              </p>

            </div>

          </div>

          {/* Bottom */}

          <div className="mt-16 flex flex-col md:flex-row items-center justify-between border-t border-slate-200 pt-8">

            <p className="text-slate-500">
              © 2026 City Voice. All Rights Reserved.
            </p>

            <div className="flex gap-8 mt-5 md:mt-0">

              <a
                href="#"
                className="text-slate-500 hover:text-blue-600 transition"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="text-slate-500 hover:text-blue-600 transition"
              >
                Terms & Conditions
              </a>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}