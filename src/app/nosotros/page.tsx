"use client";

import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import { siteData } from "@/data/siteConfig";
import {
  ArrowUpRight,
  CheckCircle2,
  Eye,
  Lightbulb,
  MoveUpRight,
  Sparkles,
  Target,
  Users,
  Zap,
} from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Seguridad",
    text: "Explicamos cada situación de manera clara para que puedas comprender qué está ocurriendo y qué información es importante.",
  },
  {
    icon: Zap,
    title: "Respuesta",
    text: "Actuamos con sentido de urgencia cuando una situación requiere atención y seguimiento.",
  },
  {
    icon: Users,
    title: "Cercanía",
    text: "Escuchamos cada caso de manera individual y mantenemos una comunicación cercana durante el proceso.",
  },
  {
    icon: Lightbulb,
    title: "Confianza",
    text: "Trabajamos con información y experiencia para ayudarte a tomar decisiones con mayor seguridad.",
  },
];

export default function NosotrosPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080808] text-white">
      <Navbar />

      {/* HERO */}
      <section className="relative px-5 pb-10 pt-10 sm:px-8 sm:pt-12 lg:px-12 lg:pb-14 lg:pt-14">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            <div className="relative z-10">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#8f243d]/40 bg-[#8f243d]/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.18em] text-[#c96a7e]">
                <Sparkles className="h-4 w-4" />
                Nexus Resguardo
              </div>

              <h1 className="max-w-3xl text-4xl font-black leading-[0.94] tracking-[-0.045em] sm:text-5xl lg:text-7xl">
                Protegemos
                <span className="block text-[#8f243d]">lo que importa.</span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-[#aaa] sm:text-lg">
                Somos un equipo enfocado en brindar orientación y acompañamiento ante situaciones que pueden poner en riesgo tus recursos, operaciones o patrimonio.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#valores"
                  className="inline-flex min-h-[54px] items-center rounded-xl border border-[#343434] px-6 py-3 font-bold text-white transition duration-300 hover:border-[#8f243d] hover:bg-[#8f243d]/10"
                >
                  Lo que nos mueve
                </a>
              </div>
            </div>

            <div className="relative min-h-[350px] sm:min-h-[410px]">
              <div className="absolute right-0 top-5 h-[295px] w-[82%] overflow-hidden rounded-[2rem] border border-[#302a35] sm:h-[350px]">
                <img
                  src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="Equipo trabajando en conjunto"
                  className="h-full w-full object-cover grayscale-[15%] animate-[slowZoom_9s_ease-in-out_infinite_alternate] transition duration-[1200ms] hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
              </div>

              <div className="absolute bottom-2 left-0 z-10 w-[55%] overflow-hidden rounded-[1.5rem] border border-[#392d43] bg-[#171218] p-2 shadow-2xl sm:bottom-0 sm:w-[48%]">
                <div className="relative h-[190px] overflow-hidden rounded-[1.15rem] sm:h-[230px]">
                  <img
                    src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    alt="Tecnología y análisis"
                    className="h-full w-full object-cover animate-[photoFloat_7s_ease-in-out_infinite_alternate] transition duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#8f243d]/20 mix-blend-multiply" />
                </div>
              </div>

              <div className="absolute bottom-20 right-2 z-20 rounded-2xl border border-[#40364a] bg-[#111]/95 px-5 py-4 backdrop-blur-md sm:right-0">
                <div className="flex items-center gap-3">
                  <span className="h-3 w-3 animate-pulse rounded-full bg-[#25D366]" />
                  <span className="text-sm font-bold text-white">
                    Situación → Respuesta
                  </span>
                </div>
              </div>

              <div className="absolute left-[38%] top-0 z-20 hidden h-20 w-20 animate-[spin_14s_linear_infinite] rounded-full border border-[#8f243d]/50 sm:block" />
            </div>
          </div>
        </div>
      </section>

      {/* VISIÓN Y VALORES */}
      <section className="border-y border-[#292020] bg-[#0d0d0d] px-5 py-5 sm:px-8 lg:py-7">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-3 md:grid-cols-2">

            <article className="group relative overflow-hidden rounded-[1.4rem] border border-[#302629] bg-[#151111] p-5 animate-[visionFloat_6s_ease-in-out_infinite_alternate] transition duration-500 hover:-translate-y-3 hover:scale-[1.012] hover:border-[#8f243d]/70 sm:p-7">
              <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-[#8f243d]/10 blur-3xl transition duration-700 group-hover:bg-[#8f243d]/20" />

              <div className="relative">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#8f243d]/10 text-[#c96a7e] transition duration-500 group-hover:scale-110 group-hover:bg-[#8f243d] group-hover:text-white">
                  <Eye className="h-5 w-5" />
                </div>

                <p className="text-xs font-black uppercase tracking-[0.25em] text-[#c96a7e]">
                  Nuestra visión
                </p>

                <h2 className="mt-2 text-2xl font-black tracking-tight">
                  Proteger más allá del momento.
                </h2>

                <p className="mt-3 text-sm leading-6 text-[#929292]">
                  Buscamos construir una experiencia de atención donde la información, la comunicación y el acompañamiento permitan actuar con mayor claridad ante situaciones financieras complejas.
                </p>
              </div>
            </article>

            <article className="group relative overflow-hidden rounded-[1.4rem] border border-[#302629] bg-[#151111] p-5 animate-[visionFloatReverse_7s_ease-in-out_infinite_alternate] transition duration-500 hover:-translate-y-3 hover:scale-[1.012] hover:border-[#8f243d]/70 sm:p-7">
              <div className="absolute -bottom-16 -right-16 h-36 w-36 rounded-full bg-[#8f243d]/10 blur-3xl transition duration-700 group-hover:bg-[#8f243d]/20" />

              <div className="relative">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#8f243d]/10 text-[#c96a7e] transition duration-500 group-hover:scale-110 group-hover:bg-[#8f243d] group-hover:text-white">
                  <Sparkles className="h-5 w-5" />
                </div>

                <p className="text-xs font-black uppercase tracking-[0.25em] text-[#c96a7e]">
                  Nuestros valores
                </p>

                <h2 className="mt-2 text-2xl font-black tracking-tight">
                  Confianza antes que incertidumbre.
                </h2>

                <div className="mt-4 grid grid-cols-2 gap-2">
                  {[
                    "Seguridad",
                    "Confianza",
                    "Respuesta",
                    "Cercanía",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-[#302929] bg-[#0e0e0e] px-3 py-2 text-xs font-bold text-[#c8c8c8] transition duration-300 hover:-translate-y-1 hover:border-[#8f243d]/60 hover:text-white"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* QUIENES SOMOS */}
      <section
        id="quienes-somos"
        className="px-5 py-11 sm:px-8 lg:px-12 lg:py-14"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[1fr_0.9fr] lg:gap-12">
          <div className="relative">
            <div className="absolute -left-8 -top-8 h-32 w-32 rounded-full bg-[#8f243d]/15 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-[#302929]">
              <img
                src="https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Personas colaborando en un proyecto"
                className="aspect-[4/3] w-full object-cover animate-[slowZoom_11s_ease-in-out_infinite_alternate] transition duration-1000 hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#8f243d]/25 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-7 -right-4 max-w-[280px] rounded-2xl border border-[#403940] bg-[#151315] p-5 shadow-2xl sm:-right-8">
              <Eye className="mb-3 h-7 w-7 text-[#8f243d]" />
              <p className="text-lg font-black">
                Ver el panorama completo cambia las decisiones.
              </p>
            </div>
          </div>

          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#8f243d]">
              Quiénes somos
            </p>

            <h2 className="mt-5 text-3xl font-black leading-[1.02] tracking-[-0.04em] sm:text-4xl lg:text-5xl">
              Un equipo que
              <span className="block text-[#aaa]">responde cuando importa.</span>
            </h2>

            <div className="mt-8 space-y-5 text-lg leading-8 text-[#999]">
              <p>
                Nexus Resguardo nace con una idea sencilla: cuando una situación
                se vuelve complicada, necesitas información ordenada,
                comunicación clara y alguien que te ayude a entender el
                siguiente paso.
              </p>

              <p>
                Atendemos cada situación de manera personalizada, revisando la información disponible y ayudando a establecer una ruta de atención adecuada.
              </p>

              <p className="font-semibold text-white">
                Nuestro trabajo comienza escuchando tu situación y continúa con un acompañamiento claro durante el proceso.
              </p>
            </div>

            <div className="mt-9 flex items-center gap-3 text-sm font-bold text-[#c5c5c5]">
              <CheckCircle2 className="h-5 w-5 text-[#25D366]" />
              Protección · Respuesta · Atención personalizada
            </div>
          </div>
        </div>
      </section>

      {/* CINTA VISUAL */}
      <section className="overflow-hidden border-y border-[#252525] bg-[#111] py-5">
        <div className="flex min-w-max animate-[marquee_22s_linear_infinite] items-center gap-10 text-2xl font-black uppercase tracking-tight text-[#444] sm:text-4xl">
          <span>Proteger</span>
          <span className="text-[#8f243d]">✦</span>
          <span>Responder</span>
          <span>✦</span>
          <span>Orientar</span>
          <span className="text-[#8f243d]">✦</span>
          <span>Resguardar</span>
          <span>✦</span>
          <span>Proteger</span>
          <span className="text-[#8f243d]">✦</span>
          <span>Responder</span>
          <span>✦</span>
          <span>Orientar</span>
          <span className="text-[#8f243d]">✦</span>
          <span>Resguardar</span>
        </div>
      </section>

      {/* VALORES */}
      <section
        id="valores"
        className="px-5 py-11 sm:px-8 lg:px-12 lg:py-14"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-7 max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#8f243d]">
              Nuestra manera de trabajar
            </p>

            <h2 className="mt-5 text-3xl font-black tracking-[-0.04em] sm:text-4xl lg:text-5xl">
              Una atención construida alrededor de la confianza y la respuesta.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <article
                  key={value.title}
                  className="group relative overflow-hidden rounded-[1.7rem] border border-[#292929] bg-[#111] p-7 animate-[cardFloat_6s_ease-in-out_infinite_alternate] transition duration-500 hover:-translate-y-3 hover:border-[#64182b] sm:p-7"
                >
                  <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#8f243d]/10 blur-3xl transition duration-500 group-hover:bg-[#8f243d]/20" />

                  <div className="relative flex items-start justify-between gap-5">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#8f243d]/10 text-[#c96a7e] transition duration-500 group-hover:rotate-6 group-hover:bg-[#8f243d] group-hover:text-white">
                      <Icon className="h-7 w-7" />
                    </div>

                    <MoveUpRight className="h-6 w-6 text-[#444] transition duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#8f243d]" />
                  </div>

                  <h3 className="relative mt-8 text-2xl font-black sm:text-3xl">
                    {value.title}
                  </h3>

                  <p className="relative mt-4 max-w-xl text-base leading-7 text-[#888] sm:text-lg">
                    {value.text}
                  </p>

                  <div className="mt-8 h-px w-0 bg-[#8f243d] transition-all duration-700 group-hover:w-full" />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* COLLAGE FINAL */}
      <section className="px-5 pb-10 sm:px-8 lg:px-12 lg:pb-14">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[2rem] border border-[#302929] bg-[#101010]">
            <div className="grid min-h-[360px] lg:grid-cols-[1.15fr_0.85fr]">
              <div className="relative min-h-[350px] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="Equipo colaborando"
                  className="absolute inset-0 h-full w-full object-cover animate-[slowZoom_10s_ease-in-out_infinite_alternate] transition duration-[1400ms] hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-[#101010]" />
              </div>

              <div className="relative flex flex-col justify-center px-7 py-12 sm:px-12 lg:px-14">
                <div className="absolute right-10 top-10 h-24 w-24 rounded-full border border-[#8f243d]/30" />

                <p className="relative text-sm font-black uppercase tracking-[0.25em] text-[#8f243d]">
                  Estamos para ayudarte
                </p>

                <h2 className="relative mt-5 text-4xl font-black leading-tight tracking-[-0.035em] sm:text-5xl">
                  Tu situación merece ser atendida.
                </h2>

                <p className="relative mt-6 text-lg leading-8 text-[#8e8e8e]">
                  Cuéntanos qué está pasando. Escuchamos tu situación y te orientamos sobre los siguientes pasos.
                </p>

                <div className="relative mt-8">
                  <WhatsAppButton
                    variant="banner"
                    customText="Hablar con Nexus Resguardo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#252525] px-5 py-12 text-center sm:px-8">
        <p className="text-sm font-medium text-[#666]">
          © 2026 {siteData.name}. Todos los derechos reservados.
        </p>
      </footer>

      <WhatsAppButton variant="floating" />

      <style jsx global>{`
        @keyframes slowZoom {
          from {
            transform: scale(1);
          }
          to {
            transform: scale(1.07);
          }
        }

        @keyframes photoFloat {
          from {
            transform: translateY(0) scale(1);
          }
          to {
            transform: translateY(-8px) scale(1.045);
          }
        }

        @keyframes cardFloat {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(-5px);
          }
        }

        @keyframes visionFloat {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(-5px);
          }
        }

        @keyframes visionFloatReverse {
          from {
            transform: translateY(-3px);
          }
          to {
            transform: translateY(3px);
          }
        }

        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-30%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </main>
  );
}
