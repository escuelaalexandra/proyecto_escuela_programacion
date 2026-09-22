
import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { siteData } from "@/data/siteConfig";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function Navbar() {
  const whatsappUrl = `https://wa.me/${siteData.phoneNumber}?text=${encodeURIComponent(
    siteData.defaultMessage
  )}`;

  return (
    <header className="sticky top-0 z-50 border-b border-titanio-700/70 bg-titanio-900/85 backdrop-blur-md">
      <div className="mx-auto flex min-h-[76px] max-w-7xl items-center justify-between gap-4 px-4 sm:min-h-[82px] sm:px-6 lg:min-h-[86px] lg:px-8">

        {/* LOGO + NOMBRE */}
        <Link
          href="/"
          className="flex min-w-0 shrink-0 items-center gap-3 sm:gap-4"
        >
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-rubi/30 bg-rubi/10 sm:h-12 sm:w-12">
            <ShieldCheck className="h-7 w-7 text-rubi sm:h-8 sm:w-8" />
          </div>

          <span className="whitespace-nowrap text-lg font-black tracking-wider text-white sm:text-xl lg:text-2xl">
            NEXUS <span className="text-rubi">RESGUARDO</span>
          </span>
        </Link>

        {/* MENÚ */}
        <nav className="hidden items-center gap-6 text-base font-bold text-titanio-300 md:flex lg:gap-8 lg:text-lg">
          <Link
            href="/"
            className="transition-colors hover:text-white"
          >
            Inicio
          </Link>

          <Link
            href="/servicios"
            className="transition-colors hover:text-white"
          >
            Servicios
          </Link>

          <Link
            href="/nosotros"
            className="transition-colors hover:text-white"
          >
            Nosotros
          </Link>

          <Link
            href="/contacto"
            className="transition-colors hover:text-white"
          >
            Contacto
          </Link>
        </nav>

        {/* WHATSAPP */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex shrink-0 items-center gap-2.5 rounded-xl bg-[#25D366] px-5 py-3 text-sm font-extrabold text-white shadow-lg transition-all hover:bg-[#20ba5a] hover:-translate-y-0.5 sm:px-6 sm:py-3.5 sm:text-base"
        >
          <WhatsAppIcon className="h-5 w-5 fill-white sm:h-6 sm:w-6" />
          <span>Asesoría</span>
        </a>
      </div>
    </header>
  );
}

