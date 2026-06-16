/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Github, Mail, Linkedin, Phone, MapPin, Send, Code2 } from "lucide-react";
import { DEVELOPER_INFO } from "../constants";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-20">
        <div className="space-y-16 relative z-[60]">
          <div className="overflow-visible">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-display font-black mb-10 tracking-normal leading-[1] uppercase relative z-[70] px-12 py-8 overflow-visible"
            >
              Let's <br /> <span className="gradient-text italic filter drop-shadow-[0_8px_30px_rgba(52,103,57,0.2)]">Collaborate</span>
            </motion.h2>
            <p className="text-xl text-black font-medium max-w-sm leading-relaxed uppercase tracking-tight relative z-10 px-12">
              Always open to discussing new projects, creative ideas, or opportunities in the AI ecosystem.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex flex-wrap gap-6">
              {[
                { icon: <Github size={28} />, href: DEVELOPER_INFO.contact.github },
                { icon: <Linkedin size={28} />, href: DEVELOPER_INFO.contact.linkedin },
                { icon: <Code2 size={28} />, href: DEVELOPER_INFO.contact.leetcode },
                { icon: <Mail size={28} />, href: `mailto:${DEVELOPER_INFO.contact.email}` },
              ].map((link, i) => (
                <motion.a 
                  key={i}
                  href={link.href}
                  target="_blank" 
                  rel="noopener" 
                  whileHover={{ y: -8, scale: 1.1 }}
                  className="w-16 h-16 rounded-[2rem] glass flex items-center justify-center text-[#346739] border border-[#9FCB98]/40 transition-all duration-500 soft-glow bg-white/40 hover-trigger shine-effect"
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>

            <div className="flex items-center gap-8 group cursor-pointer hover-trigger">
              <div className="w-16 h-16 rounded-[2rem] glass flex items-center justify-center border border-[#9FCB98]/40 transition-all duration-500 soft-glow bg-white/40 shine-effect">
                <MapPin size={28} strokeWidth={1.5} className="text-[#346739]" />
              </div>
              <div className="group-hover:translate-x-2 transition-transform">
                <div className="text-[10px] font-mono font-black text-[#346739] uppercase tracking-[0.3em]">Base Operations</div>
                <div className="text-xl font-display font-black text-black uppercase tracking-tighter">{DEVELOPER_INFO.location} · {DEVELOPER_INFO.postalCode}</div>
              </div>
            </div>

            <div className="flex items-center gap-8 group cursor-pointer hover-trigger">
              <div className="w-16 h-16 rounded-[2rem] glass flex items-center justify-center border border-[#9FCB98]/40 transition-all duration-500 soft-glow bg-white/40 shine-effect">
                <Phone size={28} strokeWidth={1.5} className="text-[#346739]" />
              </div>
              <div className="group-hover:translate-x-2 transition-transform">
                <div className="text-[10px] font-mono font-black text-[#346739] uppercase tracking-[0.3em]">Direct Line</div>
                <div className="text-xl font-display font-black text-black uppercase tracking-tighter">{DEVELOPER_INFO.contact.phone}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="glass p-12 rounded-[4rem] relative overflow-hidden border border-[#9FCB98]/40 bg-white/40 soft-glow shine-effect">
          <form className="space-y-10 relative z-10" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <label className="text-[10px] font-mono font-black text-slate-400 uppercase tracking-[0.4em] ml-2">IDENTIFIER</label>
                <input
                  type="text"
                  placeholder="NAME_OR_SIGNAL"
                  className="w-full bg-white/40 border border-[#9FCB98]/40 rounded-3xl px-8 py-5 outline-none focus:border-[#346739] transition-all font-mono text-xs tracking-widest placeholder:opacity-30 text-black"
                />
              </div>
              <div className="space-y-4">
                <label className="text-[10px] font-mono font-black text-slate-400 uppercase tracking-[0.4em] ml-2">FREQUENCY</label>
                <input
                  type="email"
                  placeholder="EMAIL_COORDINATES"
                  className="w-full bg-white/40 border border-[#9FCB98]/40 rounded-3xl px-8 py-5 outline-none focus:border-[#346739] transition-all font-mono text-xs tracking-widest placeholder:opacity-30 text-black"
                />
              </div>
            </div>
            <div className="space-y-4">
              <label className="text-[10px] font-mono font-black text-slate-400 uppercase tracking-[0.4em] ml-2">PAYLOAD</label>
              <textarea
                placeholder="TRANSMIT_YOUR_COMMUNICATIONS..."
                rows={5}
                className="w-full bg-white/40 border border-[#9FCB98]/40 rounded-3xl px-8 py-5 outline-none focus:border-[#346739] transition-all font-mono text-xs tracking-widest placeholder:opacity-30 resize-none text-black"
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-6 bg-gradient-to-r from-[#346739] to-[#79AE6F] text-white rounded-[2.5rem] font-black text-lg uppercase tracking-[0.3em] flex items-center justify-center gap-4 soft-glow group transition-all hover-trigger"
            >
              Initiate Link
              <Send size={24} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" strokeWidth={1} />
            </motion.button>
          </form>

          {/* Decorative Background for Form */}
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#9FCB98]/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-[#F2EDC2]/10 rounded-full blur-[100px] pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
