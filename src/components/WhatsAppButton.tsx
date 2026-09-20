import { siteData } from "@/data/siteConfig";
import WhatsAppIcon from "@/components/WhatsAppIcon";

interface WhatsAppButtonProps {
  variant?: "floating" | "banner";
  customText?: string;
}

export default function WhatsAppButton({ variant = "banner", customText }: WhatsAppButtonProps) {
  const whatsappUrl = `https://wa.me/${siteData.phoneNumber}?text=${encodeURIComponent(siteData.defaultMessage)}`;
  const text = customText || siteData.hero.ctaButton;

  if (variant === "floating") {
    return (
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold text-base py-3 px-5 rounded-full shadow-2xl transition-all hover:scale-105"
      >
        <WhatsAppIcon className="w-6 h-6 fill-white" />
        <span>Contactar por WhatsApp</span>
      </a>
    );
  }

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20ba5a] text-white font-black text-lg py-4 px-8 rounded-xl shadow-xl transition-all hover:scale-102"
    >
      <WhatsAppIcon className="w-6 h-6 fill-white" />
      <span>{text}</span>
    </a>
  );
}
