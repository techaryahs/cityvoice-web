"use client";

import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";

export default function FounderMessage() {
  return (
    <section className="py-24 bg-slate-50 relative">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-5 md:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl p-8 sm:p-12 md:p-16 shadow-xl border border-slate-100 relative">
          <div className="absolute top-10 left-10 text-slate-100 text-6xl md:text-8xl -z-10">
            <FaQuoteLeft />
          </div>
          
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 relative z-10">
            
            <div className="shrink-0 flex flex-col items-center">
              <div className="h-32 w-32 md:h-40 md:w-40 rounded-full bg-slate-200 overflow-hidden border-4 border-white shadow-lg mb-4">
                <Image 
                  src="/images/logo.jpeg" // Placeholder for Founder Image
                  alt="Founder"
                  width={160}
                  height={160}
                  className="h-full w-full object-cover grayscale opacity-80"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Founder</h3>
              <p className="text-sm text-slate-500 font-medium">CityVoice</p>
            </div>

            <div className="text-center md:text-left">
              <p className="text-xl md:text-2xl lg:text-3xl font-medium text-slate-700 leading-relaxed font-serif italic">
                "CityVoice is built to give power to your voice. This is a platform where people come together, support each other, and make real change happen. Speak up — because together, our voices are stronger."
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
