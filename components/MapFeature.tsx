"use client";

import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaHeart, FaComment } from "react-icons/fa";

export default function MapFeature() {
  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background map grid effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
      
      {/* Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px]"></div>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-5 md:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            See Your City's Problems <br /> on the Map.
          </h2>
          <p className="mt-6 text-lg text-slate-400 leading-relaxed">
            Explore nearby civic issues geographically and understand exactly what is happening around your community in real-time.
          </p>
        </div>

        {/* Map Visualization */}
        <div className="relative mx-auto max-w-5xl h-[500px] sm:h-[600px] rounded-3xl border border-white/10 bg-slate-800/50 backdrop-blur-sm overflow-hidden shadow-2xl">
          
          {/* Faux Map Background */}
          <div className="absolute inset-0 bg-slate-800 opacity-50"></div>
          
          {/* Pins & Cards */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="absolute top-[30%] left-[20%] group"
          >
            <div className="relative">
              {/* Pin */}
              <div className="h-10 w-10 text-red-500 relative z-10 cursor-pointer transition-transform group-hover:scale-110">
                <FaMapMarkerAlt className="w-full h-full drop-shadow-lg" />
              </div>
              {/* Pulse */}
              <div className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-50"></div>
              
              {/* Hover Card */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-64 bg-white rounded-2xl p-4 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
                <div className="h-32 w-full bg-slate-200 rounded-xl mb-3 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300"></div>
                </div>
                <h4 className="font-bold text-slate-900 mb-1 text-sm">Dangerous Pothole</h4>
                <p className="text-xs text-slate-500 mb-3">Main Street & 4th Ave</p>
                <div className="flex items-center gap-4 text-xs font-medium text-slate-600">
                  <span className="flex items-center gap-1"><FaHeart className="text-red-500" /> 124</span>
                  <span className="flex items-center gap-1"><FaComment className="text-blue-500" /> 18</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="absolute top-[50%] left-[60%] group"
          >
            <div className="relative">
              <div className="h-8 w-8 text-orange-500 relative z-10 cursor-pointer transition-transform group-hover:scale-110">
                <FaMapMarkerAlt className="w-full h-full drop-shadow-lg" />
              </div>
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-64 bg-white rounded-2xl p-4 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
                <h4 className="font-bold text-slate-900 mb-1 text-sm">Broken Streetlight</h4>
                <div className="flex items-center gap-4 text-xs font-medium text-slate-600 mt-2">
                  <span className="flex items-center gap-1"><FaHeart className="text-red-500" /> 45</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="absolute top-[20%] right-[25%] group"
          >
            <div className="relative">
              <div className="h-9 w-9 text-blue-500 relative z-10 cursor-pointer transition-transform group-hover:scale-110">
                <FaMapMarkerAlt className="w-full h-full drop-shadow-lg" />
              </div>
            </div>
          </motion.div>

          <div className="absolute bottom-6 right-6 flex flex-col gap-2">
             <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/20 text-white text-sm flex items-center gap-3">
               <span className="h-3 w-3 rounded-full bg-red-500 block"></span> Urgent
             </div>
             <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/20 text-white text-sm flex items-center gap-3">
               <span className="h-3 w-3 rounded-full bg-orange-500 block"></span> Pending
             </div>
          </div>

        </div>

      </div>
    </section>
  );
}
