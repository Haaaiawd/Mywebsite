import { HugeTitle, TechText } from "@/components/Typography";
import FadeIn from "@/components/FadeIn";
import Navbar from "@/components/Navbar";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <FadeIn className="flex-1 flex flex-col items-center justify-center p-6 md:p-12 text-center">
        <HugeTitle className="text-[15vw] md:text-[10vw] mb-8">BLOG</HugeTitle>
        <TechText className="text-sm md:text-lg mb-4">UNDER CONSTRUCTION</TechText>
        <p className="font-serif text-xl md:text-3xl italic text-secondary/60">
          Thoughts and stories are being curated.<br />
          Coming soon.
        </p>
      </FadeIn>
    </main>
  );
}
