import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { businessHours } from "@/config/businessHours";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { whatsappMessages } from "@/lib/whatsappMessages";
import { ExternalLink, buttonStyles } from "../ExternalLink";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";

export function HoursSection() {
  const [today, setToday] = useState<number | null>(null);

  useEffect(() => {
    setToday(new Date().getDay());
  }, []);

  return (
    <section id="horarios" className="bg-sand py-20 lg:py-28">
      <div className="mx-auto w-full max-w-3xl px-5 sm:px-8">
        <SectionHeading
          tag="Atendimento"
          title="Horários disponíveis"
          intro="Entre em contato pelo WhatsApp para consultar a disponibilidade e combinar o seu atendimento."
        />

        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 overflow-hidden rounded-[1.5rem] border border-nude/70 bg-card"
        >
          {businessHours.map((entry) => {
            const isToday = today === entry.dayIndex;
            return (
              <motion.li
                key={entry.day}
                variants={staggerItem}
                className={`flex items-center justify-between gap-4 border-b border-nude/60 px-6 py-4 last:border-b-0 ${
                  isToday ? "bg-blush/70" : ""
                }`}
              >
                <span className="flex items-center gap-2 text-[0.95rem] text-espresso">
                  {isToday && (
                    <span
                      className="h-1.5 w-1.5 rounded-full bg-gold"
                      aria-hidden="true"
                    />
                  )}
                  {entry.day}
                  {isToday && <span className="sr-only">(hoje)</span>}
                </span>
                <span
                  className={`text-[0.95rem] ${
                    entry.closed ? "text-ink-soft/70" : "text-ink-soft"
                  }`}
                >
                  {entry.hours}
                </span>
              </motion.li>
            );
          })}
        </motion.ul>

        <Reveal className="mt-8 text-center">
          <p className="text-sm text-ink-soft">Atendimentos na Bélgica.</p>
          <ExternalLink
            href={createWhatsAppLink(whatsappMessages.schedule)}
            className={`mt-6 ${buttonStyles.primary}`}
          >
            Consultar um horário
          </ExternalLink>
        </Reveal>
      </div>
    </section>
  );
}
