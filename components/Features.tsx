"use client";

import { motion } from "framer-motion";
import { FaStream, FaBullhorn, FaHandsHelping, FaComments, FaMapMarkedAlt, FaBell } from "react-icons/fa";

const features = [
  {
    title: "Voice Feed",
    description: "Discover civic issues happening around you in a modern community feed.",
    icon: FaStream,
    color: "text-blue-600",
    bg: "bg-blue-50"
  },
  {
    title: "Raise Voice",
    description: "Report problems quickly with photos, descriptions, and exact locations.",
    icon: FaBullhorn,
    color: "text-red-500",
    bg: "bg-red-50"
  },
  {
    title: "Community Support",
    description: "Support issues that matter to your community to bring them attention.",
    icon: FaHandsHelping,
    color: "text-teal-600",
    bg: "bg-teal-50"
  },
  {
    title: "Responses",
    description: "Participate in meaningful civic discussions and provide updates.",
    icon: FaComments,
    color: "text-purple-600",
    bg: "bg-purple-50"
  },
  {
    title: "Live Map",
    description: "Explore civic issues geographically to understand what's happening nearby.",
    icon: FaMapMarkedAlt,
    color: "text-orange-500",
    bg: "bg-orange-50"
  },
  {
    title: "Notifications",
    description: "Stay updated on activity, support, and developments regarding your issues.",
    icon: FaBell,
    color: "text-amber-500",
    bg: "bg-amber-50"
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-5 md:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Explore the CityVoice Experience
          </h2>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            Everything you need to participate in your local community, beautifully designed in one platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-3xl border border-slate-100 bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300"
            >
              <div className={`h-14 w-14 rounded-2xl ${feature.bg} flex items-center justify-center mb-6`}>
                <feature.icon className={`text-2xl ${feature.color}`} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
