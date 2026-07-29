import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { galleryImages } from "@/config/galleryImages";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";
import { SectionHeading } from "../SectionHeading";

export function GallerySection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const active = activeIndex !== null ? galleryImages[activeIndex] : null;

  useEffect(() => {
    if (!active) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveIndex(null);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  return (
    <section className="bg-blush/60 py-20 lg:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <SectionHeading
          tag="Galeria"
          title="Beleza e cuidado em cada detalhe"
          intro="Conheça um pouco do trabalho, do atendimento e da experiência oferecida por Tata Godoy."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {galleryImages.map((image, index) => (
            <motion.button
              key={image.src}
              type="button"
              variants={staggerItem}
              onClick={() => setActiveIndex(index)}
              aria-label={`Ampliar imagem: ${image.alt}`}
              className={`group overflow-hidden rounded-[1.5rem] bg-nude/60 ${image.aspect} ${
                index % 2 === 0 ? "lg:mt-0" : "lg:mt-10"
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-[550ms] ease-out group-hover:scale-[1.045]"
              />
            </motion.button>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-espresso/90 p-5"
            role="dialog"
            aria-modal="true"
            aria-label={active.alt}
            onClick={() => setActiveIndex(null)}
          >
            <button
              type="button"
              autoFocus
              onClick={() => setActiveIndex(null)}
              aria-label="Fechar imagem"
              className="absolute right-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-full border border-pure-white/30 text-pure-white transition-colors hover:text-gold"
            >
              <X strokeWidth={1.5} />
            </button>
            <img
              src={active.src}
              alt={active.alt}
              width={active.width}
              height={active.height}
              decoding="async"
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] w-auto max-w-full rounded-[1.5rem] object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
