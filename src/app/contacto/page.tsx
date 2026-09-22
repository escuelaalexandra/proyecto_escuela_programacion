import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import { siteData } from "@/data/siteConfig";
import {
  ArrowUpRight,
  Clock3,
  Headphones,
  MapPin,
  MessageCircle,
  PhoneCall,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export default function ContactoPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080808] text-white">
      <Navbar />

      {/* CONTACTO DIRECTO */}
      <section className="px-5 pb-12 pt-16 sm:px-8 sm:pt-20 lg:px-12 lg:pb-16 lg:pt-24">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="relative overflow-hidden rounded-[2rem] border border-[#302929] bg-[#111] p-7 sm:p-9 lg:p-10">
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#8f243d]/10 blur-3xl" />

            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#8f243d]/10 text-[#c96a7e]">
                <MessageCircle className="h-6 w-6" />
              </div>

              <p className="mt-6 text-xs font-black uppercase tracking-[0.2em] text-[#c96a7e]">
                Atención directa
              </p>

              <h2 className="mt-3 max-w-2xl text-3xl font-black tracking-tight sm:text-4xl">
                Una conversación puede ser el primer paso.
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-7 text-[#858585]">
                Comunícate directamente con Nexus Resguardo. Cuéntanos tu
                situación y podremos orientarte sobre la información necesaria
                para conocer mejor tu caso.
              </p>

              <div className="mt-7">
                <WhatsAppButton
                  variant="banner"
                  customText="Contactar por WhatsApp"
                />
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-[#292929] bg-[#0c0c0c] p-4 transition duration-500 hover:-translate-y-1 hover:border-[#8f243d]/50">
                  <PhoneCall className="h-5 w-5 text-[#c96a7e]" />
                  <p className="mt-3 text-xs font-black uppercase tracking-wider text-[#666]">
                    Línea directa
                  </p>
                  <p className="mt-1 font-bold text-[#ddd]">
                    {siteData.whatsappNumberFormatted}
                  </p>
                </div>

                <div className="rounded-2xl border border-[#292929] bg-[#0c0c0c] p-4 transition duration-500 hover:-translate-y-1 hover:border-[#8f243d]/50">
                  <Headphones className="h-5 w-5 text-[#c96a7e]" />
                  <p className="mt-3 text-xs font-black uppercase tracking-wider text-[#666]">
                    Atención
                  </p>
                  <p className="mt-1 font-bold text-[#ddd]">
                    Personalizada y directa
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* INFORMACIÓN */}
          <div className="space-y-5">
            <div className="group rounded-[1.7rem] border border-[#292929] bg-[#101010] p-6 transition duration-500 hover:-translate-y-1 hover:border-[#8f243d]/50">
              <Clock3 className="h-6 w-6 text-[#c96a7e] transition duration-300 group-hover:scale-110" />

              <h3 className="mt-5 text-xl font-black">
                Horario de atención
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#888]">
                Lunes a viernes
                <br />
                09:00 – 18:00 hrs
              </p>

              <p className="mt-1 text-sm leading-6 text-[#888]">
                Sábados
                <br />
                09:00 – 14:00 hrs
              </p>
            </div>

            <div className="group rounded-[1.7rem] border border-[#292929] bg-[#101010] p-6 transition duration-500 hover:-translate-y-1 hover:border-[#8f243d]/50">
              <MapPin className="h-6 w-6 text-[#c96a7e] transition duration-300 group-hover:scale-110" />

              <h3 className="mt-5 text-xl font-black">
                Cobertura nacional
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#888]">
                Atención remota en la República Mexicana.
              </p>
            </div>

            <div className="group rounded-[1.7rem] border border-[#292929] bg-[#101010] p-6 transition duration-500 hover:-translate-y-1 hover:border-[#8f243d]/50">
              <ShieldCheck className="h-6 w-6 text-[#c96a7e] transition duration-300 group-hover:scale-110" />

              <h3 className="mt-5 text-xl font-black">
                Seguridad y privacidad
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#888]">
                Nunca solicitaremos contraseñas, NIPs, tokens ni códigos de
                seguridad de tus aplicaciones bancarias.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CIERRE */}
      <section className="px-5 pb-12 sm:px-8 lg:px-12 lg:pb-16">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-[#302929] bg-[#101010]">
          <div className="relative flex flex-col gap-7 px-7 py-9 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-12">
            <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#8f243d]/10 blur-3xl" />

            <div className="relative">
              <div className="flex items-center gap-3">
                <Headphones className="h-5 w-5 text-[#c96a7e]" />

                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#c96a7e]">
                  Nexus Resguardo
                </p>
              </div>

              <h2 className="mt-3 max-w-3xl text-3xl font-black tracking-tight sm:text-4xl">
                Cuando necesites orientación, estamos para escucharte.
              </h2>
            </div>

            <ArrowUpRight className="relative hidden h-12 w-12 text-[#8f243d] lg:block" />
          </div>
        </div>
      </section>

      <footer className="border-t border-[#252525] px-5 py-10 text-center sm:px-8">
        <p className="text-sm font-medium text-[#666]">
          © 2026 {siteData.name}. Todos los derechos reservados.
        </p>
      </footer>

      <WhatsAppButton variant="floating" />
    </main>
  );
}
