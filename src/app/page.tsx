"use client";

import { useRef } from "react";
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

  return (
    <section ref={ref} className="h-screen snap-start flex flex-col justify-between py-12 relative overflow-hidden">
      {/* Status Bar */}
      <motion.div style={{ opacity }} className="flex justify-between items-start z-10 w-full border-b border-foreground/10 pb-6">
        <div className="flex flex-col">
           <TechText>FUZHOU, CN</TechText>
           <TechText>26°04&apos;N 119°17&apos;E</TechText>
        </div>
        <div className="flex flex-col items-end">
           <TechText>AVAILABLE FOR WORK</TechText>
           <TechText>LOCAL TIME: {new Date().toLocaleTimeString('en-US', {hour: '2-digit', minute:'2-digit'})}</TechText>
        </div>
      </motion.div>

      <motion.div style={{ y, opacity }} className="z-10 flex-1 flex flex-col justify-center">
        <TechText className="block mb-6 text-sm tracking-[0.3em]">CHIEF UI/UX DESIGNER & CREATIVE FRONTEND DEVELOPER</TechText>
        <HugeTitle className="leading-[0.85]">
          不Coding<br />的haa
        </HugeTitle>
        <div className="mt-16 flex flex-col md:flex-row justify-between items-end max-w-6xl w-full">
           <BodyText className="text-2xl md:text-3xl font-serif italic">
            &quot;Radical Minimalism is not about emptiness,<br />it&apos;s about the extreme clarity of purpose.&quot;
          </BodyText>
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <motion.div style={{ opacity }} className="flex justify-between items-end z-10 w-full border-t border-foreground/10 pt-6">
         <TechText>SCROLL FOR EXPERIENCE</TechText>
         <TechText>INDEX 01 / 07</TechText>
      </motion.div>
    </section>
  );
}

