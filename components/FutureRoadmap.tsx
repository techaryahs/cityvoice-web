"use client";

import { motion } from "framer-motion";

const roadmap = [
  {
    phase: "NOW",
    title: "Community Issue Reporting",
    description: "Citizens can report problems, add locations, and support each other's issues.",
    active: true
  },
  {
    phase: "NEXT",
    title: "Issue Status Tracking",
    description: "Track the progress of issues from Pending to In Progress and Resolved.",
    active: false
  },
  {
    phase: "FUTURE",
    title: "Authority Collaboration",
    description: "Connecting civic issues directly to relevant authorities for faster action.",
    active: false
  },
  {
    phase: "VISION",
    title: "Smarter, Connected Cities",
    description: "Building technology that brings communities and governments together.",
    active: false
  }
];

export default function FutureRoadmap() {
  return (
    <section className="py-24 bg-white relative">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-5 md:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            The Future of CityVoice
          </h2>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            We are continuously building to empower citizens and improve cities. Here is what is on the horizon.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line for mobile */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-slate-100 md:hidden"></div>
          
          <div className="grid md:grid-cols-4 gap-8 md:gap-6 lg:gap-8">
            {roadmap.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-14 md:pl-0"
              >
                {/* Dot for mobile */}
                <div className={`absolute left-0 top-1.5 h-12 w-12 rounded-full border-4 border-white flex items-center justify-center md:hidden z-10 ${item.active ? 'bg-blue-600 shadow-md' : 'bg-slate-200'}`}>
                  <span className={`text-[10px] font-bold ${item.active ? 'text-white' : 'text-slate-500'}`}>{item.phase}</span>
                </div>

                <div className="md:mb-6 hidden md:flex items-center">
                  <div className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider ${item.active ? 'bg-blue-600 text-white shadow-md' : 'bg-slate-100 text-slate-500'}`}>
                    {item.phase}
                  </div>
                  <div className={`flex-1 h-0.5 ml-4 ${index === roadmap.length - 1 ? 'hidden' : 'block'} ${item.active ? 'bg-blue-600' : 'bg-slate-100'}`}></div>
                </div>

                <h3 className={`text-xl font-bold mb-3 ${item.active ? 'text-slate-900' : 'text-slate-700'}`}>
                  {item.title}
                </h3>
                <p className="text-slate-500 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
