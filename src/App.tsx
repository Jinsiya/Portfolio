/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Cursor from "./components/Cursor";
import Background from "./components/Background";
import { Footer, LoadingScreen } from "./components/Extras";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial asset loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingScreen key="loader" />}
      </AnimatePresence>

      <div className="relative min-h-screen overflow-x-hidden selection:bg-primary selection:text-white">
        <Cursor />
        <Background />
        <Navbar />

        <main className="relative">
          <Hero />
          
          <motion.section
            id="about"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="py-16 sm:py-32 px-4 sm:px-6 max-w-7xl mx-auto"
          >
            <div className="flex flex-col md:flex-row gap-10 md:gap-20 items-center">
              <div className="flex-1 space-y-6 sm:space-y-10">
                <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-black tracking-normal leading-[0.85] uppercase relative z-[70] px-4 sm:px-12 py-2 sm:py-4 overflow-visible">
                  Design <br />
                  <span className="text-[#346739]">Intelligence.</span>
                </h2>

                <p className="text-base sm:text-lg md:text-xl text-black font-medium leading-relaxed max-w-xl px-4 sm:px-12">
                  B.Tech Artificial Intelligence student focused on the intersection of scalable web architectures and intelligent data processing. I build systems that don't just function—they learn and adapt, wrapped in refined interfaces.
                </p>

                <div className="grid grid-cols-2 gap-8 pt-8 items-center px-4 sm:px-12">
                  <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-48 md:h-48 group shine-effect rounded-full">
                    <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90 drop-shadow-[0_0_15px_rgba(52,103,57,0.2)]">
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        className="stroke-[#9FCB98]/20 fill-none stroke-[6px]"
                      />
                      <motion.circle
                        cx="50"
                        cy="50"
                        r="45"
                        className="stroke-[#346739] fill-none stroke-[6px]"
                        strokeDasharray="282.7"
                        initial={{ strokeDashoffset: 282.7 }}
                        whileInView={{ strokeDashoffset: 282.7 * (1 - 8.3 / 10) }}
                        transition={{ duration: 2, ease: "easeOut" }}
                        viewport={{ once: true }}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="flex flex-col items-center"
                      >
                        <span className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-[#346739]">
                          8.3
                        </span>
                        <span className="text-[9px] sm:text-[10px] font-mono font-black text-[#346739]/60 -mt-1 tracking-widest">/ 10</span>
                      </motion.div>
                      <span className="text-[8px] sm:text-[9px] font-mono font-black text-black/40 uppercase tracking-[0.4em] mt-1 sm:mt-2">CGPA LEVEL</span>
                    </div>
                  </div>
                  
                  {/* Removed avatar numbering group */}
                </div>
              </div>

              <div className="relative flex-1 group w-full max-w-md md:max-w-none">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative z-10 w-full aspect-auto md:aspect-square rounded-[2.5rem] sm:rounded-[3.5rem] overflow-hidden glass border-2 border-[#9FCB98]/20 soft-glow shine-effect flex flex-col justify-center items-center"
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#346739]/5 via-transparent to-[#F2EDC2]/5" />
                  <div className="relative z-10 flex flex-col items-center justify-center text-center p-8 sm:p-12">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#79AE6F]/10 flex items-center justify-center mb-6 sm:mb-8 mx-auto border border-[#79AE6F]/20">
                      <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#346739]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-display font-black mb-3 sm:mb-4 uppercase tracking-tighter text-[#346739]">Core Vision</h3>
                    <p className="text-slate-900 text-xs sm:text-sm md:text-base font-medium leading-relaxed max-w-lg">
                      To leverage artificial intelligence and data-driven technologies to create impactful, real-world solutions that improve efficiency and decision-making. To continuously grow as a skilled IT professional by combining strong technical foundations with innovation and problem-solving. To contribute meaningfully to society through scalable, intelligent systems while achieving excellence in my career.
                    </p>
                  </div>
                </motion.div>
                
                {/* Soft Decorative Blobs */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#79AE6F]/10 rounded-full blur-[60px]" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#F2EDC2]/20 rounded-full blur-[60px]" />
              </div>
            </div>
          </motion.section>

          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  );
}
