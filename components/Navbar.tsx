"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaBars,
  FaTimes,
  FaArrowRight,
} from "react-icons/fa";

const navItems = [
  {
    title: "Home",
    href: "#home",
  },
  {
    title: "Blog",
    href: "#blog",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="fixed top-0 left-0 w-full z-50"
      >
        <div className="max-w-7xl mx-auto px-6 pt-5">
          <div className="rounded-2xl border border-white/40 bg-white/70 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,.08)]">

            <div className="h-20 flex items-center justify-between px-8">

              {/* Logo */}

              <Link href="/" className="flex items-center gap-3">

                <div className="h-16 w-16 rounded-full bg-white shadow-lg border border-slate-200 flex items-center justify-center overflow-hidden">

                    <Image
                        src="/images/logo.jpeg"
                        alt="CityVoice"
                        width={200}
                        height={200}
                        priority
                        className="h-full w-full object-cover rounded-full"
                    />

                </div>

              </Link>

              {/* Desktop Menu */}

              <nav className="hidden lg:flex items-center gap-3">

                {navItems.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className={`px-5 py-3 rounded-full transition-all duration-300
                    ${
                      item.title === "Home"
                        ? "bg-blue-600 text-white shadow-lg"
                        : "text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    {item.title}
                  </Link>
                ))}

              </nav>

              {/* Right Side */}

              <div className="hidden lg:flex items-center gap-5">

                <a
                  href="#"
                  className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-pink-500 hover:text-white transition"
                >
                  <FaInstagram />
                </a>

                <a
                  href="#"
                  className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-blue-600 hover:text-white transition"
                >
                  <FaFacebookF />
                </a>

                <a
                  href="#"
                  className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-red-600 hover:text-white transition"
                >
                  <FaYoutube />
                </a>

                <button className="group flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-7 py-3 font-semibold shadow-xl transition hover:scale-105">

                  Download App

                  <FaArrowRight className="group-hover:translate-x-1 transition" />

                </button>

              </div>

              {/* Mobile */}

              <button
                onClick={() => setOpen(!open)}
                className="lg:hidden text-2xl"
              >
                {open ? <FaTimes /> : <FaBars />}
              </button>

            </div>

          </div>

        </div>
      </motion.header>

      {/* Mobile Menu */}

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-28 left-6 right-6 rounded-2xl bg-white shadow-2xl p-6 lg:hidden z-40"
        >
          <div className="flex flex-col gap-5">

            {navItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-lg font-medium text-slate-700"
              >
                {item.title}
              </Link>
            ))}

            <button className="mt-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 py-3 text-white font-semibold">

              Download App

            </button>

          </div>
        </motion.div>
      )}
    </>
  );
}