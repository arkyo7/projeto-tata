import { MessageCircle } from "lucide-react";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { whatsappMessages } from "@/lib/whatsappMessages";

export function WhatsAppButton() {
  return (
    <a
      href={createWhatsAppLink(whatsappMessages.general)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com Tata Godoy pelo WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-terracotta text-pure-white shadow-[0_14px_30px_-12px_oklch(0.4474_0.054_37.26)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-terracotta-hover sm:bottom-7 sm:right-7"
    >
      <MessageCircle size={24} strokeWidth={1.5} />
    </a>
  );
}