function BioSection() {
  return (
    <section className="min-h-screen snap-start flex flex-col justify-center py-24">
      <FadeIn className="h-full flex flex-col justify-between">
        <div className="flex justify-between items-baseline border-b border-foreground/10 pb-6 mb-12">
           <SectionHeader className="mb-0">About</SectionHeader>
           <TechText>INDEX 02 / 07</TechText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start h-full">
          <div className="md:col-span-5 flex flex-col justify-between h-full space-y-12">
            <div>
              <p className="font-serif text-3xl md:text-4xl leading-tight text-foreground mb-8">
                AI 编程工具重度用户.<br/>
                WaytoAGI 校园大使.<br/>
                211在读.
              </p>
              <BodyText className="text-lg text-secondary/80">
                Passionate about bridging the gap between design and code through AI. 
                Focusing on &quot;Typography as UI&quot; and creating digital experiences that feel physical.
              </BodyText>
            </div>

            <div className="grid grid-cols-2 gap-8">
               <div className="space-y-2">
                  <TechText className="block text-accent">CONTACT</TechText>
                  <a href="mailto:haayy@foxmail.com" className="font-sans text-lg hover:underline decoration-1 underline-offset-4">haayy@foxmail.com</a>
               </div>
               <div className="space-y-2">
                  <TechText className="block text-accent">LOCATION</TechText>
                  <p className="font-sans text-lg">Fuzhou University</p>
               </div>
            </div>
          </div>

          <div className="md:col-span-7 grid grid-cols-2 gap-4 h-full">
             <div className="relative w-full h-[60vh] grayscale hover:grayscale-0 transition-all duration-700 ease-out">
              <Image 
                src="/images/avater.png" 
                alt="Avatar" 
                fill 
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-4 h-[60vh]">
               <div className="relative w-full h-1/2 grayscale hover:grayscale-0 transition-all duration-500">
                  <Image src="/images/gdg-cert.jpg" alt="GDG Certificate" fill className="object-cover" />
               </div>
               <div className="relative w-full h-1/2 grayscale hover:grayscale-0 transition-all duration-500">
                  <Image src="/images/datawhale-cert.jpg" alt="Datawhale Certificate" fill className="object-cover" />
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
    <section className="min-h-screen snap-start flex flex-col justify-center py-24">
       <FadeIn className="h-full flex flex-col">
         <div className="flex justify-between items-baseline border-b border-foreground/10 pb-6 mb-16">
            <SectionHeader className="mb-0">Real Skills</SectionHeader>
            <TechText>INDEX 03 / 07</TechText>
         </div>
         
         <div className="grid grid-cols-1 md:grid-cols-3 gap-12 flex-1">
            {skills.map((skillGroup, index) => (
              <div key={skillGroup.category} className="flex flex-col border-l border-foreground/10 pl-8">
                <div className="flex items-center gap-4 mb-8">
                   <span className="font-mono text-xs border border-foreground/20 rounded-full w-6 h-6 flex items-center justify-center">{index + 1}</span>
                   <TechText className="text-accent tracking-widest">{skillGroup.category}</TechText>
                </div>
                <ul className="space-y-4">
                  {skillGroup.items.map((item) => (
                    <li key={item} className="font-serif text-3xl text-foreground/80 hover:text-foreground hover:translate-x-2 transition-transform duration-300 cursor-default">
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
    <section className="min-h-screen snap-start flex flex-col justify-center py-24">
      <FadeIn className="h-full flex flex-col">
        <div className="flex justify-between items-baseline border-b border-foreground/10 pb-6 mb-12">
            <SectionHeader className="mb-0">Selected Work</SectionHeader>
            <TechText>INDEX 04 / 07</TechText>
        </div>
        
        <div className="flex-1 flex flex-col justify-center">
          <div className="group relative w-full bg-secondary/5 hover:bg-secondary/10 transition-colors duration-500 p-8 md:p-16">
            <div className="flex flex-col md:flex-row justify-between items-start mb-12">
              <div>
                 <TechText className="mb-4 block text-accent">FEATURED PROJECT</TechText>
                 <h3 className="font-serif text-6xl md:text-8xl mb-4">FoodSnap</h3>
                 <p className="font-serif text-2xl text-secondary/60 italic">食刻拍</p>
              </div>
              <div className="flex flex-col items-end mt-8 md:mt-0">
                 <TechText>2025.05 - 2025.06</TechText>
                 <TechText className="mt-2">GOOGLE GEMMA 3 FINALIST</TechText>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-foreground/10 pt-12">
               <div className="md:col-span-8">
                 <p className="font-serif text-2xl md:text-3xl leading-relaxed mb-8">
                   A pure AI-assisted food safety assistant built with native WeChat Mini Program. 
                   Demonstrating the power of &quot;Code-less&quot; development using v0 and Cursor.
                 </p>
                 <div className="flex flex-wrap gap-4">
                   {["GOOGLE GEMMA 3", "WECHAT MINIPROGRAM", "AI-FIRST", "TYPESCRIPT"].map(tag => (
                     <span key={tag} className="px-4 py-2 border border-foreground/20 rounded-full text-xs tracking-widest uppercase hover:bg-foreground hover:text-background transition-colors cursor-default">
                       {tag}
                     </span>
                   ))}
                 </div>
               </div>
               <div className="md:col-span-4 flex items-end justify-end">
                  <span className="w-24 h-24 border border-foreground rounded-full flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-colors cursor-pointer">
                    <span className="text-4xl">↗</span>
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
    <section className="min-h-screen snap-start flex flex-col justify-center py-24">
      <FadeIn className="h-full flex flex-col">
        <div className="flex justify-between items-baseline border-b border-foreground/10 pb-6 mb-12">
            <SectionHeader className="mb-0">AURA Project</SectionHeader>
            <TechText>INDEX 05 / 07</TechText>
        </div>
        
        <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 flex flex-col justify-center">
            <TechText className="mb-4 block text-accent">TEAM LEADER · PRODUCT MANAGER · SOFTWARE DEV</TechText>
            <h3 className="font-serif text-5xl md:text-7xl mb-6">AURA</h3>
            <p className="font-serif text-2xl text-secondary/60 italic mb-8">安芮 · AI婴儿监测床垫</p>
            
            <p className="font-serif text-xl md:text-2xl leading-relaxed mb-8 max-w-2xl">
              A smart infant monitoring mattress powered by AI. 
              Designed to provide real-time health insights and peace of mind for parents through non-invasive sleep tracking and intelligent alerts.
            </p>
            
            <div className="flex flex-wrap gap-4">
              {["AI MONITORING", "HARDWARE", "INFANT SAFETY", "IoT"].map(tag => (
                <span key={tag} className="px-4 py-2 border border-foreground/20 rounded-full text-xs tracking-widest uppercase hover:bg-foreground hover:text-background transition-colors cursor-default">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          <div className="md:col-span-5 relative h-[50vh] grayscale hover:grayscale-0 transition-all duration-700">
            <Image 
              src="/images/aura.png" 
              alt="AURA Project" 
              fill 
              className="object-contain"
            />
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

function CommunitySection() {
  return (
    <section className="min-h-screen snap-start flex flex-col justify-center py-24">
       <FadeIn className="h-full flex flex-col">
         <div className="flex justify-between items-baseline border-b border-foreground/10 pb-6 mb-12">
            <SectionHeader className="mb-0">Community</SectionHeader>
            <TechText>INDEX 06 / 07</TechText>
         </div>
         
         <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div className="flex flex-col">
              <TechText className="mb-4 block text-accent">CAMPUS AMBASSADOR</TechText>
              <h3 className="font-serif text-4xl md:text-5xl mb-4">WaytoAGI</h3>
              <TechText className="block mb-6">2024 - PRESENT</TechText>
              <BodyText className="mb-8">
                Organized the 3rd AIPO Campus Venture Capital Event at Fuzhou University. 
                Managing the campus AI community focused on cutting-edge AI tools and fostering the next generation of AI enthusiasts.
              </BodyText>
              <div className="relative h-32 w-64 grayscale hover:grayscale-0 transition-all duration-500">
                 <Image src="/images/waytoagi.png" alt="WaytoAGI" fill className="object-contain object-left" />
              </div>
            </div>
            
            <div className="flex flex-col">
              <TechText className="mb-4 block text-accent">EDUCATION</TechText>
              <h3 className="font-serif text-4xl md:text-5xl mb-4">Fuzhou University</h3>
              <TechText className="block mb-6">211 · LOGISTICS MANAGEMENT</TechText>
              <BodyText className="mb-8">
                GPA: 3.5/4.0. Actively bridging the gap between logistics, AI, and product design.
                Focused on applying emerging technologies to real-world problems.
              </BodyText>
              <div className="flex flex-wrap gap-3">
                {["LOGISTICS MGMT", "AI ENTHUSIAST", "PRODUCT THINKING"].map(tag => (
                  <span key={tag} className="px-3 py-1 border border-foreground/10 rounded-full text-xs tracking-widest uppercase">
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
    <footer className="min-h-[50vh] snap-start py-24 border-t border-secondary/10 flex flex-col md:flex-row justify-between items-end">
      <FadeIn className="w-full flex flex-col md:flex-row justify-between items-end">
        <div>
          <HugeTitle className="text-[8vw]">codingis.click</HugeTitle>
          <BodyText className="mt-8 text-sm">
            © 2025 Haaaiawd. Designed with Radical Minimalism.
          </BodyText>
        </div>
        <div className="flex gap-8 mt-12 md:mt-0">
          <a href="https://github.com/Haaaiawd" target="_blank" rel="noopener noreferrer" className="font-sans text-lg hover:underline underline-offset-4">Github</a>
          <a href="https://www.xiaohongshu.com/user/profile/6365fe62000000001e00d8ed" target="_blank" rel="noopener noreferrer" className="font-sans text-lg hover:underline underline-offset-4">Xiaohongshu</a>
        </div>
      </FadeIn>
    </footer>
  );
}
