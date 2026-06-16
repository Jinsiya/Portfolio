/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useState } from "react";
import { Pointer } from "lucide-react";

export default function Cursor() {
  const [isHovering, setIsHovering] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 30, stiffness: 400, mass: 0.5 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleHover = () => setIsHovering(true);
    const handleUnhover = () => setIsHovering(false);

    window.addEventListener("mousemove", moveCursor);
    
    const refreshHandlers = () => {
      const interactiveElements = document.querySelectorAll("a, button, [role='button'], .hover-trigger");
      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", handleHover);
        el.addEventListener("mouseleave", handleUnhover);
      });
    };

    refreshHandlers();
    
    // Observer for dynamic content
    const observer = new MutationObserver(refreshHandlers);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      observer.disconnect();
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none flex items-center justify-center hidden md:flex"
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      id="custom-cursor"
    >
      {/* Outer Halo */}
      <motion.div
        animate={{
          scale: isHovering ? 2.5 : 1,
          opacity: isHovering ? 0.3 : 0.4,
        }}
        className="absolute w-8 h-8 rounded-full bg-[#346739] blur-[4px]"
      />

      {/* Main Core */}
      <motion.div
        animate={{
          scale: isHovering ? 0.8 : 1,
        }}
        className="relative w-3 h-3 bg-[#346739] rounded-full shadow-[0_0_10px_rgba(52,103,57,0.5)]"
      >
        {isHovering && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <Pointer size={10} className="text-white" />
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}
