
import React, { useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "motion/react";
import { Github, Sparkles, BrainCircuit, Rocket, ChevronRight, X } from "lucide-react";
import { DEVELOPER_INFO } from "../constants";

function TiltCard({ project }: { project: any, key?: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
    
    e.currentTarget.style.setProperty("--mouse-x", `${mouseX}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${mouseY}px`);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const [showDetails, setShowDetails] = useState(false);

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      layout
      style={{
        rotateY: showDetails ? 0 : rotateY,
        rotateX: showDetails ? 0 : rotateX,
        transformStyle: "preserve-3d",
      }}
      className={`relative ${showDetails ? "h-auto min-h-[500px]" : "h-[500px]"} w-full p-[1px] group transition-all duration-500`}
    >
      <motion.div
        layout
        className="absolute inset-0 rounded-[2.5rem] glass p-10 flex flex-col justify-between overflow-hidden bg-white/40 border border-[#9FCB98]/30 soft-glow"
      >
        <AnimatePresence mode="wait">
          {!showDetails ? (
            <motion.div
              key="summary"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="h-full flex flex-col justify-between relative"
              style={{ transform: "translateZ(30px)" }}
            >
              {/* Image background removed */}

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 rounded-2xl bg-[#346739]/10 text-[#346739] border border-[#346739]/20">
                    <BrainCircuit size={28} strokeWidth={1.5} />
                  </div>
                  {project.badge && (
                    <span className="text-[10px] font-mono font-black px-4 py-1.5 bg-[#F2EDC2] text-[#346739] rounded-full uppercase tracking-widest border border-[#9FCB98]/40 shadow-sm">
                      {project.badge}
                    </span>
                  )}
                </div>
                
                <motion.h3 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ y: -2 }}
                  className="text-4xl font-display font-black mb-4 tracking-normal text-[#346739] leading-[1] uppercase transition-all group-hover:translate-x-2 relative overflow-visible px-4"
                >
                  {project.title}
                </motion.h3>

                <p className="text-black font-display font-medium mb-8 line-clamp-4 uppercase tracking-tight text-[12px] leading-relaxed">
                  {project.aim}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech: string) => (
                    <span key={tech} className="px-3 py-1 bg-[#9FCB98]/10 border border-[#9FCB98]/20 rounded-lg text-[10px] font-mono font-bold uppercase tracking-wider text-black">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative z-10 pt-6">
                <div className="flex items-center justify-between">
                  <div className="flex gap-4">
                    <a href={project.github} target="_blank" rel="noopener" className="p-3.5 rounded-2xl glass bg-white/50 border-[#9FCB98]/40 text-[#346739] hover:bg-[#346739] hover:text-white transition-all duration-300 soft-glow hover-trigger">
                      <Github size={20} />
                    </a>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowDetails(true)}
                    className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.3em] text-[#346739] hover:opacity-70 transition-opacity hover-trigger"
                  >
                    Explore System <ChevronRight size={14} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="details"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="h-full flex flex-col overflow-y-auto pr-2 custom-scrollbar relative z-10"
            >
              <div className="flex items-center justify-between mb-10">
                <h3 className="text-3xl font-display font-black text-[#346739] tracking-tighter uppercase">{project.title}</h3>
                <button onClick={() => setShowDetails(false)} className="p-2 hover:bg-[#346739]/10 rounded-full transition-colors group hover-trigger">
                  <X size={24} className="text-slate-400 group-hover:text-[#346739]" />
                </button>
              </div>

              <div className="space-y-12">
                {/* Carousel section removed */}

                <section>
                  <h4 className="text-[10px] font-mono font-black uppercase tracking-[0.3em] text-[#346739] mb-4 flex items-center gap-2">
                    <Sparkles size={14} className="text-[#346739]" />
                    TECHNICAL ARCHITECTURE
                  </h4>
                  <p className="text-sm text-black font-display font-medium leading-relaxed">
                    {project.idea}
                  </p>
                </section>

                <section>
                  <h4 className="text-[10px] font-mono font-black uppercase tracking-[0.3em] text-[#346739] mb-6 flex items-center gap-2">
                    <Rocket size={14} className="text-[#346739]" />
                    OPERATIONAL PIPELINE
                  </h4>
                  <div className="grid grid-cols-1 gap-4">
                    {project.working.map((step: string, i: number) => (
                      <div key={i} className="flex items-start gap-5 p-6 rounded-[2rem] glass bg-[#F2EDC2]/10 border-[#9FCB98]/20 transition-all group/item">
                        <div className="w-10 h-10 rounded-2xl bg-[#346739]/10 flex items-center justify-center text-[#346739] shrink-0 group-hover/item:scale-110 transition-transform">
                          <span className="text-[10px] font-mono font-black">{i + 1}</span>
                        </div>
                        <span className="text-sm font-display font-medium text-black leading-snug">{step}</span>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Halo Glow */}
      <div className="absolute -inset-10 bg-[#346739]/5 blur-[80px] opacity-0 group-hover:opacity-100 transition-all duration-700 -z-20 pointer-events-none" />
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
        <div className="max-w-3xl relative z-[60]">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-display font-black mb-8 tracking-normal leading-[0.85] uppercase relative z-[70] px-12 py-8 overflow-visible"
          >
            Digital <span className="gradient-text filter drop-shadow-[0_8px_30px_rgba(52,103,57,0.2)]">Assets</span>
          </motion.h2>
          <p className="text-xl text-black font-medium leading-relaxed uppercase tracking-tight relative z-[60] px-12">
            Curated selection of intelligent platforms and analytical models.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-16">
        {DEVELOPER_INFO.projects.map((project) => (
          <TiltCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
