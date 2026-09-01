"use client";

import { motion } from "framer-motion";
import { FaArrowRight, FaTimes, FaCheck } from "react-icons/fa";

export default function ProblemSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-5 md:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Local Problems Often <br className="hidden sm:block" /> Go Unnoticed.
          </h2>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            Many civic issues remain unresolved because they are seen by only a few people. 
            CityVoice helps transform individual concerns into collective awareness.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Without CityVoice */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-red-100 bg-red-50/50 p-8 sm:p-10"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-red-600">
                <FaTimes />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Without CityVoice</h3>
            </div>

            <div className="flex flex-col gap-4">
              <div className="rounded-2xl bg-white p-5 shadow-sm border border-red-100/50">
                <p className="font-medium text-slate-700">Problem noticed</p>
              </div>
              <div className="flex justify-center text-red-300">
                <FaArrowRight className="rotate-90" />
              </div>
              <div className="rounded-2xl bg-white p-5 shadow-sm border border-red-100/50 opacity-70">
                <p className="font-medium text-slate-500">Ignored</p>
              </div>
              <div className="flex justify-center text-red-300">
                <FaArrowRight className="rotate-90" />
              </div>
              <div className="rounded-2xl bg-white p-5 shadow-sm border border-red-100/50 opacity-40">
                <p className="font-medium text-slate-400">Forgotten</p>
              </div>
            </div>
          </motion.div>

          {/* With CityVoice */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="rounded-3xl border border-blue-100 bg-blue-50/50 p-8 sm:p-10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            
            <div className="flex items-center gap-3 mb-8 relative z-10">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg shadow-blue-600/20">
                <FaCheck />
              </div>
              <h3 className="text-xl font-bold text-slate-900">With CityVoice</h3>
            </div>

            <div className="flex flex-col gap-3 relative z-10">
              <div className="rounded-2xl bg-white p-4 shadow-sm border border-blue-100">
                <p className="font-semibold text-blue-900">Problem reported</p>
              </div>
              <div className="flex justify-center text-blue-300">
                <FaArrowRight className="rotate-90" />
              </div>
              <div className="rounded-2xl bg-white p-4 shadow-sm border border-blue-100">
                <p className="font-semibold text-blue-900">Community supports</p>
              </div>
              <div className="flex justify-center text-blue-300">
                <FaArrowRight className="rotate-90" />
              </div>
              <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 p-4 shadow-md text-white">
                <p className="font-semibold">Collective attention & action</p>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
