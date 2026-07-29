import { imageReveal } from "@/lib/motion";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { whatsappMessages } from "@/lib/whatsappMessages";
import { BrandImage } from "../BrandImage";
import { ExternalLink, buttonStyles } from "../ExternalLink";
import { Reveal } from "../Reveal";

export function SkinCareSection() {
  return (
    <section className="bg-blush py-20 lg:py-28">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal variants={imageReveal} className="relative">
          <div className="group">
            <BrandImage
              src="/images/tata-realizando-limpeza-de-pele.webp"
              alt="Tata Godoy realizando uma limpeza de pele"
              width={1000}
              height={1250}
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="aspect-[4/5] w-full rounded-[1.75rem] lg:rounded-[2rem]"
            />
          </div>

          <div className="group mt-5 lg:absolute lg:-bottom-12 lg:-right-10 lg:mt-0 lg:w-[46%]">
            <BrandImage
              src="/images/limpeza-de-pele-tata.webp"
              alt="Detalhe do cuidado com a pele durante o atendimento"
              width={640}
              height={640}
              sizes="(max-width: 1024px) 100vw, 22vw"
              className="aspect-square w-full rounded-[1.5rem] border-4 border-blush lg:rounded-[1.75rem]"
            />
          </div>
        </Reveal>

        <div className="lg:pl-4">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-gold" aria-hidden="true" />
              <span className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-terracotta">
                Cuidado com a pele
              </span>
            </div>
            <h2 className="mt-5 text-balance text-[2rem] leading-[1.15] text-espresso sm:text-[2.6rem]">
              A pele acumula impurezas todos os dias
            </h2>
            <p className="mt-5 text-[0.98rem] leading-relaxed text-ink-soft">
              A limpeza de pele é um momento dedicado ao cuidado, à remoção de
              impurezas e à renovação da aparência da pele.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-8 rounded-[1.5rem] border border-gold/40 bg-sand/80 p-7">
              <p className="font-display text-2xl leading-snug text-espresso">
                Quando foi a sua última limpeza de pele?
              </p>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft">
                Se você não se lembra, talvez este seja o momento de reservar um
                cuidado especial para você.
              </p>
            </div>

            <ExternalLink
              href={createWhatsAppLink(whatsappMessages.skincare)}
              className={`mt-8 ${buttonStyles.primary}`}
            >
              Quero cuidar da minha pele
            </ExternalLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
