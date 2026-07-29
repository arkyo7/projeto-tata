import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  tag: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
}

export function SectionHeading({
  tag,
  title,
  intro,
  align = "center",
  tone = "dark",
  className,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        centered && "mx-auto text-center",
        className,
      )}
    >
      <div
        className={cn(
          "flex items-center gap-3",
          centered && "justify-center",
        )}
      >
        <span className="h-px w-8 bg-gold" aria-hidden="true" />
        <span
          className={cn(
            "text-[0.7rem] font-medium uppercase tracking-[0.22em]",
            tone === "dark" ? "text-terracotta" : "text-nude",
          )}
        >
          {tag}
        </span>
        {centered && <span className="h-px w-8 bg-gold" aria-hidden="true" />}
      </div>

      <h2
        className={cn(
          "mt-5 text-balance text-[2rem] leading-[1.15] sm:text-[2.6rem] lg:text-[3rem]",
          tone === "dark" ? "text-espresso" : "text-pure-white",
        )}
      >
        {title}
      </h2>

      {intro && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed",
            tone === "dark" ? "text-ink-soft" : "text-nude",
          )}
        >
          {intro}
        </p>
      )}
    </Reveal>
  );
}
