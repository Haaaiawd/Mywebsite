"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { HugeTitle, SectionHeader, BodyText, TechText } from "@/components/Typography";
import FadeIn from "@/components/FadeIn";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen px-6 md:px-12 py-24 selection:bg-accent selection:text-white">
      <HeroSection />
      <BioSection />
      <SkillsSection />
      <ProjectsSection />
      <AuraSection />
      <CommunitySection />
      <FooterSection />
    </main>
  );
}

function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Client-side only time to prevent hydration mismatch
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    // This is the standard pattern for client-side only rendering
    // eslint-disable-next-line
    setMounted(true);
  }, []);

  return (
    <section ref={ref} className="min-h-screen snap-start flex flex-col justify-between py-6 md:py-12 relative overflow-hidden">
      {/* Status Bar */}
      <motion.div style={{ opacity }} className="flex justify-between items-start z-10 w-full border-b border-foreground/10 pb-3 md:pb-6">
        <div className="flex flex-col">
           <TechText className="text-[10px] md:text-xs">FUZHOU, CN</TechText>
           <TechText className="text-[10px] md:text-xs">26°04&apos;N 119°17&apos;E</TechText>
        </div>
        <div className="flex flex-col items-end">
           <TechText className="text-[10px] md:text-xs">
             {mounted ? `LOCAL TIME: ${new Date().toLocaleTimeString('en-US', {hour: '2-digit', minute:'2-digit'})}` : 'LOCAL TIME: --:--'}
           </TechText>
        </div>
      </motion.div>

      <motion.div style={{ y, opacity }} className="z-10 flex-1 flex flex-col justify-center">
        <TechText className="block mb-4 md:mb-6 text-[10px] md:text-sm tracking-[0.2em] md:tracking-[0.3em]">e/acc · PRODUCT MANAGER · INDIE DEVELOPER</TechText>
        <HugeTitle className="leading-[0.85] text-[13vw] md:text-[12vw]">
          不Coding<br />的haa
        </HugeTitle>
        <div className="mt-8 md:mt-16 w-full flex justify-end">
           <div className="flex flex-col gap-4 md:gap-6 text-right max-w-4xl">
             <p className="font-serif text-lg md:text-3xl italic leading-relaxed text-foreground/90">
               &quot;I know this age will wound.<br/>
               But I have no choice except to feed the fire.<br/>
               Not out of faith—<br/>
               but because the moment it dies, so does civilization.&quot;
             </p>
           </div>
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <motion.div style={{ opacity }} className="flex justify-between items-end z-10 w-full border-t border-foreground/10 pt-3 md:pt-6">
         <TechText className="text-[10px] md:text-xs">SCROLL FOR EXPERIENCE</TechText>
      </motion.div>
    </section>
  );
}

