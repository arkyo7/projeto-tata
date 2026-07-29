import { Instagram, MessageCircle } from "lucide-react";
import { navigationItems } from "@/config/navigationItems";
import { siteConfig } from "@/config/siteConfig";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { whatsappMessages } from "@/lib/whatsappMessages";

export function Footer() {
  return (
    <footer className="border-t border-pure-white/10 bg-espresso pb-10 pt-14">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <img
              src={siteConfig.logo.white}
              alt={siteConfig.logo.alt}
              width={160}
              height={48}
              loading="lazy"
              decoding="async"
              className="h-10 w-auto"
            />
            <ul className="mt-6 space-y-1.5 text-sm text-nude">
              <li>Extensão de cílios</li>
              <li>Limpeza de pele</li>
              <li>{siteConfig.region}</li>
            </ul>
          </div>

          <nav aria-label="Navegação do rodapé">
            <h2 className="font-display text-xl text-pure-white">Navegação</h2>
            <ul className="mt-5 grid grid-cols-2 gap-y-2 text-sm">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="inline-block py-1 text-nude transition-colors hover:text-gold"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-display text-xl text-pure-white">Contato</h2>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href={createWhatsAppLink(whatsappMessages.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 text-nude transition-colors hover:text-gold"
                >
                  <MessageCircle size={16} strokeWidth={1.5} />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 text-nude transition-colors hover:text-gold"
                >
                  <Instagram size={16} strokeWidth={1.5} />
                  {siteConfig.instagramHandle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-pure-white/10 pt-6">
          <p className="text-center text-xs text-nude/80">
            © 2026 {siteConfig.name}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
