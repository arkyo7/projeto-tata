import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { lashCareItems } from "@/config/lashCareItems";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { whatsappMessages } from "@/lib/whatsappMessages";
import { ExternalLink, buttonStyles } from "../ExternalLink";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";

export function LashCareSection() {
  return (
    <section id="cuidados" className="bg-sand py-20 lg:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <SectionHeading
          tag="Cuidados importantes"
          title="Como cuidar da sua extensão de cílios"
          intro="Alguns cuidados simples ajudam a conservar o acabamento e manter os fios bem cuidados por mais tempo."
        />

        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid gap-4 sm:grid-cols-2 sm:gap-5"
        >
          {lashCareItems.map((item) => (
            <motion.li
              key={item}
              variants={staggerItem}
              className="flex items-start gap-4 rounded-[1.25rem] border border-nude/70 bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-34px_oklch(0.4474_0.054_37.26)]"
            >
              <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gold/60 text-gold">
                <Check size={14} strokeWidth={1.5} />
              </span>
              <span className="text-[0.95rem] leading-relaxed text-ink-soft">
                {item}
              </span>
            </motion.li>
          ))}
        </motion.ul>

        <Reveal className="mt-12 text-center">
          <ExternalLink
            href={createWhatsAppLink(whatsappMessages.careDoubt)}
            className={buttonStyles.primary}
          >
            Tirar uma dúvida pelo WhatsApp
          </ExternalLink>
        </Reveal>
      </div>
    </section>
  );
}
