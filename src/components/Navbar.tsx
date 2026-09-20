import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { siteData } from "@/data/siteConfig";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function Navbar() {
  const whatsappUrl = `https://wa.me/${siteData.phoneNumber}?text=${encodeURIComponent(siteData.defaultMessage)}`;

  return (
    <header className="sticky top-0 z-40 bg-titanio-900/95 backdrop-blur-md border-b border-titanio-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <div className="p-2 bg-rubi/10 border border-rubi/30 rounded-lg">
            <ShieldCheck className="w-8 h-8 text-rubi" />
          </div>
          <span className="text-xl sm:text-2xl font-black tracking-wider text-white">
            NEXUS <span className="text-rubi">RESGUARDO</span>
          </span>
        </Link>

        {/* MENÚ DE NAVEGACIÓN */}
        <nav className="hidden md:flex items-center gap-8 text-lg font-bold text-titanio-300">
          <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
          <Link href="/servicios" className="hover:text-white transition-colors">Servicios</Link>
          <Link href="/nosotros" className="hover:text-white transition-colors">Nosotros</Link>
          <Link href="/contacto" className="hover:text-white transition-colors">Contacto</Link>
        </nav>

        {/* BOTÓN WHATSAPP EN NAVBAR */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold text-base py-2.5 px-5 rounded-xl shadow-lg transition-all"
        >
          <WhatsAppIcon className="w-5 h-5 fill-white" />
          <span>Asesoría</span>
        </a>
      </div>
    </header>
  );
}
