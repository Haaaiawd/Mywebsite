"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { HugeTitle, TechText } from "@/components/Typography";
import { FaGithub, FaEnvelope, FaWeixin } from "react-icons/fa"; // Importing icons
import { SiXiaohongshu } from "react-icons/si";

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="h-dvh snap-start flex flex-col justify-between px-6 md:px-12 pt-16 md:pt-24 pb-6 md:pb-12 relative overflow-hidden bg-noise">
      {/* Top Bar Removed for Single Page Focus */}

      <motion.div style={{ y, opacity }} className="z-10 flex flex-col justify-start">
        {/* Role info moved to BioSection */}
        <HugeTitle className="leading-[0.75] text-[10vw] md:text-[9vw]">
          不Coding<br />的haa
        </HugeTitle>
      </motion.div>

      {/* Bottom Area: Anchor Stack (Left) + Quote (Right) */}
      <motion.div 
        className="w-full flex-1 flex flex-col-reverse md:flex-row justify-end md:justify-between items-start md:items-end gap-6 md:gap-8 z-20"
      >
         {/* The Anchor Stack (Bottom Left) */}
         <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex flex-col gap-2 md:gap-4 shrink-0"
         >
            <TechText className="mb-2 text-accent opacity-50">CONNECT</TechText>
            
            <a href="https://github.com/Haaaiawd" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3">
               <FaGithub className="text-xl md:text-2xl opacity-70 group-hover:opacity-100 transition-opacity"/>
               <span className="font-serif text-lg md:text-xl opacity-70 group-hover:opacity-100 transition-opacity border-b border-transparent group-hover:border-foreground/50">Haaaiawd</span>
            </a>
            
            <a href="mailto:haayy@foxmail.com" className="group flex items-center gap-3">
               <FaEnvelope className="text-xl md:text-2xl opacity-70 group-hover:opacity-100 transition-opacity"/>
               <span className="font-serif text-lg md:text-xl opacity-70 group-hover:opacity-100 transition-opacity border-b border-transparent group-hover:border-foreground/50">haayy@foxmail.com</span>
            </a>
            
            <a href="https://www.xiaohongshu.com/user/profile/6365fe62000000001e00d8ed" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3">
               <SiXiaohongshu className="text-xl md:text-2xl opacity-70 group-hover:opacity-100 transition-opacity"/>
               <span className="font-serif text-lg md:text-xl opacity-70 group-hover:opacity-100 transition-opacity border-b border-transparent group-hover:border-foreground/50">不Coding的Haa</span>
            </a>

            <div className="group flex items-center gap-3 cursor-default">
               <FaWeixin className="text-xl md:text-2xl opacity-70"/>
               <span className="font-serif text-lg md:text-xl opacity-70">不Coding的Haa</span>
            </div>
         </motion.div>
         
         {/* Quote (Bottom Right) */}
         <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-col gap-4 text-left md:text-right max-w-xl shrink-0"
         >
            <p className="font-serif text-base md:text-3xl italic leading-relaxed text-foreground/90">
             &quot;I know this age will wound.<br/>
             But I have no choice except to feed the fire.<br/>
             Not out of faith—<br/>
             but because the moment it dies, so does civilization.&quot;
            </p>
         </motion.div>
      </motion.div>

      {/* Bottom Bar - Absolute to fit single page */}
      <motion.div style={{ opacity }} className="absolute bottom-4 left-0 right-0 flex justify-center md:justify-end md:px-12 pointer-events-none">
         <TechText className="text-[10px] md:text-xs opacity-50">SCROLL FOR EXPERIENCE</TechText>
      </motion.div>
    </section>
  );
}
