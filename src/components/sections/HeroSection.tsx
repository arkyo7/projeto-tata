import { motion } from "framer-motion";
import { Sparkles, Eye, Droplets } from "lucide-react";
import { heroImage, heroText } from "@/lib/motion";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { whatsappMessages } from "@/lib/whatsappMessages";
import { ExternalLink, buttonStyles } from "../ExternalLink";

const highlights = [
  { icon: Sparkles, label: "Atendimento personalizado" },
  { icon: Eye, label: "Extensão de cílios" },
  { icon: Droplets, label: "Limpeza de pele" },
];

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-sand pt-28 lg:pt-0"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 pb-16 sm:px-8 lg:min-h-[90vh] lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:pb-24 lg:pt-32">
        <div>
          <motion.div
            custom={0}
            variants={heroText}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-3"
          >
            <span className="h-px w-8 bg-gold" aria-hidden="true" />
            <span className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-terracotta">
              Extensão de cílios e cuidados com a pele
            </span>
          </motion.div>

          <motion.h1
            custom={1}
            variants={heroText}
            initial="hidden"
            animate="visible"
            className="mt-6 text-balance text-[2.35rem] leading-[1.08] text-espresso sm:text-[3.2rem] lg:text-[3.9rem]"
          >
            Realce sua beleza com cuidado, delicadeza e atenção aos detalhes
          </motion.h1>

          <motion.p
            custom={2}
            variants={heroText}
            initial="hidden"
            animate="visible"
            className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg"
          >
            Procedimentos pensados para valorizar o seu olhar, cuidar da sua
            pele e proporcionar uma experiência acolhedora.
          </motion.p>

          <motion.div
            custom={3}
            variants={heroText}
            initial="hidden"
            animate="visible"
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
          >
            <ExternalLink
              href={createWhatsAppLink(whatsappMessages.lashes)}
              className={buttonStyles.primary}
            >
              Quero fazer extensão de cílios
            </ExternalLink>
            <ExternalLink
              href={createWhatsAppLink(whatsappMessages.skincare)}
              className={buttonStyles.outline}
            >
              Quero fazer uma limpeza de pele
            </ExternalLink>
          </motion.div>

          <motion.ul
            custom={4}
            variants={heroText}
            initial="hidden"
            animate="visible"
            className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-nude pt-7"
          >
            {highlights.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-2 text-sm text-ink-soft"
              >
                <Icon size={18} strokeWidth={1.25} className="text-gold" />
                {label}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          variants={heroImage}
          initial="hidden"
          animate="visible"
          className="relative"
        >
          <div className="absolute -left-4 -top-4 hidden h-32 w-32 rounded-tl-[2rem] border-l border-t border-gold/60 lg:block" />
          <div className="overflow-hidden rounded-[1.75rem] bg-nude/60 lg:rounded-[2.25rem]">
            <img
              src="/images/extensao-de-cilios-tata.webp"
              alt="Extensão de cílios realizada por Tata Godoy"
              width={1000}
              height={1250}
              sizes="(max-width: 1024px) 100vw, 45vw"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="aspect-[4/5] h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 hidden h-32 w-32 rounded-br-[2rem] border-b border-r border-gold/60 lg:block" />
        </motion.div>
      </div>
    </section>
  );
}
