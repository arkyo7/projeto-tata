import { Instagram } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { whatsappMessages } from "@/lib/whatsappMessages";
import { imageReveal } from "@/lib/motion";
import { BrandImage } from "../BrandImage";
import { ExternalLink, buttonStyles } from "../ExternalLink";
import { Reveal } from "../Reveal";

export function AboutSection() {
  return (
    <section id="sobre" className="bg-sand py-20 lg:py-28">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <Reveal variants={imageReveal} className="group relative">
          <span
            className="absolute -left-3 -top-3 hidden h-24 w-24 rounded-tl-[1.75rem] border-l border-t border-gold/70 lg:block"
            aria-hidden="true"
          />
          <BrandImage
            src="/images/tata-godoy-sobre.webp"
            alt="Tata Godoy, profissional de extensão de cílios e limpeza de pele"
            width={960}
            height={1200}
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="aspect-[4/5] w-full rounded-[1.75rem] lg:rounded-[2rem]"
          />
        </Reveal>

        <div>
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-gold" aria-hidden="true" />
              <span className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-terracotta">
                Sobre a profissional
              </span>
            </div>
            <h2 className="mt-5 text-balance text-[2rem] leading-[1.15] text-espresso sm:text-[2.6rem]">
              Um sonho construído com fé, dedicação e muito amor
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-6 space-y-4 text-[0.98rem] leading-relaxed text-ink-soft">
              <p>
                O que começou com medo se transformou em uma trajetória
                construída com coragem, fé e dedicação. Tata Godoy desenvolve
                seu trabalho na área da beleza com carinho e gratidão,
                valorizando cada cliente que escolhe confiar em seus cuidados.
              </p>
              <p>
                Seu trabalho é voltado à extensão de cílios e à limpeza de pele,
                buscando proporcionar uma experiência acolhedora, delicada e
                atenta aos detalhes.
              </p>
              <p>
                Cada atendimento faz parte de uma história que continua
                crescendo, construída com amor pelo trabalho e gratidão por cada
                nova etapa.
              </p>
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ExternalLink
                href={createWhatsAppLink(whatsappMessages.about)}
                className={buttonStyles.primary}
              >
                Falar com a Tata
              </ExternalLink>
              <ExternalLink
                href={siteConfig.instagramUrl}
                className={buttonStyles.outline}
                aria-label={`Ver Instagram ${siteConfig.instagramHandle}`}
              >
                <Instagram size={16} strokeWidth={1.5} />
                Ver Instagram
              </ExternalLink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
