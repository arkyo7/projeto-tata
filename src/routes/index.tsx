import { createFileRoute } from "@tanstack/react-router";
import { MotionConfig } from "framer-motion";
import { Header } from "@/components/Header";

import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkinCareSection } from "@/components/sections/SkinCareSection";
import { LashCareSection } from "@/components/sections/LashCareSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { HoursSection } from "@/components/sections/HoursSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";

const title = "Tata Godoy | Extensão de Cílios e Limpeza de Pele na Bélgica";
const description =
  "Conheça os serviços de extensão de cílios e limpeza de pele oferecidos por Tata Godoy na Bélgica. Entre em contato pelo WhatsApp e consulte os horários disponíveis.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-sand">
        <Header />
        <main>
          <HeroSection />
          <ServicesSection />
          <AboutSection />
          <SkinCareSection />
          <LashCareSection />
          <GallerySection />
          <HoursSection />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}
