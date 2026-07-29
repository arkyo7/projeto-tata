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
          <div className="group lg:w-[88%]">
            <BrandImage
              src="/images/tata-realizando-limpeza-de-pele.webp"
              alt="Tata Godoy realizando procedimento de limpeza de pele"
              width={1086}
              height={1448}
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="aspect-[4/5] w-full rounded-[1.75rem] shadow-[0_24px_50px_-38px_oklch(0.4474_0.054_37.26)] lg:rounded-[2rem]"
            />
          </div>

          <div className="group mt-5 lg:absolute lg:-bottom-10 lg:right-0 lg:mt-0 lg:w-[38%]">
            <BrandImage
              src="/images/limpeza-de-pele-tata.webp"
              alt="Cliente durante procedimento de limpeza de pele"
              width={1000}
              height={1502}
              sizes="(max-width: 1024px) 100vw, 20vw"
              className="aspect-[3/4] w-full rounded-[1.5rem] border-2 border-gold/70 lg:rounded-[1.75rem]"
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
