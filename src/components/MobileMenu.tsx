import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { navigationItems } from "@/config/navigationItems";
import { siteConfig } from "@/config/siteConfig";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { whatsappMessages } from "@/lib/whatsappMessages";
import { ExternalLink } from "./ExternalLink";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="mobile-menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[60] lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navegação"
        >
          <div
            className="absolute inset-0 bg-espresso/70 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-y-0 right-0 flex w-[85%] max-w-sm flex-col bg-espresso px-6 pb-10 pt-6"
          >
            <div className="flex items-center justify-between">
              <img
                src={siteConfig.logo.white}
                alt={siteConfig.logo.alt}
                width={120}
                height={36}
                decoding="async"
                className="h-8 w-auto"
              />
              <button
                type="button"
                onClick={onClose}
                aria-label="Fechar menu"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full text-pure-white transition-colors hover:text-gold"
              >
                <X strokeWidth={1.5} />
              </button>
            </div>

            <nav className="mt-10 flex flex-col" aria-label="Navegação mobile">
              {navigationItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className="border-b border-pure-white/10 py-4 font-display text-2xl text-pure-white transition-colors hover:text-gold"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <ExternalLink
              href={createWhatsAppLink(whatsappMessages.general)}
              className="mt-8 w-full bg-terracotta text-pure-white hover:bg-terracotta-hover"
            >
              Agendar atendimento
            </ExternalLink>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
