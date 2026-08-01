"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaBars,
  FaTimes,
  FaArrowRight,
} from "react-icons/fa";

const navItems = [
  { title: "Home", href: "#home" },
  { title: "Blog", href: "#blog" },
  { title: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement | null>(null);

  const [links, setLinks] = useState({
    instagram: "",
    facebook: "",
    youtube: "",
    android: "",
    ios: "",
    demo: "",
  });

  const [logo, setLogo] = useState("/images/logo.jpeg");

  useEffect(() => {
    const fetchLinks = async () => {
      try {
        const res = await fetch("/api/admin/links");
        const data = await res.json();
        setLinks(data);

        const hpRes = await fetch("/api/homepage");
        if (hpRes.ok) {
          const hpData = await hpRes.json();
          if (hpData.logo) setLogo(hpData.logo);
        }
      } catch (error) {
        console.error("Failed to load links:", error);
      }
    };

    fetchLinks();
  }, []);

  useEffect(() => {
    if (!open) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    const handleOutsideClick = (event: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.addEventListener("mousedown", handleOutsideClick);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handleOutsideClick);
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNavClick = (href: string) => {
    const id = href.replace("#", "");
    const target = document.getElementById(id);

    if (!target) return;

    let offset = 100;

    // Scroll deeper into the footer
    if (id === "contact") {
      offset = -250; // adjust as needed
    }

    const top =
      target.getBoundingClientRect().top +
      window.scrollY -
      offset;

    window.scrollTo({
      top,
      behavior: "smooth",
    });

    setOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="fixed left-0 top-0 z-[60] w-full"
      >
        <div className="mx-auto w-full max-w-7xl px-4 pt-3 sm:px-5 sm:pt-4 md:px-6 lg:px-8 2xl:max-w-[1600px]">
          <div className="supports-[backdrop-filter]:bg-gradient-to-b from-white/60 to-white/40 rounded-[20px] border border-white/40 bg-gradient-to-b from-white/60 to-white/40 backdrop-blur-3xl shadow-[0_8px_32px_rgba(15,23,42,.04)]">
            <div className="flex h-16 items-center justify-between px-3 sm:h-17 sm:px-4 md:h-18 md:px-5 lg:h-20 lg:px-6 xl:px-8">
              <Link href="/" className="flex shrink-0 items-center">
                <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-slate-200 bg-white shadow-lg sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16">
                  <Image
                    src={logo}
                    alt="CityVoice"
                    width={200}
                    height={200}
                    priority
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
              </Link>

              <nav className="hidden items-center gap-2 md:flex lg:gap-3 xl:gap-4">
                {navItems.map((item) => {
                  const isActive = item.title === "Home";

                  return (
                    <button
                      key={item.title}
                      type="button"
                      onClick={() => handleNavClick(item.href)}
                      className={`rounded-full px-3 py-2 text-sm font-medium transition-all duration-300 sm:px-4 sm:py-2.5 lg:px-5 lg:py-3 ${
                        isActive
                          ? "bg-blue-600 text-white shadow-lg"
                          : "text-slate-700 hover:bg-slate-100"
                      }`}
                    >
                      {item.title}
                    </button>
                  );
                })}
              </nav>

              <div className="hidden items-center gap-3 md:flex xl:gap-4">
                <a
                  href={links.instagram || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition hover:bg-pink-500 hover:text-white xl:h-10 xl:w-10"
                >
                  <FaInstagram />
                </a>

                <a
                  href={links.facebook || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition hover:bg-blue-600 hover:text-white xl:h-10 xl:w-10"
                >
                  <FaFacebookF />
                </a>

                <a
                  href={links.youtube || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition hover:bg-red-600 hover:text-white xl:h-10 xl:w-10"
                >
                  <FaYoutube />
                </a>

                <a
                  href={links.android || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2 text-sm font-semibold text-white shadow-xl transition hover:scale-[1.01] md:px-5 md:py-2.5 lg:px-6 lg:py-3 lg:text-[0.95rem]"
                >
                  <span>Download App</span>
                  <FaArrowRight className="transition group-hover:translate-x-1" />
                </a>
              </div>

              <button
                type="button"
                onClick={() => setOpen((prev) => !prev)}
                aria-label="Toggle menu"
                aria-expanded={open}
                aria-controls="mobile-navigation"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-xl text-slate-700 shadow-sm ring-1 ring-slate-200 transition focus:outline-none focus:ring-2 focus:ring-blue-500 md:hidden"
              >
                {open ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <div className="h-20 sm:h-22 md:h-24 lg:h-28" aria-hidden="true" />

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-slate-950/30 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />

            <motion.div
              ref={drawerRef}
              id="mobile-navigation"
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="fixed left-4 right-4 top-20 z-50 rounded-[22px] border border-white/60 bg-white/95 p-5 shadow-[0_20px_70px_rgba(15,23,42,.16)] backdrop-blur-xl md:hidden"
            >
              <div className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <button
                    key={item.title}
                    type="button"
                    onClick={() => handleNavClick(item.href)}
                    className="rounded-2xl px-4 py-3 text-left text-base font-medium text-slate-700 transition hover:bg-slate-50"
                  >
                    {item.title}
                  </button>
                ))}

                <button
                  type="button"
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-3 text-sm font-semibold text-white shadow-lg"
                >
                  Download App
                  <FaArrowRight />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}