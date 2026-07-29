import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import { navigationItems } from "@/config/navigationItems";
import { siteConfig } from "@/config/siteConfig";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { whatsappMessages } from "@/lib/whatsappMessages";
import { cn } from "@/lib/utils";
import { ExternalLink } from "./ExternalLink";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-espresso/85 shadow-[0_10px_30px_-24px_oklch(0.2486_0.0198_34.43)] backdrop-blur-md"
            : "bg-espresso/45 backdrop-blur-[2px]",
        )}
      >
        <div
          className={cn(
            "mx-auto flex w-full max-w-7xl items-center justify-between px-5 transition-all duration-500 sm:px-8",
            scrolled ? "h-16" : "h-20 lg:h-24",
          )}
        >
          <a
            href="#inicio"
            className="flex items-center gap-3"
            aria-label={`${siteConfig.name} — início`}
          >
            <img
              src={siteConfig.logo.white}
              alt={siteConfig.logo.alt}
              width={160}
              height={48}
              decoding="async"
              className={cn(
                "w-auto transition-all duration-500",
                scrolled ? "h-8" : "h-10 lg:h-12",
              )}
            />
            <span className="sr-only">{siteConfig.name}</span>
          </a>

          <nav
            aria-label="Navegação principal"
            className="hidden items-center gap-7 lg:flex"
          >
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative text-sm text-pure-white/90 transition-colors duration-300 hover:text-gold"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ExternalLink
              href={createWhatsAppLink(whatsappMessages.general)}
              className="hidden bg-terracotta text-pure-white hover:bg-terracotta-hover lg:inline-flex"
            >
              Agendar atendimento
            </ExternalLink>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Abrir menu"
              aria-expanded={menuOpen}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full text-pure-white transition-colors duration-300 hover:text-gold lg:hidden"
            >
              <Menu strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </motion.header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
