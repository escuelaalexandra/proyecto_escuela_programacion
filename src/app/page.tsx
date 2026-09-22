import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import { siteData } from "@/data/siteConfig";
import {
  ArrowDownRight,
  ArrowUpRight,
  CheckCircle2,
  ShieldAlert,
  ShieldCheck,
  TrendingUp,
  Landmark,
  ArrowLeftRight,
  UserX,
  FileSearch,
  Target,
  Building2,
  FileText,
  Search,
  LockKeyhole,
} from "lucide-react";

export default function Home() {
  const getCaseIcon = (type: string) => {
    switch (type) {
      case "trending":
        return <TrendingUp className="h-6 w-6" />;
      case "bank":
        return <Landmark className="h-6 w-6" />;
      case "transfer":
        return <ArrowLeftRight className="h-6 w-6" />;
      case "user":
        return <UserX className="h-6 w-6" />;
      default:
        return <ShieldCheck className="h-6 w-6" />;
    }
  };

  const protectionAreas = [
    {
      title: "Activos",
      text: "Identificación y seguimiento de situaciones que pueden afectar recursos y bienes.",
      icon: <Building2 className="h-7 w-7" />,
    },
    {
      title: "Documentación",
      text: "Orden y revisión de comprobantes, movimientos y antecedentes disponibles.",
      icon: <FileText className="h-7 w-7" />,
    },
    {
      title: "Movimientos",
      text: "Análisis de operaciones, transferencias y situaciones financieras irregulares.",
      icon: <Search className="h-7 w-7" />,
    },
    {
      title: "Seguimiento",
      text: "Acompañamiento estructurado para mantener cada situación bajo control.",
      icon: <LockKeyhole className="h-7 w-7" />,
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-[#080808] text-[#f4f0e8]">
      <Navbar />

      <main>
        {/* HERO */}
        <section className="relative border-b border-white/10">
          <div className="absolute left-[-15%] top-[-20%] h-[600px] w-[600px] rounded-full bg-[#741f2b]/10 blur-[120px]" />

          <div className="mx-auto grid min-h-[calc(100vh-82px)] w-full max-w-[1500px] items-center gap-10 px-5 py-14 sm:px-8 sm:py-16 lg:grid-cols-[1fr_1fr] lg:gap-16 lg:px-12 lg:py-20">

            {/* IMAGEN */}
            <div className="relative order-1">
              <div className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-[#151313]">
                <img
                  src={siteData.hero.imageUrl}
                  alt="Documentación y patrimonio"
                  className="h-[430px] w-full object-cover transition-transform duration-1000 group-hover:scale-105 sm:h-[560px] lg:h-[650px]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/90 via-transparent to-transparent" />

                {/* LEYENDA TRANSPARENTE */}
                <div className="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7 sm:right-7">
                  <div className="max-w-xl rounded-2xl border border-white/15 bg-[#080808]/65 px-5 py-4 backdrop-blur-md sm:px-6 sm:py-5">
                    <p className="text-base font-bold leading-relaxed text-[#f4f0e8] sm:text-lg">
                      Asistencia especializada en recuperación de activos y
                      prevención de fraudes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* INFORMACIÓN */}
            <div className="relative z-10 order-2">
              <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#741f2b]/60 bg-[#741f2b]/10 px-5 py-3 text-sm font-bold uppercase tracking-[0.14em] text-[#d99aa3]">
                <ShieldAlert className="h-5 w-5" />
                {siteData.hero.badge}
              </div>

              <p className="mb-5 text-sm font-black uppercase tracking-[0.3em] text-[#9a3341] sm:text-base">
                NEXUS RESGUARDO
              </p>

              <h1 className="max-w-3xl text-[clamp(3rem,5.5vw,6.3rem)] font-black leading-[0.9] tracking-[-0.065em] text-[#f4f0e8]">
                {siteData.hero.title}
              </h1>

              <p className="mt-8 max-w-2xl text-xl font-medium leading-relaxed text-[#d9d3ca] sm:text-2xl">
                {siteData.hero.description}
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <WhatsAppButton
                  variant="banner"
                  customText={siteData.hero.ctaButton}
                />

                <a
                  href="#servicios"
                  className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-white/20 px-7 py-4 text-base font-bold text-[#f4f0e8] transition-all duration-300 hover:border-[#9a3341] hover:bg-white/[0.04]"
                >
                  Explorar soluciones
                  <ArrowDownRight className="h-5 w-5 text-[#9a3341]" />
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* LO QUE PROTEGEMOS */}
        <section id="protegemos" className="relative overflow-hidden border-b border-white/10 bg-[#080808] py-24 sm:py-28 lg:py-32">
          <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">

            {/* ENCABEZADO */}
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-black uppercase tracking-[0.3em] text-[#9a3341] sm:text-base">
                LO QUE PROTEGEMOS
              </p>

              <h2 className="mt-5 text-[clamp(2.8rem,6vw,5.8rem)] font-black leading-[0.92] tracking-[-0.055em] text-[#f4f0e8]">
                Una situación patrimonial requiere
                <span className="block text-[#9a3341]">
                  información clara.
                </span>
              </h2>

              <p className="mx-auto mt-7 max-w-3xl text-lg font-medium leading-relaxed text-[#d9d3ca] sm:text-xl lg:text-2xl">
                Una situación patrimonial puede involucrar documentos,
                movimientos, activos y diferentes etapas de seguimiento.
                Organizamos esa información para entender el panorama.
              </p>
            </div>

            {/* TARJETAS EN MOVIMIENTO */}
            <div className="relative mt-16 overflow-hidden sm:mt-20">

              {/* Degradados laterales */}
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#080808] to-transparent sm:w-28" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#080808] to-transparent sm:w-28" />

              <div className="nexus-protection-track flex w-max gap-5 py-5">

                {/* PRIMER GRUPO */}
                <div className="flex gap-5">

                  <article className="group w-[300px] shrink-0 rounded-[26px] border border-white/10 bg-[#151313] p-7 transition-all duration-500 hover:-translate-y-3 hover:border-[#9a3341]/70 hover:bg-[#1b1617] sm:w-[350px] sm:p-8">
                    <div className="mb-8 text-5xl transition-transform duration-500 group-hover:scale-110">
                      🏠
                    </div>
                    <h3 className="text-2xl font-black text-[#f4f0e8] sm:text-3xl">
                      Activos
                    </h3>
                    <p className="mt-4 text-lg leading-relaxed text-[#a7a19b] sm:text-xl">
                      Identificación y seguimiento de situaciones que pueden afectar recursos y bienes.
                    </p>
                    <div className="mt-7 h-1 w-12 rounded-full bg-[#741f2b] transition-all duration-500 group-hover:w-24" />
                  </article>

                  <article className="group w-[300px] shrink-0 rounded-[26px] border border-white/10 bg-[#151313] p-7 transition-all duration-500 hover:-translate-y-3 hover:border-[#9a3341]/70 hover:bg-[#1b1617] sm:w-[350px] sm:p-8">
                    <div className="mb-8 text-5xl transition-transform duration-500 group-hover:scale-110">
                      📄
                    </div>
                    <h3 className="text-2xl font-black text-[#f4f0e8] sm:text-3xl">
                      Documentación
                    </h3>
                    <p className="mt-4 text-lg leading-relaxed text-[#a7a19b] sm:text-xl">
                      Orden y revisión de comprobantes, movimientos y antecedentes disponibles.
                    </p>
                    <div className="mt-7 h-1 w-12 rounded-full bg-[#741f2b] transition-all duration-500 group-hover:w-24" />
                  </article>

                  <article className="group w-[300px] shrink-0 rounded-[26px] border border-white/10 bg-[#151313] p-7 transition-all duration-500 hover:-translate-y-3 hover:border-[#9a3341]/70 hover:bg-[#1b1617] sm:w-[350px] sm:p-8">
                    <div className="mb-8 text-5xl transition-transform duration-500 group-hover:scale-110">
                      💰
                    </div>
                    <h3 className="text-2xl font-black text-[#f4f0e8] sm:text-3xl">
                      Movimientos
                    </h3>
                    <p className="mt-4 text-lg leading-relaxed text-[#a7a19b] sm:text-xl">
                      Análisis de operaciones, transferencias y situaciones financieras irregulares.
                    </p>
                    <div className="mt-7 h-1 w-12 rounded-full bg-[#741f2b] transition-all duration-500 group-hover:w-24" />
                  </article>

                  <article className="group w-[300px] shrink-0 rounded-[26px] border border-white/10 bg-[#151313] p-7 transition-all duration-500 hover:-translate-y-3 hover:border-[#9a3341]/70 hover:bg-[#1b1617] sm:w-[350px] sm:p-8">
                    <div className="mb-8 text-5xl transition-transform duration-500 group-hover:scale-110">
                      🔎
                    </div>
                    <h3 className="text-2xl font-black text-[#f4f0e8] sm:text-3xl">
                      Seguimiento
                    </h3>
                    <p className="mt-4 text-lg leading-relaxed text-[#a7a19b] sm:text-xl">
                      Acompañamiento estructurado para mantener cada situación bajo control.
                    </p>
                    <div className="mt-7 h-1 w-12 rounded-full bg-[#741f2b] transition-all duration-500 group-hover:w-24" />
                  </article>

                </div>

                {/* SEGUNDO GRUPO PARA CREAR EL BUCLE */}
                <div className="flex gap-5" aria-hidden="true">

                  <article className="group w-[300px] shrink-0 rounded-[26px] border border-white/10 bg-[#151313] p-7 sm:w-[350px] sm:p-8">
                    <div className="mb-8 text-5xl">🏠</div>
                    <h3 className="text-2xl font-black text-[#f4f0e8] sm:text-3xl">Activos</h3>
                    <p className="mt-4 text-lg leading-relaxed text-[#a7a19b] sm:text-xl">
                      Identificación y seguimiento de situaciones que pueden afectar recursos y bienes.
                    </p>
                    <div className="mt-7 h-1 w-12 rounded-full bg-[#741f2b]" />
                  </article>

                  <article className="group w-[300px] shrink-0 rounded-[26px] border border-white/10 bg-[#151313] p-7 sm:w-[350px] sm:p-8">
                    <div className="mb-8 text-5xl">📄</div>
                    <h3 className="text-2xl font-black text-[#f4f0e8] sm:text-3xl">Documentación</h3>
                    <p className="mt-4 text-lg leading-relaxed text-[#a7a19b] sm:text-xl">
                      Orden y revisión de comprobantes, movimientos y antecedentes disponibles.
                    </p>
                    <div className="mt-7 h-1 w-12 rounded-full bg-[#741f2b]" />
                  </article>

                  <article className="group w-[300px] shrink-0 rounded-[26px] border border-white/10 bg-[#151313] p-7 sm:w-[350px] sm:p-8">
                    <div className="mb-8 text-5xl">💰</div>
                    <h3 className="text-2xl font-black text-[#f4f0e8] sm:text-3xl">Movimientos</h3>
                    <p className="mt-4 text-lg leading-relaxed text-[#a7a19b] sm:text-xl">
                      Análisis de operaciones, transferencias y situaciones financieras irregulares.
                    </p>
                    <div className="mt-7 h-1 w-12 rounded-full bg-[#741f2b]" />
                  </article>

                  <article className="group w-[300px] shrink-0 rounded-[26px] border border-white/10 bg-[#151313] p-7 sm:w-[350px] sm:p-8">
                    <div className="mb-8 text-5xl">🔎</div>
                    <h3 className="text-2xl font-black text-[#f4f0e8] sm:text-3xl">Seguimiento</h3>
                    <p className="mt-4 text-lg leading-relaxed text-[#a7a19b] sm:text-xl">
                      Acompañamiento estructurado para mantener cada situación bajo control.
                    </p>
                    <div className="mt-7 h-1 w-12 rounded-full bg-[#741f2b]" />
                  </article>

                </div>
              </div>
            </div>

          </div>
        </section>

        {/* SERVICIOS */}
        <section
          id="servicios"
          className="border-y border-white/10 bg-[#0d0c0c] py-24 sm:py-32"
        >
          <div className="mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12">
            <div className="mb-14 flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
              <div>
                <h2 className="mt-4 max-w-4xl text-[clamp(2.8rem,5vw,5.5rem)] font-black leading-[0.9] tracking-[-0.06em]">
                  Recuperación y protección patrimonial.
                </h2>
              </div>

              <p className="max-w-md text-lg leading-relaxed text-[#a7a19b]">
                Conoce las principales situaciones en las que podemos
                orientarte y dar seguimiento al proceso.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {siteData.services.map((service) => (
                <article
                  key={service.id}
                  className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-[#151313] transition-all duration-500 hover:-translate-y-2 hover:border-[#741f2b]"
                >
                  <div className="relative h-[300px] overflow-hidden">
                    <img
                      src={service.imageUrl}
                      alt={service.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/20 to-transparent" />
                  </div>

                  <div className="p-7">
                    <h3 className="text-2xl font-black text-[#f4f0e8] sm:text-3xl">
                      {service.title}
                    </h3>

                    <p className="mt-4 text-base leading-relaxed text-[#a7a19b] sm:text-lg">
                      {service.description}
                    </p>

                    <div className="mt-7 border-t border-white/10 pt-5">
                      <div className="space-y-3">
                        {service.details.map((detail, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-3 text-sm font-medium text-[#d9d3ca] sm:text-base"
                          >
                            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#9a3341]" />
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5">
                      <span className="text-xs font-black uppercase tracking-[0.2em] text-[#a7a19b]">
                        Conocer área
                      </span>

                      <ArrowUpRight className="h-5 w-5 text-[#9a3341] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CASOS */}
        <section className="py-24 sm:py-32">
          <div className="mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12">
            <div className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="mt-5 max-w-3xl text-[clamp(2.8rem,5vw,5rem)] font-black leading-[0.9] tracking-[-0.06em]">
                  Casos que podemos revisar.
                </h2>
              </div>

              <p className="max-w-md text-lg leading-relaxed text-[#a7a19b]">
                Algunos escenarios en los que el análisis de la información
                puede ser determinante.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {siteData.casesHandled.map((item, idx) => (
                <article
                  key={idx}
                  className="group min-h-[250px] rounded-[20px] border border-white/10 bg-[#111010] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#741f2b]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#741f2b]/40 bg-[#741f2b]/10 text-[#9a3341]">
                    {getCaseIcon(item.icon)}
                  </div>

                  <h3 className="mt-8 text-xl font-black leading-tight text-[#f4f0e8]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-[#a7a19b] sm:text-base">
                    {item.desc}
                  </p>

                  <div className="mt-6 h-px w-10 bg-[#741f2b] transition-all duration-500 group-hover:w-full" />
                </article>
              ))}

              <article className="min-h-[250px] rounded-[20px] border border-white/10 bg-[#151313] p-6 transition-all duration-300 hover:border-[#741f2b]">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#741f2b]">
                  <FileSearch className="h-6 w-6" />
                </div>

                <h3 className="mt-8 text-xl font-black text-[#f4f0e8]">
                  Información incompleta
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-[#a7a19b] sm:text-base">
                  Cuando existen comprobantes, movimientos o antecedentes que
                  necesitan ser organizados y revisados.
                </p>
              </article>

              <article className="min-h-[250px] rounded-[20px] border border-white/10 bg-[#151313] p-6 transition-all duration-300 hover:border-[#741f2b]">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#741f2b]">
                  <Target className="h-6 w-6" />
                </div>

                <h3 className="mt-8 text-xl font-black text-[#f4f0e8]">
                  Seguimiento patrimonial
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-[#a7a19b] sm:text-base">
                  Situaciones que requieren mantener documentación y avances
                  organizados durante el proceso.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* INFORMACIÓN / ANÁLISIS / SEGUIMIENTO */}
        <section className="border-y border-white/10 bg-[#0d0c0c] py-24 sm:py-32">
          <div className="mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12">
            <div className="mb-16">
              <h2 className="max-w-5xl text-[clamp(2.8rem,5vw,5.5rem)] font-black leading-[0.9] tracking-[-0.06em]">
                Información.
                <span className="text-[#9a3341]"> Análisis.</span>
                <br />
                Seguimiento.
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {siteData.steps.map((step, idx) => {
                const icons = [
                  <FileSearch key="search" className="h-7 w-7" />,
                  <Target key="target" className="h-7 w-7" />,
                  <ShieldCheck key="shield" className="h-7 w-7" />,
                ];

                return (
                  <article
                    key={idx}
                    className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-[#151313] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#741f2b] sm:p-10"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#741f2b] text-[#f4f0e8]">
                      {icons[idx] || icons[0]}
                    </div>

                    <h3 className="mt-12 text-2xl font-black text-[#f4f0e8] sm:text-3xl">
                      {step.title}
                    </h3>

                    <p className="mt-4 text-base leading-relaxed text-[#a7a19b] sm:text-lg">
                      {step.desc}
                    </p>

                    <div className="mt-8 h-[2px] w-12 bg-[#741f2b] transition-all duration-500 group-hover:w-full" />
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12">
            <div className="relative overflow-hidden rounded-[30px] border border-[#741f2b]/50 bg-[#111010]">
              <div className="absolute right-[-10%] top-[-50%] h-[500px] w-[500px] rounded-full bg-[#741f2b]/15 blur-[120px]" />

              <div className="relative p-8 sm:p-12 lg:p-16">
                <div className="max-w-4xl">
                  <p className="text-sm font-black uppercase tracking-[0.22em] text-[#9a3341]">
                    HABLEMOS DE TU SITUACIÓN
                  </p>

                  <h2 className="mt-5 text-[clamp(2.8rem,6vw,6.5rem)] font-black leading-[0.88] tracking-[-0.07em] text-[#f4f0e8]">
                    Empieza por
                    <span className="text-[#9a3341]"> contarnos.</span>
                  </h2>

                  <p className="mt-7 max-w-2xl text-lg leading-relaxed text-[#a7a19b] sm:text-xl">
                    Comparte por WhatsApp qué ocurrió y qué información tienes
                    disponible. A partir de ahí podemos conocer la situación y
                    determinar el siguiente paso.
                  </p>

                  <div className="mt-9 flex flex-col gap-5 sm:flex-row sm:items-center">
                    <WhatsAppButton
                      variant="banner"
                      customText="Hablar por WhatsApp"
                    />

                    <div className="flex items-center gap-3 text-sm font-bold text-[#a7a19b]">
                      <div className="h-2 w-2 rounded-full bg-[#25D366]" />
                      Atención por WhatsApp
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-[#080808]">
        <div className="mx-auto flex w-full max-w-[1500px] flex-col gap-5 px-5 py-10 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">
          <div>
            <p className="text-lg font-black tracking-[0.12em] text-[#f4f0e8]">
              NEXUS <span className="text-[#9a3341]">RESGUARDO</span>
            </p>

            <p className="mt-2 text-sm text-[#a7a19b]">
              Recuperación y protección patrimonial.
            </p>
          </div>

          <p className="text-sm text-[#77716d]">
            © 2026 {siteData.name}. Todos los derechos reservados.
          </p>
        </div>
      </footer>

      <WhatsAppButton variant="floating" />
    </div>
  );
}
