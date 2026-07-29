export interface GalleryImage {
  src: string;
  alt: string;
  /** tailwind aspect ratio class for the editorial masonry layout */
  aspect: string;
  width: number;
  height: number;
  /** tailwind object-position utility */
  position?: string;
}

export const galleryImages: GalleryImage[] = [
  {
    src: "/images/extensao-de-cilios-tata.webp",
    alt: "Detalhe de extensão de cílios realizada por Tata Godoy",
    aspect: "aspect-[3/4]",
    width: 1000,
    height: 1333,
  },
  {
    src: "/images/tata-realizando-limpeza-de-pele.webp",
    alt: "Tata Godoy realizando procedimento de limpeza de pele",
    aspect: "aspect-[4/5]",
    width: 1086,
    height: 1448,
  },
  {
    src: "/images/tata-godoy-sobre.webp",
    alt: "Tata Godoy em seu espaço de atendimento",
    aspect: "aspect-[4/5]",
    width: 1000,
    height: 1333,
    position: "object-top",
  },
  {
    src: "/images/limpeza-de-pele-tata.webp",
    alt: "Cliente durante procedimento de limpeza de pele",
    aspect: "aspect-[3/4]",
    width: 1000,
    height: 1502,
  },
];
