"use client";

import { motion } from "framer-motion";

export default function CommunityPower() {
  return (
    <section className="py-24 bg-blue-600 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)]"></div>
      
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-5 md:px-6 lg:px-8 relative z-10 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            One Voice Can Start Change. <br className="hidden sm:block" /> 
            Together, We Can Amplify It.
          </h2>
          
          <p className="mt-8 text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
            CityVoice connects citizens around shared civic concerns. When we stand together to support an issue, it becomes impossible to ignore. Stronger neighborhoods are built by communities that care.
          </p>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-white">
              <div className="text-3xl font-black mb-1">100%</div>
              <div className="text-blue-200 text-sm font-medium">Community Driven</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-white">
              <div className="text-3xl font-black mb-1">Free</div>
              <div className="text-blue-200 text-sm font-medium">For All Citizens</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-white">
              <div className="text-3xl font-black mb-1">24/7</div>
              <div className="text-blue-200 text-sm font-medium">Civic Awareness</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-white">
              <div className="text-3xl font-black mb-1">Real</div>
              <div className="text-blue-200 text-sm font-medium">Local Impact</div>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
