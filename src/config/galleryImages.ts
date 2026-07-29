export interface GalleryImage {
  src: string;
  alt: string;
  /** tailwind aspect ratio class for the editorial masonry layout */
  aspect: string;
  width: number;
  height: number;
}

export const galleryImages: GalleryImage[] = [
  {
    src: "/images/extensao-de-cilios-tata.webp",
    alt: "Extensão de cílios realizada por Tata Godoy",
    aspect: "aspect-[3/4]",
    width: 900,
    height: 1200,
  },
  {
    src: "/images/tata-realizando-limpeza-de-pele.webp",
    alt: "Tata Godoy realizando uma limpeza de pele",
    aspect: "aspect-[4/5]",
    width: 960,
    height: 1200,
  },
  {
    src: "/images/tata-godoy-sobre.webp",
    alt: "Tata Godoy em seu ambiente de atendimento",
    aspect: "aspect-[4/5]",
    width: 960,
    height: 1200,
  },
  {
    src: "/images/limpeza-de-pele-tata.webp",
    alt: "Detalhe do cuidado com a pele durante o atendimento",
    aspect: "aspect-[3/4]",
    width: 900,
    height: 1200,
  },
];
