import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface TypographyProps {
  children: ReactNode;
  className?: string;
}

export function HugeTitle({ children, className }: TypographyProps) {
  return (
    <h1
      className={cn(
        "font-serif text-[12vw] leading-[0.9] tracking-tighter text-foreground mix-blend-difference",
        className
      )}
    >
      {children}
    </h1>
  );
}

export function SectionHeader({ children, className }: TypographyProps) {
  return (
    <h2
      className={cn(
        "font-serif text-5xl md:text-7xl mb-12 text-foreground/90",
        className
      )}
    >
      {children}
    </h2>
  );
}

export function BodyText({ children, className }: TypographyProps) {
  return (
    <p
      className={cn(
        "font-sans text-lg md:text-xl leading-relaxed text-secondary max-w-2xl",
        className
      )}
    >
      {children}
    </p>
  );
}

export function TechText({ children, className }: TypographyProps) {
  return (
    <span
      className={cn(
        "font-sans text-xs uppercase tracking-[0.2em] text-secondary/60",
        className
      )}
    >
      {children}
    </span>
  );
}
