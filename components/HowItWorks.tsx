"use client";

import { motion } from "framer-motion";
import { FaEye, FaBullhorn, FaUsers, FaGlobeAmericas } from "react-icons/fa";

const steps = [
  {
    number: "01",
    title: "Spot a Problem",
    description: "See an issue affecting your neighborhood or city.",
    icon: FaEye,
    color: "from-slate-700 to-slate-900"
  },
  {
    number: "02",
    title: "Raise Your Voice",
    description: "Upload a photo, describe the problem, and add the location.",
    icon: FaBullhorn,
    color: "from-red-500 to-red-600"
  },
  {
    number: "03",
    title: "Get Community Support",
    description: "Other citizens can support and respond to the issue.",
    icon: FaUsers,
    color: "from-teal-500 to-emerald-500"
  },
  {
    number: "04",
    title: "Create Collective Impact",
    description: "Together, voices gain attention and drive awareness for real change.",
    icon: FaGlobeAmericas,
    color: "from-blue-600 to-cyan-500"
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-slate-50 relative">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-5 md:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">How CityVoice Works</span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            From Noticed to Resolved.
          </h2>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            A simple workflow designed to turn individual observations into collective civic action.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-slate-200 to-transparent z-0"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              <div className={`h-24 w-24 rounded-full bg-gradient-to-br ${step.color} p-1 shadow-xl mb-8 transform transition-transform duration-300 group-hover:-translate-y-2`}>
                <div className="h-full w-full bg-white rounded-full flex items-center justify-center relative">
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.color} opacity-10`}></div>
                  <step.icon className="text-3xl text-slate-800" />
                  <div className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold shadow-md">
                    {step.number}
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
