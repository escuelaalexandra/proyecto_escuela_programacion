import Link from "next/link";
import { ShieldCheck, Menu, X } from "lucide-react";
import { siteData } from "@/data/siteConfig";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function Navbar() {
  const whatsappUrl = `https://wa.me/${siteData.phoneNumber}?text=${encodeURIComponent(
    siteData.defaultMessage
  )}`;

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-titanio-700/60 bg-titanio-900/75 backdrop-blur-xl">
      <div className="mx-auto flex min-h-[76px] max-w-7xl items-center justify-between gap-3 px-4 sm:min-h-[82px] sm:px-6 lg:min-h-[86px] lg:px-8">

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

        {/* MENÚ ESCRITORIO */}
        <nav className="hidden items-center gap-6 text-base font-bold text-titanio-300 md:flex lg:gap-8 lg:text-lg">
          <Link href="/" className="transition-colors hover:text-white">
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

        {/* WHATSAPP ESCRITORIO */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden shrink-0 items-center gap-2.5 rounded-xl bg-[#25D366] px-5 py-3 text-sm font-extrabold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-[#20ba5a] sm:flex sm:px-6 sm:py-3.5 sm:text-base"
        >
          <WhatsAppIcon className="h-5 w-5 fill-white sm:h-6 sm:w-6" />
          <span>Asesoría</span>
        </a>

        {/* MENÚ MÓVIL */}
        <details className="relative md:hidden">
          <summary className="flex h-12 w-12 cursor-pointer list-none items-center justify-center rounded-xl border border-titanio-700 bg-titanio-900/70 text-white transition hover:border-rubi/50">
            <Menu className="h-6 w-6" />
          </summary>

          <div className="absolute right-0 top-[calc(100%+12px)] w-[min(88vw,340px)] overflow-hidden rounded-2xl border border-titanio-700/70 bg-titanio-900/95 p-3 shadow-2xl backdrop-blur-xl">
            <nav className="flex flex-col">
              <Link
                href="/"
                className="rounded-xl px-5 py-4 text-base font-bold text-white transition hover:bg-rubi/10 hover:text-white"
              >
                Inicio
              </Link>

              <Link
                href="/servicios"
                className="rounded-xl px-5 py-4 text-base font-bold text-white transition hover:bg-rubi/10 hover:text-white"
              >
                Servicios
              </Link>

              <Link
                href="/nosotros"
                className="rounded-xl px-5 py-4 text-base font-bold text-white transition hover:bg-rubi/10 hover:text-white"
              >
                Nosotros
              </Link>

              <Link
                href="/contacto"
                className="rounded-xl px-5 py-4 text-base font-bold text-white transition hover:bg-rubi/10 hover:text-white"
              >
                Contacto
              </Link>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center justify-center gap-2.5 rounded-xl bg-[#25D366] px-5 py-4 text-base font-extrabold text-white shadow-lg transition hover:bg-[#20ba5a]"
              >
                <WhatsAppIcon className="h-6 w-6 fill-white" />
                <span>Asesoría</span>
              </a>
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}
