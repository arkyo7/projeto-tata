import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/config/services";
import { staggerItem } from "@/lib/motion";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { BrandImage } from "../BrandImage";
import { ExternalLink, buttonStyles } from "../ExternalLink";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <motion.article
      variants={staggerItem}
      className="group flex flex-col overflow-hidden rounded-[1.75rem] border border-nude/70 bg-card shadow-[0_18px_40px_-34px_oklch(0.4474_0.054_37.26)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_26px_50px_-30px_oklch(0.4474_0.054_37.26)]"
    >
      <BrandImage
        src={service.image}
        alt={service.imageAlt}
        width={service.imageWidth}
        height={service.imageHeight}
        objectPosition={service.imagePosition}
        hoverScale="lg:group-hover:scale-[1.04]"
        sizes="(max-width: 1024px) 100vw, 50vw"
        className={`${service.imageAspect} w-full`}
      />

      <div className="flex flex-1 flex-col p-7 sm:p-8">
        <h3 className="text-[1.75rem] leading-tight text-espresso">
          {service.title}
        </h3>
        <span className="mt-4 block h-px w-12 bg-gold" aria-hidden="true" />
        <p className="mt-4 text-[0.95rem] leading-relaxed text-ink-soft">
          {service.description}
        </p>
        <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft">
          {service.detail}
        </p>

        <ExternalLink
          href={createWhatsAppLink(service.message)}
          className={`mt-7 self-start ${buttonStyles.primary}`}
        >
          {service.ctaLabel}
          <ArrowRight
            size={16}
            strokeWidth={1.5}
            className="transition-transform duration-300 group-hover:translate-x-0.5"
          />
        </ExternalLink>
      </div>
    </motion.article>
  );
}
