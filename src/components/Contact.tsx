/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion } from "motion/react";
import { 
  Github, 
  Mail, 
  Linkedin, 
  Phone, 
  MapPin, 
  Send, 
  Code2, 
  CheckCircle2 
} from "lucide-react";
import { DEVELOPER_INFO } from "../constants";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "transmitting" | "success" | "error">("idle");

  const handleSubmit = () => {
    setStatus("transmitting");
    // Simulate brief transition to success overlay after form post starts
    setTimeout(() => {
      setStatus("success");
    }, 1200);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 max-w-7xl mx-auto space-y-12 sm:space-y-20">
      {/* Hidden iframe to intercept form action so it doesn't navigate away */}
      <iframe
        name="google_form_iframe"
        id="google_form_iframe"
        style={{ display: "none" }}
      />

      <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-start">
        
        {/* Info Left Block */}
        <div className="space-y-10 sm:space-y-16 relative z-[60]">
          <div className="overflow-visible">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl md:text-7xl font-display font-black mb-4 sm:mb-8 tracking-tight leading-[1.1] uppercase relative z-[70] px-2 sm:px-6 py-2 overflow-visible animate-pulse-slow"
            >
              Let's <br /> <span className="gradient-text italic filter drop-shadow-[0_8px_30px_rgba(52,103,57,0.2)]">Collaborate</span>
            </motion.h2>
            <p className="text-base sm:text-lg md:text-xl text-[#346739] font-medium max-w-sm leading-relaxed uppercase tracking-tight relative z-10 px-2 sm:px-6">
              Always open to discussing new projects, creative ideas, or opportunities in the AI ecosystem.
            </p>
          </div>

          <div className="space-y-6 sm:space-y-8 px-2 sm:px-6">
            <div className="flex flex-wrap gap-4 sm:gap-6">
              {[
                { icon: <Github size={24} />, href: DEVELOPER_INFO.contact.github },
                { icon: <Linkedin size={24} />, href: DEVELOPER_INFO.contact.linkedin },
                { icon: <Code2 size={24} />, href: DEVELOPER_INFO.contact.leetcode },
                { icon: <Mail size={24} />, href: `mailto:${DEVELOPER_INFO.contact.email}` },
              ].map((link, i) => (
                <motion.a 
                  key={i}
                  href={link.href}
                  target="_blank" 
                  rel="noopener" 
                  whileHover={{ y: -6, scale: 1.05 }}
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-[1.25rem] sm:rounded-[2rem] glass flex items-center justify-center text-[#346739] border border-[#9FCB98]/30 transition-all duration-500 soft-glow bg-white/40 hover-trigger shine-effect"
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>

            <div className="flex items-center gap-4 sm:gap-8 group cursor-pointer hover-trigger">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-[1.25rem] sm:rounded-[2rem] glass flex items-center justify-center border border-[#9FCB98]/30 transition-all duration-500 soft-glow bg-white/40 shine-effect flex-shrink-0">
                <MapPin size={24} strokeWidth={1.5} className="text-[#346739]" />
              </div>
              <div className="group-hover:translate-x-2 transition-transform">
                <div className="text-[9px] sm:text-[10px] font-mono font-black text-[#346739] uppercase tracking-[0.3em]">Base Operations</div>
                <div className="text-base sm:text-xl font-display font-black text-[#346739] uppercase tracking-tighter">
                  {DEVELOPER_INFO.location}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Card */}
        <div className="glass p-6 sm:p-10 md:p-12 rounded-[2rem] sm:rounded-[3.5rem] relative overflow-hidden border border-[#9FCB98]/30 bg-white/40 soft-glow shine-effect">
          <form 
            action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdHRt8znDh9U3OVcjYCe3m3BZk3sYl2Nr7dejEfwzNmhbqDwA/formResponse"
            method="POST"
            target="google_form_iframe"
            onSubmit={handleSubmit}
            className="space-y-6 sm:space-y-8 relative z-10"
          >
            
            {/* Connection loading view */}
            {status === "transmitting" && (
              <div className="absolute inset-0 bg-[#F2EDC2]/95 backdrop-blur-md z-30 flex flex-col items-center justify-center text-center p-6 sm:p-8">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
                  className="w-12 h-12 sm:w-16 sm:h-16 border-4 border-[#346739]/20 border-t-[#346739] rounded-full mb-6"
                />
                <h3 className="text-lg sm:text-xl font-display font-black text-[#346739] uppercase tracking-wider mb-2">Sending Message</h3>
                <p className="font-mono text-[9px] sm:text-[10px] text-[#346739] uppercase tracking-[0.2em] animate-pulse">
                  Processing and delivering directly...
                </p>
              </div>
            )}

            {/* Transmission success overlay */}
            {status === "success" && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 bg-[#F2EDC2]/95 backdrop-blur-md z-30 flex flex-col justify-between p-6 sm:p-12 text-[#346739]"
                id="contact-success-receipt"
              >
                <div className="space-y-4 sm:space-y-6 my-auto text-center">
                  <div className="flex justify-center mb-4">
                    <CheckCircle2 className="text-[#346739]" size={64} />
                  </div>
                  
                  <h3 className="text-2xl sm:text-4xl font-display font-black text-[#346739] uppercase tracking-tight">
                    Thank You!
                  </h3>
                  
                  <p className="text-sm sm:text-base font-semibold text-[#346739]/80 max-w-md mx-auto leading-relaxed">
                    Your message has been sent successfully. I have received your inquiry directly in my inbox and will get back to you shortly!
                  </p>
                </div>

                <div className="space-y-4 pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setName("");
                      setEmail("");
                      setMessage("");
                      setStatus("idle");
                    }}
                    className="w-full py-4 bg-[#346739] text-white rounded-[1.25rem] sm:rounded-[2rem] font-bold text-xs uppercase tracking-[0.2em] hover:bg-[#346739]/90 transition-all font-mono shadow-md"
                    id="contact-success-reset-btn"
                  >
                    Send Another Message
                  </button>
                </div>
              </motion.div>
            )}

            {/* Error Overlay */}
            {status === "error" && (
              <div className="absolute inset-0 bg-rose-100/95 backdrop-blur-md z-30 flex flex-col justify-between p-6 sm:p-12 text-rose-800">
                <div className="space-y-4 my-auto text-center">
                  <h3 className="text-xl sm:text-3xl font-display font-black uppercase text-rose-900">Transmission Failed</h3>
                  <p className="text-xs sm:text-sm font-medium text-rose-800 max-w-xs mx-auto">
                    Failed to send message. Please check your connection and try again.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="w-full py-4 bg-rose-600 text-white rounded-[1.25rem] sm:rounded-[2rem] font-bold text-xs uppercase tracking-wider font-mono mt-auto"
                >
                  Retry Submission
                </button>
              </div>
            )}

            {/* Form Input Boxes with exact Google Form field names */}
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-mono font-black text-[#346739]/60 uppercase tracking-[0.15em] ml-1">Name</label>
                <input
                  type="text"
                  required
                  name="entry.619849610"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-white/40 border border-[#9FCB98]/40 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3.5 sm:py-4.5 outline-none focus:border-[#346739] transition-all font-sans text-sm text-[#346739] font-semibold"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-mono font-black text-[#346739]/60 uppercase tracking-[0.15em] ml-1">Email</label>
                <input
                  type="email"
                  required
                  name="entry.69251612"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/40 border border-[#9FCB98]/40 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3.5 sm:py-4.5 outline-none focus:border-[#346739] transition-all font-sans text-sm text-[#346739] font-semibold"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-[10px] font-mono font-black text-[#346739]/60 uppercase tracking-[0.15em] ml-1">Message</label>
              <textarea
                required
                name="entry.298863024"
                placeholder="Your Message"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-white/40 border border-[#9FCB98]/40 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3.5 sm:py-4.5 outline-none focus:border-[#346739] transition-all font-sans text-sm resize-none text-[#346739] font-semibold"
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              type="submit"
              className="w-full py-4 sm:py-5 bg-gradient-to-r from-[#346739] to-[#79AE6F] text-white rounded-[1.25rem] sm:rounded-[2rem] font-black text-sm sm:text-base uppercase tracking-[0.2em] flex items-center justify-center gap-2 sm:gap-3 soft-glow group transition-all hover-trigger shadow-lg cursor-pointer animate-pulse-glow"
              id="initiate-link-submit-btn"
            >
              Initiate Link
              <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" strokeWidth={1.5} />
            </motion.button>
          </form>

          {/* Decorative Background for Form */}
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#346739]/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-[#79AE6F]/5 rounded-full blur-[100px] pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
