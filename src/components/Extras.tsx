/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { DEVELOPER_INFO } from "../constants";

export function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-[#346739]/20 bg-slate-950">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
        <span className="text-slate-300 font-bold uppercase tracking-widest text-xs">
          Crafted with <span className="text-[#79AE6F] animate-pulse">passion</span>. Jinsiya A. AI & DS - Full stack Developer.
        </span>
      </div>
    </footer>
  );
}

export function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[100] bg-[#F2EDC2] flex flex-col items-center justify-center text-slate-800"
    >
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 1, 0.3],
          rotate: [0, 90, 0]
        }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="w-20 h-20 border-4 border-[#346739] border-t-[#F2EDC2] rounded-[2rem] border-b-[#79AE6F] mb-12 shadow-[0_0_40px_rgba(52,103,57,0.3)]"
      />
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: 300 }}
        className="h-1.5 bg-slate-200 rounded-full overflow-hidden"
      >
        <motion.div
          animate={{ x: [-300, 300] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="h-full w-40 bg-gradient-to-r from-[#346739] via-[#79AE6F] to-[#9FCB98] shadow-[0_0_20px_rgba(52,103,57,0.6)]"
        />
      </motion.div>
      <div className="mt-10 font-display text-lg md:text-xl font-black uppercase tracking-[0.4em] text-[#346739] text-center max-w-xs md:max-w-md leading-relaxed">
        Welcome to my <br />
        <span className="gradient-text italic">Digital Space</span>
      </div>
    </motion.div>
  );
}
