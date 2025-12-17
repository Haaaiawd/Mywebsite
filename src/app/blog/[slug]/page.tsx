import { getSinglePost, getPosts } from "@/lib/ghost";
import Navbar from "@/components/Navbar";
import FadeIn from "@/components/FadeIn";
import Image from "next/image";
import Link from "next/link";
import GhostGalleryScript from "@/components/GhostGalleryScript";
import { notFound } from "next/navigation";
import { Post } from "@/types/ghost";

// Revalidate every 10 minutes
export const revalidate = 600;

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post: Post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let post;
  try {
    post = await getSinglePost(slug);
  } catch (error) {
    console.error(`Failed to fetch post parameters: ${slug}`, error);
    return notFound();
  }

  if (!post) {
      return notFound();
  }

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      
      {/* Sticky Back Button */}
      <Link 
        href="/blog" 
        className="fixed top-24 left-6 md:left-12 z-40 p-3 rounded-full bg-background/80 backdrop-blur-sm border border-secondary/10 hover:bg-foreground hover:text-background transition-all duration-300 group"
        aria-label="Back to Journal"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 group-hover:-translate-x-1 transition-transform">
          <path d="M19 12H5"/>
          <path d="M12 19l-7-7 7-7"/>
        </svg>
      </Link>

      {/* Hero Section */}
      <div className="relative pt-32 pb-12 px-6 md:px-12 max-w-4xl mx-auto w-full">
        <FadeIn>
            <div className="mb-8">
                 <div className="flex items-center gap-3 text-xs md:text-sm uppercase tracking-widest text-accent mb-4 font-medium">
                    {post.published_at && (
                        <time dateTime={post.published_at}>
                            {new Date(post.published_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                        </time>
                    )}
                    {post.tags?.[0] && (
                        <>
                        <span className="w-px h-3 bg-accent/40" />
                        <span>{post.tags[0].name}</span>
                        </>
                    )}
                </div>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight text-foreground">
                    {post.title}
                </h1>
            </div>
        </FadeIn>
      </div>

      {/* Feature Image */}
      {post.feature_image && (
        <FadeIn delay={0.2} className="w-full max-w-6xl mx-auto px-4 sm:px-6 mb-16">
            <div className="relative aspect-video w-full overflow-hidden rounded-sm">
                 <Image
                    src={post.feature_image}
                    alt={post.title || "Cover"}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1200px) 100vw, 1200px"
                    priority
                />
            </div>
        </FadeIn>
      )}

      {/* Content */}
      <article className="max-w-3xl mx-auto px-6 pb-32 w-full">
         <FadeIn delay={0.3}>
            <div 
                className="prose prose-lg max-w-none 
                    prose-headings:font-serif prose-headings:font-medium prose-headings:text-foreground
                    prose-p:font-light prose-p:leading-relaxed prose-p:text-secondary/80
                    prose-strong:text-foreground prose-strong:font-semibold
                    prose-a:text-foreground prose-a:decoration-1 prose-a:underline-offset-4 hover:prose-a:text-accent hover:prose-a:decoration-accent
                    prose-img:rounded-sm prose-img:grayscale-20 hover:prose-img:grayscale-0 prose-img:transition-all prose-img:duration-700
                    prose-blockquote:border-l-accent prose-blockquote:text-secondary prose-blockquote:font-serif prose-blockquote:italic"
                dangerouslySetInnerHTML={{ __html: post.html || "" }}
            />
         </FadeIn>
      </article>
      <GhostGalleryScript />
    </main>
  );
}
