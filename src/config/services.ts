import { whatsappMessages } from "@/lib/whatsappMessages";

export interface Service {
  id: string;
  title: string;
  description: string;
  detail: string;
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  /** framing used on the card (kept different from the hero crop) */
  imageAspect: string;
  imagePosition: string;
  ctaLabel: string;
  message: string;
}

export const services: Service[] = [
  {
    id: "extensao-de-cilios",
    title: "Extensão de cílios",
    description:
      "Um procedimento pensado para realçar o olhar, destacar a sua beleza e trazer mais praticidade para a rotina.",
    detail:
      "O atendimento é realizado de maneira personalizada, considerando o estilo e a preferência de cada cliente.",
    image: "/images/extensao-de-cilios-tata.webp",
    imageAlt: "Resultado de extensão de cílios",
    imageWidth: 1000,
    imageHeight: 1333,
    imageAspect: "aspect-[4/3]",
    imagePosition: "object-center",
    ctaLabel: "Quero fazer extensão de cílios",
    message: whatsappMessages.lashes,
  },
  {
    id: "limpeza-de-pele",
    title: "Limpeza de pele",
    description:
      "Um momento de cuidado dedicado à remoção de impurezas e à renovação da aparência da pele.",
    detail:
      "Uma experiência pensada para proporcionar uma agradável sensação de limpeza, cuidado e bem-estar.",
    image: "/images/tata-realizando-limpeza-de-pele.webp",
    imageAlt: "Tata Godoy realizando procedimento de limpeza de pele",
    imageWidth: 1086,
    imageHeight: 1448,
    imageAspect: "aspect-[4/3]",
    imagePosition: "object-center",
    ctaLabel: "Quero fazer uma limpeza de pele",
    message: whatsappMessages.skincare,
  },
];
