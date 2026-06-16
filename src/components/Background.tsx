import { motion } from "motion/react";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-30 overflow-hidden pointer-events-none bg-inherit">
      {/* Floating Glass Blobs */}
      <motion.div
        animate={{
          x: [0, 100, -50, 0],
          y: [0, 50, 120, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[-10%] right-[10%] w-[500px] h-[500px] rounded-full bg-[#79AE6F]/20 blur-[120px]"
      />
      
      <motion.div
        animate={{
          x: [0, -120, 80, 0],
          y: [0, 100, -40, 0],
          scale: [1, 0.8, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-[#F2EDC2]/40 blur-[150px]"
      />

      <motion.div
        animate={{
          x: [0, 80, -100, 0],
          y: [0, -80, 60, 0],
          rotate: [0, 360],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[30%] left-[20%] w-[300px] h-[300px] rounded-full bg-[#346739]/10 blur-[100px]"
      />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03]" 
        style={{ 
          backgroundImage: `radial-gradient(#346739 1px, transparent 1px)`,
          backgroundSize: '40px 40px' 
        }} 
      />

      {/* Noise Texture */}
      <div className="absolute inset-0 mix-blend-overlay opacity-20 pointer-events-none"
        style={{
          backgroundImage: `url("https://grainy-gradients.vercel.app/noise.svg")`,
          filter: "contrast(150%) brightness(100%)"
        }}
      />
    </div>
  );
}
