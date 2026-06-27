/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";
import { DEVELOPER_INFO } from "../constants";

export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-32 px-4 sm:px-6 max-w-5xl mx-auto">
      <div className="text-center mb-16 sm:mb-24 relative z-[60]">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl md:text-7xl font-display font-black mb-4 sm:mb-6 tracking-normal uppercase leading-tight relative z-[70] px-4 sm:px-16 py-4 sm:py-8 overflow-visible"
        >
          My <span className="gradient-text italic filter drop-shadow-[0_8px_30px_rgba(52,103,57,0.2)]">Journey</span>
        </motion.h2>
        <p className="text-[#346739] font-mono font-black tracking-[0.2em] text-[10px] uppercase relative z-[60]">Timeline of growth & leadership</p>
      </div>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#346739] via-[#79AE6F] to-transparent transform md:-translate-x-1/2 hidden sm:block opacity-30" />

        {DEVELOPER_INFO.experience.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className={`relative flex flex-col md:flex-row items-center mb-24 last:mb-0 w-full ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Timeline Dot */}
            <div className="absolute left-[-5px] md:left-1/2 top-0 md:-translate-x-1/2 z-10 hidden sm:block">
              <motion.div
                whileHover={{ scale: 1.5 }}
                className="w-4 h-4 rounded-full bg-[#346739] ring-8 ring-[#346739]/10 soft-glow"
              />
            </div>

            {/* Content Card */}
            <div className={`w-full md:w-[45%] ${index % 2 === 0 ? "md:pl-0" : "md:pr-0"}`}>
              <div className="glass shine-effect p-6 sm:p-12 rounded-[2rem] sm:rounded-[3.5rem] group relative overflow-hidden border border-[#9FCB98]/30 hover:border-[#346739]/30 transition-all duration-500 bg-white/40 dark:bg-[#1A1F24]/40 soft-glow">
                <div className="absolute top-0 right-0 p-4 sm:p-8 opacity-5 group-hover:opacity-10 transition-opacity text-[#346739]">
                  <Briefcase size={80} strokeWidth={1} />
                </div>
                
                <div className="flex items-center gap-3 text-[#346739] mb-6 text-[10px] font-mono font-black uppercase tracking-[0.2em]">
                  <Calendar size={14} />
                  <span>{item.date}</span>
                </div>

                <h3 className="text-3xl font-display font-black mb-3 group-hover:text-[#346739] transition-colors leading-[1.1] uppercase tracking-tighter">{item.title}</h3>
                <p className="text-black font-bold mb-8 text-[11px] flex items-center gap-2 uppercase tracking-widest">
                  <span className="w-4 h-[1px] bg-[#346739]" />
                  {item.organization}
                </p>

                <ul className="space-y-4">
                  {item.details.map((detail, idx) => (
                    <li key={idx} className="flex gap-4 text-sm text-black transition-colors">
                      <ChevronRight size={18} className="text-[#346739] shrink-0 mt-0.5" />
                      <span className="font-medium leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
