import { getPosts } from "@/lib/ghost";
import { HugeTitle, TechText } from "@/components/Typography";
import FadeIn from "@/components/FadeIn";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";

// Revalidate every 10 minutes
export const revalidate = 600;

import { Post } from "@/types/ghost";

export default async function BlogPage() {
  let posts: Post[] = [];
  try {
    posts = await getPosts();
  } catch (error) {
    console.error("Failed to fetch posts:", error);
  }

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <div className="pt-24 pb-8 px-4 md:pt-32 md:pb-12 md:px-12 max-w-7xl mx-auto w-full">
         <FadeIn>
            <div className="mb-12 md:mb-24 border-b border-secondary/10 pb-8 md:pb-12">
                <HugeTitle className="mb-4 md:mb-6 text-5xl md:text-8xl">JOURNAL</HugeTitle>
                <TechText>THOUGHTS, STORIES AND IDEAS</TechText>
            </div>
         </FadeIn>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 md:gap-y-20">
            {posts.map((post, index) => (
               <FadeIn key={post.id} delay={index * 0.1} className="h-full">
                  <Link href={`/blog/${post.slug}`} className="group block h-full">
                     <article className="flex flex-col h-full">
                        {/* Image Container */}
                        {post.feature_image && (
                           <div className="relative aspect-3/2 overflow-hidden bg-secondary/5 mb-6">
                              <Image
                                src={post.feature_image}
                                alt={post.title || "Blog post"}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                              />
                               <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                           </div>
                        )}

                        {/* Content */}
                        <div className="flex flex-col flex-1">
                           <div className="flex items-center gap-3 text-xs md:text-sm uppercase tracking-widest text-accent mb-3 font-medium">
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
                           
                           <h2 className="text-2xl md:text-3xl font-serif font-medium leading-tight mb-4 group-hover:text-secondary transition-colors duration-300">
                              {post.title}
                           </h2>
                           
                           <p className="text-secondary/70 line-clamp-3 leading-relaxed mb-6 font-light">
                              {post.excerpt}
                           </p>

                           <div className="mt-auto flex items-center text-sm font-medium tracking-wider uppercase group/btn">
                               <span className="border-b border-secondary/30 pb-0.5 group-hover/btn:border-secondary transition-all duration-300">Read Article</span>
                           </div>
                        </div>
                     </article>
                  </Link>
               </FadeIn>
            ))}
         </div>
         
         {posts.length === 0 && (
             <FadeIn>
                 <div className="text-center py-20 text-secondary/50 italic">
                     No posts found. Connecting to knowledge base...
                 </div>
             </FadeIn>
         )}
      </div>
    </main>
  )
}
