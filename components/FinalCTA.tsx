"use client";

import { motion } from "framer-motion";
import { FaArrowRight, FaApple, FaGooglePlay } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function FinalCTA() {
  const [links, setLinks] = useState({
    android: "",
    ios: "",
  });

  useEffect(() => {
    const fetchLinks = async () => {
      try {
        const res = await fetch("/api/admin/links");
        if (res.ok) {
          const data = await res.json();
          setLinks({
            android: data.android || "",
            ios: data.ios || "",
          });
        }
      } catch (error) {
        console.error("Failed to load links:", error);
      }
    };
    fetchLinks();
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      
      {/* Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3"></div>

      <div className="mx-auto w-full max-w-5xl px-4 sm:px-5 md:px-6 lg:px-8 relative z-10 text-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white rounded-[3rem] p-10 sm:p-16 md:p-20 shadow-2xl shadow-blue-900/5 border border-slate-100"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight mb-6">
            Your City Needs <br />
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Your Voice.</span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-12">
            Join a community of citizens who care about making their neighborhoods better. Start reporting issues and driving real change today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            
            <a href="#how-it-works" className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-slate-900 text-white font-semibold flex items-center justify-center gap-3 transition-transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
              Raise Your Voice <FaArrowRight />
            </a>
            
            <div className="flex gap-4 w-full sm:w-auto">
              <a href={links.android || "#"} className="flex-1 sm:flex-none px-6 py-4 rounded-2xl bg-white text-slate-900 border border-slate-200 font-semibold flex items-center justify-center gap-3 transition-transform hover:-translate-y-1 shadow-sm hover:shadow-md">
                <FaGooglePlay className="text-xl" /> App
              </a>
              <a href={links.ios || "#"} className="flex-1 sm:flex-none px-6 py-4 rounded-2xl bg-white text-slate-900 border border-slate-200 font-semibold flex items-center justify-center gap-3 transition-transform hover:-translate-y-1 shadow-sm hover:shadow-md">
                <FaApple className="text-xl" /> App
              </a>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}
