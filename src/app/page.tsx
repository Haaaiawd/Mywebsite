
import { getLatestPosts } from "@/lib/ghost";
import HeroSection from "@/components/sections/HeroSection";
import { SectionHeader, BodyText, TechText } from "@/components/Typography";
import FadeIn from "@/components/FadeIn";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaReact, FaEnvelope, FaMapMarkerAlt, FaDatabase, FaGlobe } from "react-icons/fa";
import { SiXiaohongshu, SiNextdotjs, SiTypescript, SiTailwindcss, SiFramer, SiPuppeteer, SiVercel, SiAnthropic } from "react-icons/si";
import { VscCopilot } from "react-icons/vsc";
import { BsCursorFill } from "react-icons/bs";

export const revalidate = 600;

export default async function Home() {
  const posts = await getLatestPosts(3);

  return (
    <main className="min-h-screen px-6 md:px-12 py-24 selection:bg-accent selection:text-white">
      <HeroSection />
      <BioSection />
      <SkillsSection />
      <ProjectsSection />
      <LatestJournalSection posts={posts} />
      <AuraSection />
      <CommunitySection />
      <FooterSection />
    </main>
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
          <div className="md:col-span-12 lg:col-span-5 flex flex-col justify-between h-full space-y-6 md:space-y-12">
            <div>
              <TechText className="block mb-4 text-[10px] md:text-xs tracking-[0.2em] text-accent">e/acc · PRODUCT MANAGER · INDIE DEVELOPER</TechText>
              <div className="relative">
              <p className="font-serif text-2xl md:text-4xl leading-tight text-foreground mb-4 md:mb-8">
                AI 编程工具重度用户.<br/>
                WaytoAGI 校园大使.<br/>
                211在读.
              </p>
              </div>
              <BodyText className="text-sm md:text-lg text-secondary/80">
                Passionate about bridging the gap between design and code through AI. 
                Focusing on &quot;Typography as UI&quot; and creating digital experiences that feel physical.
              </BodyText>
            </div>

            <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8">
               <div className="space-y-1 md:space-y-2">
                  <div className="flex items-center gap-2">
                    <FaEnvelope className="text-secondary/60" />
                    <TechText className="block text-accent">CONTACT</TechText>
                  </div>
                  <a href="mailto:haayy@foxmail.com" className="font-sans text-base md:text-lg hover:underline decoration-1 underline-offset-4 break-all">haayy@foxmail.com</a>
               </div>
               <div className="space-y-1 md:space-y-2">
                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-secondary/60" />
                    <TechText className="block text-accent">LOCATION</TechText>
                  </div>
                  <p className="font-sans text-base md:text-lg">Fuzhou University</p>
               </div>
            </div>
          </div>

          <div className="md:col-span-12 lg:col-span-7 flex flex-col items-center justify-center h-full">
             <div className="relative w-full h-[50vh] md:h-[70vh] grayscale hover:grayscale-0 transition-all duration-700 ease-out">
              <Image 
                src="/images/avater.png" 
                alt="Avatar" 
                fill 
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

import { Post } from "@/types/ghost";

function LatestJournalSection({ posts }: { posts: Post[] }) {
    if (!posts || posts.length === 0) return null;

    return (
        <section className="min-h-screen snap-start flex flex-col justify-center py-8 md:py-24">
            <FadeIn className="h-full flex flex-col">
                <div className="flex justify-between items-baseline border-b border-foreground/10 pb-4 md:pb-6 mb-8 md:mb-12">
                    <SectionHeader className="mb-0">Journal</SectionHeader>
                    <Link href="/blog" className="text-xs md:text-sm uppercase tracking-widest text-secondary hover:text-accent transition-colors">
                        View All Posts ↗
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
                    {posts.map((post) => (
                         <Link key={post.id} href={`/blog/${post.slug}`} className="group block h-full">
                            <article className="flex flex-col h-full">
                                <div className="relative aspect-4/3 w-full overflow-hidden bg-secondary/5 mb-6">
                                    {post.feature_image ? (
                                        <Image
                                            src={post.feature_image}
                                            alt={post.title || "Blog post"}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-secondary/10 text-secondary/30">
                                            <span className="font-serif italic">No Image</span>
                                        </div>
                                    )}
                                     <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                                </div>

                                <div className="flex flex-col flex-1">
                                    <div className="flex items-center gap-3 text-[10px] md:text-xs uppercase tracking-widest text-accent mb-3 font-medium">
                                        {post.published_at && (
                                            <time dateTime={post.published_at}>
                                                {new Date(post.published_at).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })}
                                            </time>
                                        )}
                                         {post.tags?.[0] && (
                                            <>
                                                <span className="w-px h-3 bg-accent/40" />
                                                <span>{post.tags[0].name}</span>
                                            </>
                                        )}
                                    </div>
                                    
                                    <h3 className="text-xl md:text-2xl font-serif font-medium leading-tight mb-3 group-hover:text-secondary transition-colors duration-300">
                                        {post.title}
                                    </h3>
                                    
                                    <p className="text-secondary/70 line-clamp-3 text-sm leading-relaxed font-light">
                                        {post.excerpt}
                                    </p>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>
            </FadeIn>
        </section>
    );
}

function SkillsSection() {
  const skills = [
    { 
      category: "MCP Servers", 
      items: [
        { name: "sequential-thinking", icon: <FaDatabase /> }, 
        { name: "puppeteer", icon: <SiPuppeteer /> }, 
        { name: "fetcher", icon: <FaGlobe /> }, 
        { name: "github", icon: <FaGithub /> }
      ] 
    },
    { 
      category: "AI Stack", 
      items: [
        { name: "Cursor", icon: <BsCursorFill /> }, 
        { name: "Claude Code", icon: <SiAnthropic /> }, 
        { name: "v0.dev", icon: <SiVercel /> }, // Placeholder for v0
        { name: "Github Copilot", icon: <VscCopilot /> }
      ] 
    },
    { 
      category: "Core Tech", 
      items: [
        { name: "Next.js", icon: <SiNextdotjs /> }, 
        { name: "TypeScript", icon: <SiTypescript /> }, 
        { name: "Tailwind CSS", icon: <SiTailwindcss /> }, 
        { name: "Framer Motion", icon: <SiFramer /> }, 
        { name: "React Native", icon: <FaReact /> }
      ] 
    }
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
                   <span className="font-mono text-[10px] md:text-xs border border-(--accent-light) text-accent rounded-full w-5 h-5 md:w-6 md:h-6 flex items-center justify-center">{index + 1}</span>
                   <TechText className="text-accent tracking-widest">{skillGroup.category}</TechText>
                </div>
                <ul className="grid grid-cols-2 gap-4">
                  {skillGroup.items.map((item) => (
                    <li key={item.name} className="flex items-center gap-2 font-serif text-lg md:text-2xl text-foreground/80 hover:text-foreground hover:translate-x-2 transition-transform duration-300 cursor-default">
                      <span className="text-xl md:text-2xl opacity-60">{item.icon}</span>
                      {item.name}
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
          <div className="md:col-span-12 lg:col-span-7 flex flex-col justify-center">
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
          
          <div className="md:col-span-12 lg:col-span-5 relative h-[35vh] md:h-[50vh] grayscale hover:grayscale-0 transition-all duration-700">
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
              <FaGithub className="text-4xl md:text-6xl group-hover:text-background/70 group-active:text-background/70 transition-colors" />
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
              <SiXiaohongshu className="text-4xl md:text-6xl group-hover:text-white/70 group-active:text-white/70 transition-colors" />
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
