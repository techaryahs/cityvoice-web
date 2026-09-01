"use client";

import Image from "next/image";
import Link from "next/link";
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

import { useEffect, useState } from "react";

export default function Footer() {

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
      } catch (err) {
        console.error(err);
      }
    };

    fetchLinks();
  }, []);
  
  return (
    <footer id="contact" className="relative overflow-hidden pt-32">

      {/* Background Glow */}

      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[150px]" />

      {/* Footer */}

      {/* Footer */}

      <div className="relative mt-28 border-t border-slate-200 bg-white/80 backdrop-blur-xl">

        <div className="max-w-7xl mx-auto px-6 py-20">

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10 sm:gap-14">

            {/* Logo */}

            <div>

              <Image
                src={logo}
                alt="City Voice"
                width={220}
                height={70}
              />

              <p className="mt-6 text-slate-600 leading-8">
                Your Voice.
                <br />
                Your City&apos;s Progress.
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
                  { title: "Home", href: "#home" },
                  { title: "How It Works", href: "#how-it-works" },
                  { title: "Features", href: "#features" },
                  { title: "Blog", href: "#blog" },
                  { title: "Our Mission", href: "#mission" },
                  { title: "Contact", href: "#contact" },
                ].map((item) => (
                  <li key={item.title}>
                    <a
                      href={item.href}
                      className="group flex items-center gap-2 text-slate-600 hover:text-blue-600 transition"
                    >
                      <FaArrowRight className="text-xs group-hover:translate-x-1 transition" />
                      {item.title}
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

                {[
                  {
                    icon: FaInstagram,
                    url: links.instagram,
                  },
                  {
                    icon: FaFacebookF,
                    url: links.facebook,
                  },
                  {
                    icon: FaYoutube,
                    url: links.youtube,
                  },
                ].map(({ icon: Icon, url }, index) => (
                  <a
                    key={index}
                    href={url || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
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

              <Link
                href="/privacy-policy"
                className="text-slate-500 hover:text-blue-600 transition"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms-and-conditions"
                className="text-slate-500 hover:text-blue-600 transition"
              >
                Terms & Conditions
              </Link>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}