function BioSection() {
  return (
    <section className="min-h-screen snap-start flex flex-col justify-center py-8 md:py-24">
      <FadeIn className="h-full flex flex-col justify-between">
        <div className="flex justify-between items-baseline border-b border-foreground/10 pb-4 md:pb-6 mb-8 md:mb-12">
           <SectionHeader className="mb-0">About</SectionHeader>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start h-full">
          <div className="md:col-span-5 flex flex-col justify-between h-full space-y-6 md:space-y-12">
            <div>
              <p className="font-serif text-2xl md:text-4xl leading-tight text-foreground mb-4 md:mb-8">
                AI 编程工具重度用户.<br/>
                WaytoAGI 校园大使.<br/>
                211在读.
              </p>
              <BodyText className="text-sm md:text-lg text-secondary/80">
                Passionate about bridging the gap between design and code through AI. 
                Focusing on &quot;Typography as UI&quot; and creating digital experiences that feel physical.
              </BodyText>
            </div>

            <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8">
               <div className="space-y-1 md:space-y-2">
                  <TechText className="block text-accent">CONTACT</TechText>
                  <a href="mailto:haayy@foxmail.com" className="font-sans text-base md:text-lg hover:underline decoration-1 underline-offset-4 break-all">haayy@foxmail.com</a>
               </div>
               <div className="space-y-1 md:space-y-2">
                  <TechText className="block text-accent">LOCATION</TechText>
                  <p className="font-sans text-base md:text-lg">Fuzhou University</p>
               </div>
            </div>
          </div>

          <div className="md:col-span-7 flex flex-col md:grid md:grid-cols-2 gap-3 md:gap-4 h-full">
             <div className="relative w-full h-[40vh] md:h-[60vh] grayscale hover:grayscale-0 transition-all duration-700 ease-out">
              <Image 
                src="/images/avater.png" 
                alt="Avatar" 
                fill 
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="grid grid-cols-2 md:flex md:flex-col gap-3 md:gap-4 md:h-[60vh]">
                <div className="relative w-full h-[20vh] md:h-1/2 grayscale hover:grayscale-0 transition-all duration-500">
                   <Image 
                     src="/images/gdg-cert.jpg" 
                     alt="GDG Certificate" 
                     fill 
                     className="object-cover" 
                     sizes="(max-width: 768px) 50vw, 25vw"
                   />
                </div>
                <div className="relative w-full h-[20vh] md:h-1/2 grayscale hover:grayscale-0 transition-all duration-500">
                   <Image 
                     src="/images/datawhale-cert.jpg" 
                     alt="Datawhale Certificate" 
                     fill 
                     className="object-cover" 
                     sizes="(max-width: 768px) 50vw, 25vw"
                   />
                </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

function SkillsSection() {
  const skills = [
    { category: "MCP Servers", items: ["sequential-thinking", "puppeteer", "fetcher", "github", "context7", "metaso", "Exa Search"] },
    { category: "AI Stack", items: ["Cursor", "Claude Code", "v0.dev", "Github Copilot"] },
    { category: "Core Tech", items: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "React Native"] }
  ];

  return (
    <section className="min-h-screen snap-start flex flex-col justify-center py-8 md:py-24">
       <FadeIn className="h-full flex flex-col">
         <div className="flex justify-between items-baseline border-b border-foreground/10 pb-4 md:pb-6 mb-8 md:mb-16">
            <SectionHeader className="mb-0">Real Skills</SectionHeader>
         </div>
         
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 flex-1">
            {skills.map((skillGroup, index) => (
              <div key={skillGroup.category} className="flex flex-col border-l border-foreground/10 pl-4 md:pl-8">
                <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-8">
                   <span className="font-mono text-[10px] md:text-xs border border-[var(--accent-light)] text-accent rounded-full w-5 h-5 md:w-6 md:h-6 flex items-center justify-center">{index + 1}</span>
                   <TechText className="text-accent tracking-widest">{skillGroup.category}</TechText>
                </div>
                <ul className="space-y-4">
                  {skillGroup.items.map((item) => (
                    <li key={item} className="font-serif text-xl md:text-3xl text-foreground/80 hover:text-foreground hover:translate-x-2 transition-transform duration-300 cursor-default">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
         </div>
       </FadeIn>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section className="min-h-screen snap-start flex flex-col justify-center py-8 md:py-24">
      <FadeIn className="h-full flex flex-col">
        <div className="flex justify-between items-baseline border-b border-foreground/10 pb-4 md:pb-6 mb-8 md:mb-12">
            <SectionHeader className="mb-0">Selected Work</SectionHeader>
        </div>
        
        <div className="flex-1 flex flex-col justify-center">
          <div className="group relative w-full bg-secondary/5 hover:bg-secondary/10 transition-colors duration-500 p-6 md:p-16">
            <div className="flex flex-col md:flex-row justify-between items-start mb-8 md:mb-12">
              <div>
                 <TechText className="mb-3 md:mb-4 block text-accent">FEATURED PROJECT</TechText>
                 <h3 className="font-serif text-5xl md:text-8xl mb-2 md:mb-4">FoodSnap</h3>
                 <p className="font-serif text-lg md:text-2xl text-secondary/60 italic">食刻拍</p>
              </div>
              <div className="flex flex-col items-end mt-4 md:mt-0">
                 <TechText className="text-[10px] md:text-xs">2025.05 - 2025.06</TechText>
                 <TechText className="mt-2 text-[10px] md:text-xs">GOOGLE GEMMA 3 FINALIST</TechText>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 border-t border-foreground/10 pt-8 md:pt-12">
               <div className="md:col-span-8">
                 <p className="font-serif text-lg md:text-3xl leading-relaxed mb-6 md:mb-8">
                   A pure AI-assisted food safety assistant built with native WeChat Mini Program. 
                   Demonstrating the power of &quot;Code-less&quot; development using v0 and Cursor.
                 </p>
                 <div className="flex flex-wrap gap-2 md:gap-4">
                   {["GOOGLE GEMMA 3", "WECHAT MINIPROGRAM", "AI-FIRST", "TYPESCRIPT"].map(tag => (
                     <span key={tag} className="px-3 md:px-4 py-1 md:py-2 border border-foreground/20 rounded-full text-[10px] md:text-xs tracking-widest uppercase hover:bg-foreground hover:text-background transition-colors cursor-default">
                       {tag}
                     </span>
                   ))}
                 </div>
               </div>
               <div className="md:col-span-4 flex items-end justify-end">
                  <span className="w-16 h-16 md:w-24 md:h-24 border border-foreground rounded-full flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-colors cursor-pointer">
                    <span className="text-2xl md:text-4xl">↗</span>
                  </span>
               </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

function AuraSection() {
  return (
    <section className="min-h-screen snap-start flex flex-col justify-center py-8 md:py-24">
      <FadeIn className="h-full flex flex-col">
        <div className="flex justify-between items-baseline border-b border-foreground/10 pb-4 md:pb-6 mb-8 md:mb-12">
            <SectionHeader className="mb-0">AURA Project</SectionHeader>
        </div>
        
        <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 flex flex-col justify-center">
            <TechText className="mb-3 md:mb-4 block text-accent text-[10px] md:text-xs">TEAM LEADER · PRODUCT MANAGER · SOFTWARE DEV</TechText>
            <h3 className="font-serif text-4xl md:text-7xl mb-4 md:mb-6">AURA</h3>
            <p className="font-serif text-lg md:text-2xl text-secondary/60 italic mb-6 md:mb-8">安芮 · AI婴儿监测床垫</p>
            
            <p className="font-serif text-base md:text-2xl leading-relaxed mb-6 md:mb-8 max-w-2xl">
              A smart infant monitoring mattress powered by AI. 
              Designed to provide real-time health insights and peace of mind for parents through non-invasive sleep tracking and intelligent alerts.
            </p>
            
            <div className="flex flex-wrap gap-2 md:gap-4">
              {["AI MONITORING", "HARDWARE", "INFANT SAFETY", "IoT"].map(tag => (
                <span key={tag} className="px-3 md:px-4 py-1 md:py-2 border border-foreground/20 rounded-full text-[10px] md:text-xs tracking-widest uppercase hover:bg-foreground hover:text-background transition-colors cursor-default">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          <div className="md:col-span-5 relative h-[35vh] md:h-[50vh] grayscale hover:grayscale-0 transition-all duration-700">
            <Image 
              src="/images/aura.png" 
              alt="AURA Project" 
              fill 
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

function CommunitySection() {
  return (
    <section className="min-h-screen snap-start flex flex-col justify-center py-8 md:py-24">
       <FadeIn className="h-full flex flex-col">
         <div className="flex justify-between items-baseline border-b border-foreground/10 pb-4 md:pb-6 mb-8 md:mb-12">
            <SectionHeader className="mb-0">Community</SectionHeader>
         </div>
         
         <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
            <div className="flex flex-col">
              <TechText className="mb-3 md:mb-4 block text-accent text-[10px] md:text-xs">CAMPUS AMBASSADOR</TechText>
              <h3 className="font-serif text-3xl md:text-5xl mb-3 md:mb-4">WaytoAGI</h3>
              <TechText className="block mb-4 md:mb-6 text-[10px] md:text-xs">2024 - PRESENT</TechText>
              <BodyText className="mb-6 md:mb-8 text-sm md:text-base">
                Organized the 3rd AIPO Campus Venture Capital Event at Fuzhou University. 
                Managing the campus AI community focused on cutting-edge AI tools and fostering the next generation of AI enthusiasts.
              </BodyText>
              <div className="relative h-24 md:h-32 w-48 md:w-64 grayscale hover:grayscale-0 transition-all duration-500">
                 <Image 
                   src="/images/waytoagi.png" 
                   alt="WaytoAGI" 
                   fill 
                   className="object-contain object-left" 
                   sizes="(max-width: 768px) 50vw, 25vw"
                 />
              </div>
            </div>
            
            <div className="flex flex-col">
              <TechText className="mb-3 md:mb-4 block text-accent text-[10px] md:text-xs">EDUCATION</TechText>
              <h3 className="font-serif text-3xl md:text-5xl mb-3 md:mb-4">Fuzhou University</h3>
              <TechText className="block mb-4 md:mb-6 text-[10px] md:text-xs">211 · LOGISTICS MANAGEMENT</TechText>
              <BodyText className="mb-6 md:mb-8 text-sm md:text-base">
                GPA: 3.5/4.0. Actively bridging the gap between logistics, AI, and product design.
                Focused on applying emerging technologies to real-world problems.
              </BodyText>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {["LOGISTICS MGMT", "AI ENTHUSIAST", "PRODUCT THINKING"].map(tag => (
                  <span key={tag} className="px-2 md:px-3 py-1 border border-foreground/10 rounded-full text-[10px] md:text-xs tracking-widest uppercase">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
         </div>
       </FadeIn>
    </section>
  );
}

function FooterSection() {
  return (
    <footer className="h-dvh snap-start flex flex-col">
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 h-full">
        <a 
          href="https://github.com/Haaaiawd" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative border-r border-b md:border-b-0 border-foreground/10 flex flex-col justify-between p-12 hover:bg-foreground hover:text-background active:bg-foreground active:text-background transition-colors duration-200"
        >
           <div className="flex justify-between items-start">
              <TechText className="group-hover:text-background/70 group-active:text-background/70 transition-colors">SOCIAL LINK 01</TechText>
              <span className="text-4xl group-hover:rotate-45 group-active:rotate-45 transition-transform duration-500">↗</span>
           </div>
           <div>
              <h3 className="font-serif text-[12vw] md:text-[8vw] leading-none mb-4">Github</h3>
              <TechText className="group-hover:text-background/70 group-active:text-background/70 transition-colors">OPEN SOURCE & CONTRIBUTIONS</TechText>
           </div>
        </a>

        <a 
          href="https://www.xiaohongshu.com/user/profile/6365fe62000000001e00d8ed" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative flex flex-col justify-between p-12 hover:bg-[#FF2442] hover:text-white active:bg-[#FF2442] active:text-white transition-colors duration-200"
        >
           <div className="flex justify-between items-start">
              <TechText className="group-hover:text-white/70 group-active:text-white/70 transition-colors">SOCIAL LINK 02</TechText>
              <span className="text-4xl group-hover:rotate-45 group-active:rotate-45 transition-transform duration-500">↗</span>
           </div>
           <div>
              <h3 className="font-serif text-[12vw] md:text-[8vw] leading-none mb-4">RedNote</h3>
              <TechText className="group-hover:text-white/70 group-active:text-white/70 transition-colors">LIFESTYLE & INSIGHTS</TechText>
           </div>
        </a>
      </div>

      <div className="border-t border-foreground/10 py-4 md:py-6 px-6 md:px-12 flex flex-col md:flex-row gap-2 md:gap-0 justify-center md:justify-between items-center bg-background text-center shrink-0">
         <TechText className="text-[10px] md:text-xs">© 2025 HAAAIAWD & ANTIGRAVITY</TechText>
         <TechText className="text-[10px] md:text-xs">DESIGNED WITH RADICAL MINIMALISM</TechText>
      </div>
    </footer>
  );
}
