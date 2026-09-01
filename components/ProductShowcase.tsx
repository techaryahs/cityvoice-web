"use client";

import { motion } from "framer-motion";
import { FaHeart, FaComment, FaMapMarkerAlt, FaCamera, FaPaperPlane } from "react-icons/fa";

export default function ProductShowcase() {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-5 md:px-6 lg:px-8 space-y-32">
        
        {/* Showcase 1 */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 relative"
          >
            {/* Mockup */}
            <div className="relative mx-auto w-full max-w-md bg-white rounded-[2.5rem] border-[8px] border-slate-900 shadow-2xl overflow-hidden aspect-[9/19]">
              
              {/* Status Bar Fake */}
              <div className="h-7 w-full bg-slate-900/5 flex justify-center">
                <div className="h-4 w-32 bg-slate-900 rounded-b-xl"></div>
              </div>
              
              <div className="p-5 h-full flex flex-col bg-slate-50">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-full bg-slate-200"></div>
                  <div>
                    <div className="h-3 w-24 bg-slate-200 rounded mb-2"></div>
                    <div className="h-2 w-16 bg-slate-200 rounded"></div>
                  </div>
                </div>
                
                <div className="flex-1 bg-white rounded-2xl shadow-sm border border-slate-100 p-4 relative flex flex-col">
                  <div className="w-full h-40 bg-slate-100 rounded-xl mb-4 relative overflow-hidden flex items-center justify-center">
                    <FaCamera className="text-4xl text-slate-300" />
                  </div>
                  
                  <div className="h-4 w-3/4 bg-slate-200 rounded mb-3"></div>
                  <div className="h-3 w-full bg-slate-100 rounded mb-2"></div>
                  <div className="h-3 w-5/6 bg-slate-100 rounded mb-4"></div>
                  
                  <div className="mt-auto flex items-center justify-between border-t border-slate-50 pt-4">
                    <div className="flex gap-4">
                      <div className="h-8 w-8 rounded-full bg-slate-50 flex items-center justify-center"><FaHeart className="text-slate-300 text-xs" /></div>
                      <div className="h-8 w-8 rounded-full bg-slate-50 flex items-center justify-center"><FaComment className="text-slate-300 text-xs" /></div>
                    </div>
                    <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center"><FaPaperPlane className="text-white text-xs" /></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute top-20 -left-10 h-24 w-24 bg-blue-500/20 rounded-full blur-xl"></div>
            <div className="absolute bottom-20 -right-10 h-32 w-32 bg-red-500/10 rounded-full blur-xl"></div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm mb-6">
              Create Impact
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight mb-6">
              Raise Issues <br /> That Matter.
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Reporting a civic problem is as simple as taking a photo. Add a brief description, tag the precise location, and submit. CityVoice instantly broadcasts your concern to the community and local authorities.
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-slate-700 font-medium">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600 text-xs">✓</span> Fast & Intuitive Reporting
              </li>
              <li className="flex items-center gap-3 text-slate-700 font-medium">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600 text-xs">✓</span> Photo & Location Integration
              </li>
              <li className="flex items-center gap-3 text-slate-700 font-medium">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600 text-xs">✓</span> Anonymous Submission Options
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Showcase 2 */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-teal-100 text-teal-700 font-semibold text-sm mb-6">
              Geographic Discovery
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight mb-6">
              Discover Problems <br /> Near You.
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Stay informed about what is happening in your neighborhood. Our intelligent map interface helps you visualize civic problems geographically, allowing you to filter by distance and category.
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-slate-700 font-medium">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600 text-xs">✓</span> Interactive Live Map
              </li>
              <li className="flex items-center gap-3 text-slate-700 font-medium">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600 text-xs">✓</span> Custom Radius Filtering
              </li>
              <li className="flex items-center gap-3 text-slate-700 font-medium">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600 text-xs">✓</span> Local Neighborhood Feed
              </li>
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Mockup */}
            <div className="relative mx-auto w-full max-w-md bg-white rounded-[2.5rem] border-[8px] border-slate-900 shadow-2xl overflow-hidden aspect-[9/19]">
              
              <div className="absolute inset-0 bg-slate-200">
                {/* Fake map grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                
                {/* Pins */}
                <div className="absolute top-[30%] left-[40%] text-red-500 text-3xl drop-shadow-md"><FaMapMarkerAlt /></div>
                <div className="absolute top-[50%] left-[20%] text-orange-500 text-2xl drop-shadow-md"><FaMapMarkerAlt /></div>
                <div className="absolute top-[60%] right-[30%] text-blue-500 text-3xl drop-shadow-md"><FaMapMarkerAlt /></div>
                
                {/* Bottom sheet */}
                <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl p-5 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] h-[40%]">
                  <div className="w-12 h-1.5 bg-slate-200 rounded-full mx-auto mb-5"></div>
                  
                  <div className="flex gap-4 mb-4">
                    <div className="h-16 w-16 bg-slate-100 rounded-xl shrink-0"></div>
                    <div className="flex-1">
                      <div className="h-4 w-full bg-slate-200 rounded mb-2"></div>
                      <div className="h-3 w-2/3 bg-slate-100 rounded"></div>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 opacity-50">
                    <div className="h-16 w-16 bg-slate-100 rounded-xl shrink-0"></div>
                    <div className="flex-1">
                      <div className="h-4 w-full bg-slate-200 rounded mb-2"></div>
                      <div className="h-3 w-2/3 bg-slate-100 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute top-1/4 -right-10 h-32 w-32 bg-teal-500/20 rounded-full blur-xl"></div>
          </motion.div>
        </div>

        {/* Showcase 3 */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 relative"
          >
            {/* Mockup */}
            <div className="relative mx-auto w-full max-w-md bg-white rounded-[2.5rem] border-[8px] border-slate-900 shadow-2xl overflow-hidden aspect-[9/19]">
              
              <div className="h-7 w-full bg-slate-900/5 flex justify-center">
                <div className="h-4 w-32 bg-slate-900 rounded-b-xl"></div>
              </div>
              
              <div className="p-5 h-full flex flex-col bg-slate-50">
                <h3 className="font-bold text-lg text-slate-900 mb-4">Community Feed</h3>
                
                <div className="space-y-4">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="h-8 w-8 rounded-full bg-slate-200"></div>
                        <div className="h-3 w-20 bg-slate-200 rounded"></div>
                        <div className="ml-auto h-5 w-12 bg-red-100 rounded-full flex items-center justify-center text-[10px] text-red-600 font-bold">New</div>
                      </div>
                      <div className="h-3 w-full bg-slate-100 rounded mb-2"></div>
                      <div className="h-3 w-4/5 bg-slate-100 rounded mb-4"></div>
                      
                      <div className="flex items-center gap-2">
                        <div className={`px-3 py-1.5 rounded-lg flex items-center gap-2 text-xs font-semibold ${item === 1 ? 'bg-red-50 text-red-600' : 'bg-slate-50 text-slate-500'}`}>
                          <FaHeart /> Support
                        </div>
                        <div className="px-3 py-1.5 rounded-lg flex items-center gap-2 text-xs font-semibold bg-slate-50 text-slate-500">
                          <FaComment /> Reply
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-1/3 -left-10 h-32 w-32 bg-purple-500/20 rounded-full blur-xl"></div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 font-semibold text-sm mb-6">
              Community Action
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight mb-6">
              Support Your <br /> Community.
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              See an issue you care about? Support it to help it gain traction. Problems with high community support receive priority attention from authorities. Participate in discussions to share updates and solutions.
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-slate-700 font-medium">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600 text-xs">✓</span> Upvote Civic Issues
              </li>
              <li className="flex items-center gap-3 text-slate-700 font-medium">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600 text-xs">✓</span> Community Discussions
              </li>
              <li className="flex items-center gap-3 text-slate-700 font-medium">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600 text-xs">✓</span> Share Issues for Awareness
              </li>
            </ul>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
