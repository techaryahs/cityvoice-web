"use client";

import { motion } from "framer-motion";
import { FaEye, FaRocket } from "react-icons/fa";

export default function MissionVision() {
  return (
    <section id="mission" className="py-24 bg-white relative">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-5 md:px-6 lg:px-8">
        
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Vision */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-slate-50 border border-slate-100 p-10 sm:p-12"
          >
            <div className="h-16 w-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-3xl mb-8">
              <FaEye />
            </div>
            <h2 className="text-3xl font-black text-slate-900 mb-6">Our Vision</h2>
            <p className="text-xl text-slate-600 leading-relaxed font-medium">
              "To make every citizen's voice heard and improve city living through collective action."
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-blue-600 text-white p-10 sm:p-12 shadow-2xl shadow-blue-600/20"
          >
            <div className="h-16 w-16 rounded-full bg-white/20 text-white flex items-center justify-center text-3xl mb-8 backdrop-blur-sm">
              <FaRocket />
            </div>
            <h2 className="text-3xl font-black text-white mb-6">Our Mission</h2>
            <p className="text-xl text-blue-100 leading-relaxed font-medium">
              "To provide a simple platform where people can report issues, gain support, and drive real change in their locality."
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
