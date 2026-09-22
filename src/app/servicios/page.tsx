import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import { siteData } from "@/data/siteConfig";
import {
  CheckCircle2,
  FileSearch,
  Landmark,
  LockKeyhole,
  ShieldCheck,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";

const servicios = [
  {
    label: "Trazabilidad SPEI",
    panelTitle: "ESTATUS DEL ANÁLISIS",
    panelText: "Rastreo Interbancario $ MXN",
    status: "Activo",
    title: "Aclaración y Rastreo SPEI",
    description:
      "Analizamos la información disponible de transferencias y movimientos para identificar rutas, referencias y datos relevantes del caso.",
    image:
      "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=1400",
    imageAlt: "Documentos y análisis financiero sobre un escritorio",
    icon: FileSearch,
    points: [
      "Revisión de referencias y movimientos.",
      "Organización cronológica de operaciones.",
      "Identificación de información relevante.",
    ],
  },
  {
    label: "Diagnóstico de Entidades",
    panelTitle: "VERIFICACIÓN REGULATORIA",
    panelText: "Validación de Brokers & Apps",
    status: "Antifraude",
    title: "Protección y Blindaje Antifraude",
    description:
      "Revisamos señales, documentación y características de plataformas o entidades para detectar elementos que requieran especial atención.",
    image:
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1400",
    imageAlt: "Análisis y revisión de información financiera",
    icon: ShieldCheck,
    points: [
      "Análisis de documentación disponible.",
      "Identificación de señales de riesgo.",
      "Organización de evidencias e información.",
    ],
  },
  {
    label: "Blindaje de Capital $ MXN",
    panelTitle: "PROTECCIÓN DE EFECTIVO",
    panelText: "Resguardo & Cuentas Nacionales",
    status: "Protegido",
    title: "Resguardo y Protección Patrimonial",
    description:
      "Construimos una visión ordenada del patrimonio involucrado para facilitar su seguimiento, documentación y resguardo.",
    image:
      "https://images.pexels.com/photos/4386371/pexels-photo-4386371.jpeg?auto=compress&cs=tinysrgb&w=1400",
    imageAlt: "Documentación y elementos relacionados con protección patrimonial",
    icon: LockKeyhole,
    points: [
      "Inventario de información patrimonial.",
      "Seguimiento de movimientos relevantes.",
      "Organización documental para el caso.",
    ],
  },
];

const informacion = [
  {
    icon: FileSearch,
    title: "Documentación",
    text: "Comprobantes, referencias, registros y documentos relacionados con las operaciones.",
  },
  {
    icon: TrendingUp,
    title: "Movimientos",
    text: "Fechas, cantidades, referencias y datos que permitan ordenar cronológicamente la situación.",
  },
  {
    icon: Landmark,
    title: "Entidades involucradas",
    text: "Información de instituciones, plataformas o cuentas relacionadas con el caso.",
  },
  {
    icon: LockKeyhole,
    title: "Resguardo",
    text: "Organización de la información para facilitar su seguimiento y protección.",
  },
];

export default function ServiciosPage() {
  return (
    <main className="min-h-screen bg-[#080808] text-[#f4f0e8]">
      <Navbar />

      {/* ENCABEZADO */}
      <section className="px-5 pb-12 pt-12 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-[#9a3341]">
            Servicios especializados
          </p>

          <h1 className="max-w-5xl text-5xl font-black leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
            Recuperar también es entender.
          </h1>

          <div className="mt-7 flex max-w-4xl flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <p className="max-w-3xl text-lg leading-relaxed text-[#a7a19b] sm:text-xl">
              Analizamos movimientos, documentación y señales relevantes para
              convertir información dispersa en una visión clara de cada
              situación patrimonial.
            </p>

            <a
              href={`https://wa.me/${siteData.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-[#25D366] px-6 py-3.5 font-bold text-black transition hover:bg-[#20BA5A]"
            >
              Consultar por WhatsApp
              <ArrowUpRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="px-5 pb-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 border-b border-[#2b2525] pb-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#9a3341]">
              Áreas de recuperación
            </p>
          </div>

          <div className="space-y-6">
            {servicios.map((servicio) => {
              const Icon = servicio.icon;

              return (
                <article
                  key={servicio.title}
                  className="group overflow-hidden rounded-[1.6rem] border border-[#2d2828] bg-[#151515] shadow-[0_18px_60px_rgba(0,0,0,0.3)]"
                >
                  <div className="grid lg:grid-cols-[0.88fr_1.12fr]">
                    {/* IMAGEN */}
                    <div className="p-5 sm:p-6">
                      <div className="relative h-[300px] overflow-hidden rounded-[1.15rem] border border-[#302929] bg-black sm:h-[330px]">
                        <img
                          src={servicio.image}
                          alt={servicio.imageAlt}
                          className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

                        <div className="absolute bottom-4 left-4">
                          <div className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-black/70 px-4 py-2.5 text-sm font-bold text-white backdrop-blur-md">
                            <Icon className="h-4 w-4 text-[#c32c47]" />
                            {servicio.label}
                          </div>
                        </div>
                      </div>

                      {/* PANEL */}
                      <div className="mt-3 rounded-[1.05rem] border border-[#d7d1ca]/70 bg-[#181818] px-5 py-3.5">
                        <div className="flex items-center justify-between gap-4">
                          <div>
                            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#c32c47]">
                              {servicio.panelTitle}
                            </p>

                            <p className="mt-1 text-base font-bold text-[#f4f0e8] sm:text-lg">
                              {servicio.panelText}
                            </p>
                          </div>

                          <span className="shrink-0 rounded-full border border-[#9a3341] px-3 py-1.5 text-xs font-bold text-[#d9a5ac]">
                            {servicio.status}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* INFORMACIÓN */}
                    <div className="flex flex-col justify-center px-7 pb-7 sm:px-9 sm:pb-8 lg:px-10 lg:py-8">
                      <h2 className="max-w-2xl text-3xl font-black leading-tight tracking-tight text-[#f4f0e8] sm:text-4xl">
                        {servicio.title}
                      </h2>

                      <p className="mt-3 max-w-2xl text-base leading-relaxed text-[#aaa4a4] sm:text-lg">
                        {servicio.description}
                      </p>

                      <div className="mt-5">
                        <p className="mb-3 text-sm font-black uppercase tracking-[0.12em] text-[#c32c47]">
                          Acciones y alcance técnico:
                        </p>

                        <div className="space-y-3">
                          {servicio.points.map((point) => (
                            <div
                              key={point}
                              className="flex items-start gap-3.5"
                            >
                              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#c32c47]" />

                              <span className="text-base leading-relaxed text-[#b8b2b2]">
                                {point}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <a
                        href={`https://wa.me/${siteData.whatsappNumber}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 inline-flex min-h-[54px] w-full max-w-[540px] items-center justify-center gap-3 rounded-xl bg-[#25D366] px-5 py-3 text-base font-black text-white transition hover:bg-[#20BA5A]"
                      >
                        Consultar sobre {servicio.title}
                        <ArrowUpRight className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHATSAPP */}
      <div className="flex justify-center px-5 py-10 sm:px-8">
        <a
          href={`https://wa.me/${siteData.whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[58px] items-center justify-center gap-3 rounded-xl bg-[#25D366] px-9 py-4 text-base font-black text-white shadow-[0_12px_35px_rgba(37,211,102,0.18)] transition hover:bg-[#20BA5A] hover:scale-[1.02]"
        >
          Hablar por WhatsApp
          <ArrowUpRight className="h-5 w-5" />
        </a>
      </div>

      {/* INFORMACIÓN PARA EL ANÁLISIS */}
      <section className="border-y border-[#2b2525] bg-[#0d0c0c] px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            {/* INTRODUCCIÓN */}
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className="mb-5 text-sm font-bold uppercase tracking-[0.24em] text-[#9a3341]">
                Punto de partida
              </p>

              <h2 className="max-w-xl text-4xl font-black leading-[1] tracking-[-0.03em] text-[#f4f0e8] sm:text-5xl lg:text-6xl">
                ¿Qué necesitamos para analizar tu caso?
              </h2>

              <p className="mt-6 max-w-lg text-lg leading-relaxed text-[#a7a19b]">
                Una primera revisión comienza con la información que ya tienes.
                No necesitas reunir todo antes de iniciar el análisis.
              </p>

              <div className="mt-8 h-px w-24 bg-[#9a3341]" />

              <p className="mt-6 max-w-md text-sm leading-relaxed text-[#817b78]">
                Documentación, movimientos y datos relacionados nos permiten
                construir una visión ordenada de la situación.
              </p>
            </div>

            {/* LISTA */}
            <div className="border-t border-[#302929]">
              {informacion.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group grid gap-5 border-b border-[#302929] py-7 sm:grid-cols-[56px_180px_1fr] sm:items-start sm:gap-7"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#4a3438] bg-[#151313] text-[#9a3341] transition group-hover:border-[#9a3341]">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3 className="text-xl font-bold text-[#f4f0e8]">
                      {item.title}
                    </h3>

                    <p className="max-w-xl text-base leading-relaxed text-[#a7a19b]">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#2a2525] px-5 py-12 text-center sm:px-8">
        <p className="text-base text-[#a7a19b]">
          © 2026 {siteData.name}. Recuperación Patrimonial y Protección de
          Activos.
        </p>
      </footer>

      <WhatsAppButton variant="floating" />
    </main>
  );
}
