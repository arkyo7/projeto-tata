import { cn } from "@/lib/utils";

interface WhatsAppLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  "aria-label"?: string;
}

/** Anchor that always opens WhatsApp safely in a new tab. */
export function ExternalLink({
  href,
  children,
  className,
  ...rest
}: WhatsAppLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300",
        className,
      )}
      {...rest}
    >
      {children}
    </a>
  );
}

export const buttonStyles = {
  primary:
    "bg-terracotta text-pure-white shadow-[0_10px_30px_-16px_oklch(0.4474_0.054_37.26)] hover:-translate-y-0.5 hover:bg-terracotta-hover",
  outline:
    "border border-cocoa/30 text-espresso hover:-translate-y-0.5 hover:border-terracotta hover:text-terracotta",
  onDark:
    "bg-pure-white text-espresso hover:-translate-y-0.5 hover:bg-nude",
  onDarkOutline:
    "border border-pure-white/40 text-pure-white hover:-translate-y-0.5 hover:border-gold hover:text-gold",
} as const;
