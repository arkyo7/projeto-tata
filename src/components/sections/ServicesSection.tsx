import { motion } from "framer-motion";
import { services } from "@/config/services";
import { staggerContainer, viewportOnce } from "@/lib/motion";
import { SectionHeading } from "../SectionHeading";
import { ServiceCard } from "./ServiceCard";

export function ServicesSection() {
  return (
    <section id="servicos" className="bg-blush/60 py-20 lg:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <SectionHeading
          tag="Serviços"
          title="Cuidados para valorizar a sua beleza"
          intro="Conheça os procedimentos oferecidos por Tata Godoy e escolha o cuidado ideal para você."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid gap-7 md:grid-cols-2 lg:gap-10"
        >
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
