import { siteConfig } from "@/config/siteConfig";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { whatsappMessages } from "@/lib/whatsappMessages";
import { ExternalLink, buttonStyles } from "../ExternalLink";
import { Reveal } from "../Reveal";

export function FinalCTA() {
  return (
    <section id="contato" className="bg-espresso py-20 lg:py-28">
      <div className="mx-auto w-full max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <img
            src={siteConfig.logo.white}
            alt={siteConfig.logo.alt}
            width={180}
            height={54}
            loading="lazy"
            decoding="async"
            className="mx-auto h-12 w-auto"
          />
          <span className="mx-auto mt-8 block h-px w-16 bg-gold" aria-hidden="true" />
          <h2 className="mt-8 text-balance text-[2rem] leading-[1.15] text-pure-white sm:text-[2.6rem]">
            Seu próximo momento de cuidado começa aqui
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[0.98rem] leading-relaxed text-nude">
            Escolha o procedimento desejado e fale diretamente com a Tata para
            consultar os horários disponíveis.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <ExternalLink
              href={createWhatsAppLink(whatsappMessages.lashes)}
              className={buttonStyles.onDark}
            >
              Agendar extensão de cílios
            </ExternalLink>
            <ExternalLink
              href={createWhatsAppLink(whatsappMessages.skincare)}
              className={buttonStyles.onDarkOutline}
            >
              Agendar limpeza de pele
            </ExternalLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
