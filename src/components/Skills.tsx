/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { DEVELOPER_INFO } from "../constants";
import { Cpu, Globe2, Award, Heart, MousePointer2, Github } from "lucide-react";

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-32 px-4 sm:px-6 max-w-7xl mx-auto space-y-20 sm:space-y-32">
      {/* Interactive Grid of Technical Skills */}
      <div>
        <div className="flex items-center gap-4 mb-12 sm:mb-20 relative z-[60]">
          <Cpu className="text-[#346739] w-7 h-7 sm:w-9 sm:h-9" strokeWidth={1} />
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-display font-black uppercase tracking-normal leading-none relative z-[60] overflow-visible px-4 sm:px-10">The Stack</h2>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-8">
          {[
            ...DEVELOPER_INFO.skills.languages,
            ...DEVELOPER_INFO.skills.frameworks,
            ...DEVELOPER_INFO.skills.tools,
            ...DEVELOPER_INFO.skills.concepts
          ].map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ 
                y: -10, 
                scale: 1.05,
              }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="glass p-5 sm:p-8 rounded-[1.5rem] sm:rounded-[2.5rem] flex flex-col items-center justify-center gap-4 sm:gap-6 transition-all group cursor-none relative overflow-hidden text-center border-[#9FCB98]/40 hover:border-[#346739]/40 bg-white/40 dark:bg-[#1A1F24]/40 hover-trigger shine-effect soft-glow"
            >
              <div className="text-[10px] font-mono font-black text-slate-400 group-hover:text-[#346739] transition-colors uppercase tracking-[0.3em]">
                {/* Removed SYS-N label */}
              </div>
              <span className="text-xs sm:text-sm font-bold tracking-tighter text-black group-hover:text-[#346739] transition-colors uppercase">
                {skill}
              </span>
              <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-[#346739] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 shadow-[0_2px_10px_rgba(52,103,57,0.4)]" />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-12">
        {/* Languages (Spoken) - Vibrant Circle Design */}
        <div className="glass p-6 sm:p-12 rounded-[2rem] sm:rounded-[3.5rem] space-y-6 sm:space-y-10 relative overflow-hidden border border-[#9FCB98]/40 bg-white soft-glow">
          <div className="flex items-center gap-4 relative z-[60] mb-4 sm:mb-8">
            <div className="p-2 sm:p-2.5 rounded-2xl bg-[#9FCB98]/10 text-[#346739] border border-[#9FCB98]/20">
              <Globe2 size={20} className="sm:w-6 sm:h-6" strokeWidth={1.5} />
            </div>
            <h3 className="text-lg sm:text-xl font-display font-black uppercase tracking-normal relative z-[60] overflow-visible px-4 sm:px-6">Dialects</h3>
          </div>
          <div className="flex flex-wrap gap-6 sm:gap-8 relative z-10 justify-center">
            {DEVELOPER_INFO.spokenLanguages.map((lang, idx) => (
              <motion.div
                key={lang.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.8 }}
                className="group relative flex flex-col items-center gap-3 sm:gap-4 hover-trigger"
              >
                <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full glass flex items-center justify-center text-xl sm:text-2xl font-black border border-[#9FCB98]/40 transition-all duration-500 soft-glow text-[#346739] group-hover:bg-[#346739] group-hover:text-white shine-effect bg-transparent`}>
                  {lang.script}
                </div>
                <span className="text-[9px] sm:text-[10px] font-mono font-black uppercase tracking-widest text-slate-400 group-hover:text-[#346739] transition-all">
                  {lang.name}
                </span>
                {/* Removed small dot */}
              </motion.div>
            ))}
          </div>
          <p className="text-[10px] sm:text-[11px] text-black font-medium leading-relaxed relative z-10 text-center uppercase tracking-tight">
            Articulate across various cultures, bridging technical complexity and regional nuances.
          </p>
        </div>

        {/* Soft Skills - Neon List */}
        <div className="glass p-6 sm:p-12 rounded-[2rem] sm:rounded-[3.5rem] space-y-6 sm:space-y-10 relative overflow-hidden border border-[#9FCB98]/40 bg-white soft-glow">
          <div className="flex items-center gap-4 relative z-[60] mb-4 sm:mb-8">
            <div className="p-2 sm:p-2.5 rounded-2xl bg-[#9FCB98]/10 text-[#346739] border border-[#9FCB98]/20">
              <Heart size={20} className="sm:w-6 sm:h-6" strokeWidth={1.5} />
            </div>
            <h3 className="text-lg sm:text-xl font-display font-black uppercase tracking-normal relative z-[60] overflow-visible px-4 sm:px-6">Ethics</h3>
          </div>
          <div className="space-y-3 sm:space-y-4">
            {DEVELOPER_INFO.softSkills.map((skill, idx) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ x: 5, scale: 1.02 }}
                className="flex items-center justify-between p-4 sm:p-5 rounded-[1.2rem] sm:rounded-[1.5rem] glass bg-transparent border border-[#9FCB98]/20 hover:border-[#346739]/30 transition-all group overflow-hidden hover-trigger shine-effect"
              >
                <div className="flex items-center gap-4 sm:gap-5">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#9FCB98]/10 flex items-center justify-center text-[#346739] group-hover:scale-110 transition-transform">
                    {skill.icon}
                  </div>
                  <span className="font-bold text-[10px] sm:text-[11px] uppercase tracking-widest text-black group-hover:text-[#346739]">{skill.name}</span>
                </div>
                {/* Removed small list dot */}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications - Modern Gradient Cards */}
        <div className="glass p-6 sm:p-12 rounded-[2rem] sm:rounded-[3.5rem] space-y-6 sm:space-y-10 relative overflow-hidden border border-[#9FCB98]/40 bg-white soft-glow md:col-span-2 lg:col-span-1">
          <div className="flex items-center justify-between gap-4 relative z-[60] mb-4 sm:mb-8">
            <div className="flex items-center gap-4">
              <div className="p-2 sm:p-2.5 rounded-2xl bg-[#9FCB98]/10 text-[#346739] border border-[#9FCB98]/20">
                <Award size={20} className="sm:w-6 sm:h-6" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg sm:text-xl font-display font-black uppercase tracking-normal relative z-[60] overflow-visible px-4 sm:px-6">Merits</h3>
            </div>
            <a 
              href={DEVELOPER_INFO.certificationRepo} 
              target="_blank" 
              rel="noopener"
              className="p-2.5 sm:p-3.5 rounded-2xl glass bg-[#F2EDC2] text-[#346739] hover:scale-110 transition-all border border-[#9FCB98]/40 group hover-trigger shine-effect"
              title="Repository"
            >
              <Github size={16} className="sm:w-4 sm:h-4 transition-transform" />
            </a>
          </div>
          <div className="space-y-3 sm:space-y-4 max-h-[300px] sm:max-h-[400px] overflow-y-auto pr-2 sm:pr-3 custom-scrollbar">
            {DEVELOPER_INFO.certifications.map((cert, idx) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-4 sm:p-6 rounded-[1.2rem] sm:rounded-[1.5rem] glass border border-[#9FCB98]/30 bg-transparent hover:border-[#346739]/30 transition-all duration-300 relative group overflow-hidden shine-effect hover-trigger"
              >
                <div className="relative z-10 flex gap-4 sm:gap-5 items-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#9FCB98]/10 flex items-center justify-center text-[#346739] border border-[#9FCB98]/20 group-hover:bg-[#346739] group-hover:text-white transition-all duration-500 shrink-0">
                    <Award size={18} className="sm:w-5.5 sm:h-5.5" />
                  </div>
                  <div>
                    <div className="text-[8px] sm:text-[9px] font-mono font-black text-slate-400 uppercase tracking-widest mb-1 group-hover:text-[#346739] transition-colors">{cert.issuer}</div>
                    <h4 className="text-[10px] sm:text-xs font-black text-black leading-tight line-clamp-2 uppercase tracking-tighter group-hover:text-[#346739] transition-colors">{cert.name}</h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
