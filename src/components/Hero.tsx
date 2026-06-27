/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { DEVELOPER_INFO } from "../constants";

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % DEVELOPER_INFO.typewriter.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center relative px-6 overflow-hidden pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-display font-black mb-6 tracking-normal leading-[0.85] uppercase relative z-[70] px-4 sm:px-12 py-2 sm:py-4 overflow-visible">
          I'm <span className="gradient-text filter drop-shadow-[0_8px_30px_rgba(52,103,57,0.2)]">Jinsiya A</span>
        </h1>

        <div className="h-10 sm:h-12 md:h-16 flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-lg sm:text-2xl md:text-4xl font-display font-bold text-[#346739] uppercase tracking-tight"
            >
              {DEVELOPER_INFO.typewriter[index]}
            </motion.p>
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-20 flex flex-col items-center gap-4 animate-bounce opacity-50"
        >
          <span className="text-[10px] uppercase tracking-[0.6em] font-bold text-slate-400">Discover More</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-[#346739] via-[#79AE6F] to-transparent" />
        </motion.div>
      </motion.div>

      {/* Hero Local Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#79AE6F]/10 rounded-full blur-[150px] -z-20 pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-[#346739]/10 rounded-full blur-[100px] -z-20 pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-[#9FCB98]/10 rounded-full blur-[100px] -z-20 pointer-events-none" />
    </section>
  );
}
