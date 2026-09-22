"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Menu, ShieldCheck, X } from "lucide-react";
import { siteData } from "@/data/siteConfig";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappUrl = `https://wa.me/${siteData.phoneNumber}?text=${encodeURIComponent(
    siteData.defaultMessage
  )}`;

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080808]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[82px] w-full max-w-[1500px] items-center justify-between px-5 sm:px-8 lg:px-12">

        {/* MARCA */}
        <Link
          href="/"
          onClick={closeMenu}
          className="group flex items-center gap-3"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#741f2b]/60 bg-[#741f2b]/10 transition-all duration-300 group-hover:border-[#9a3341] group-hover:bg-[#741f2b]/20">
            <ShieldCheck className="h-6 w-6 text-[#9a3341]" />
          </div>

          <div className="leading-none">
            <div className="text-[17px] font-black tracking-[0.16em] text-[#f4f0e8] sm:text-[19px]">
              NEXUS
            </div>
            <div className="mt-1 text-[10px] font-bold tracking-[0.28em] text-[#9a3341] sm:text-[11px]">
              RESGUARDO
            </div>
          </div>
        </Link>

        {/* NAVEGACIÓN DESKTOP */}
        <nav className="hidden items-center gap-8 lg:flex">
          <Link
            href="/"
            className="group relative py-3 text-[18px] font-bold text-[#a7a19b] transition-colors hover:text-[#f4f0e8]"
          >
            Inicio
            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#9a3341] transition-all duration-300 group-hover:w-full" />
          </Link>

          <Link
            href="/servicios"
            className="group relative py-3 text-[18px] font-bold text-[#a7a19b] transition-colors hover:text-[#f4f0e8]"
          >
            Servicios
            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#9a3341] transition-all duration-300 group-hover:w-full" />
          </Link>

          <Link
            href="/nosotros"
            className="group relative py-3 text-[18px] font-bold text-[#a7a19b] transition-colors hover:text-[#f4f0e8]"
          >
            Nosotros
            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#9a3341] transition-all duration-300 group-hover:w-full" />
          </Link>

          <Link
            href="/contacto"
            className="group relative py-3 text-[18px] font-bold text-[#a7a19b] transition-colors hover:text-[#f4f0e8]"
          >
            Contacto
            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#9a3341] transition-all duration-300 group-hover:w-full" />
          </Link>
        </nav>

        {/* WHATSAPP DESKTOP */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-full border border-[#741f2b] bg-[#741f2b] px-5 py-3 text-sm font-extrabold text-[#f4f0e8] shadow-[0_8px_30px_rgba(116,31,43,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#9a3341] hover:bg-[#9a3341] lg:flex"
        >
          <WhatsAppIcon className="h-6 w-6 fill-current" />
          <span>WhatsApp</span>
          <ArrowUpRight className="h-5 w-5" />
        </a>

        {/* BOTÓN MENÚ MÓVIL */}
        <button
          type="button"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-[#f4f0e8] transition-all duration-300 hover:border-[#741f2b] hover:bg-[#741f2b]/10 lg:hidden"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* MENÚ MÓVIL */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-[#0b0b0b] transition-all duration-300 lg:hidden ${
          isOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 border-t-transparent opacity-0"
        }`}
      >
        <nav className="mx-auto flex w-full max-w-[1500px] flex-col px-5 py-5 sm:px-8">
          <Link
            href="/"
            onClick={closeMenu}
            className="flex items-center justify-between border-b border-white/10 py-5 text-xl font-bold text-[#f4f0e8]"
          >
            Inicio
            <ArrowUpRight className="h-5 w-5 text-[#9a3341]" />
          </Link>

          <Link
            href="/servicios"
            onClick={closeMenu}
            className="flex items-center justify-between border-b border-white/10 py-5 text-xl font-bold text-[#f4f0e8]"
          >
            Servicios
            <ArrowUpRight className="h-5 w-5 text-[#9a3341]" />
          </Link>

          <Link
            href="/nosotros"
            onClick={closeMenu}
            className="flex items-center justify-between border-b border-white/10 py-5 text-xl font-bold text-[#f4f0e8]"
          >
            Nosotros
            <ArrowUpRight className="h-5 w-5 text-[#9a3341]" />
          </Link>

          <Link
            href="/contacto"
            onClick={closeMenu}
            className="flex items-center justify-between border-b border-white/10 py-5 text-xl font-bold text-[#f4f0e8]"
          >
            Contacto
            <ArrowUpRight className="h-5 w-5 text-[#9a3341]" />
          </Link>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="mt-5 flex items-center justify-center gap-3 rounded-full bg-[#741f2b] px-5 py-4 text-base font-extrabold text-[#f4f0e8] transition-all duration-300 hover:bg-[#9a3341]"
          >
            <WhatsAppIcon className="h-5 w-5 fill-current" />
            Hablar por WhatsApp
            <ArrowUpRight className="h-5 w-5" />
          </a>
        </nav>
      </div>
    </header>
  );
}
