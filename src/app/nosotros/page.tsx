import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import { siteData } from "@/data/siteConfig";
import { ShieldCheck, Award, Target, Users, Scale, Lock } from "lucide-react";

export default function NosotrosPage() {
  return (
    <div className="min-h-screen bg-titanio-900 text-white font-sans">
      <Navbar />

      {/* CABECERA DE LA PÁGINA */}
      <section className="pt-14 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-rubi/10 border border-rubi/30 text-rubi text-base font-bold uppercase tracking-wider mb-8">
          <ShieldCheck className="w-6 h-6" />
          Sobre Nuestra Firma
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-8 tracking-tight leading-tight">
          Compromiso Técnico y Legal en México
        </h1>
        <p className="text-2xl text-titanio-300 max-w-4xl mx-auto font-medium leading-relaxed">
          Somos un equipo multidisciplinario especializado en la orientación, diagnóstico técnico y trazabilidad bancaria para la protección del patrimonio financiero de las familias y empresas mexicanas.
        </p>
      </section>

      {/* MISIÓN Y VISIÓN */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-titanio-800 p-8 sm:p-10 rounded-3xl border border-titanio-700 shadow-xl">
          <div className="p-4 rounded-2xl bg-rubi/10 border border-rubi/30 text-rubi w-fit mb-6">
            <Target className="w-10 h-10" />
          </div>
          <h2 className="text-3xl font-black mb-4">Nuestra Misión</h2>
          <p className="text-titanio-300 text-lg leading-relaxed font-normal">
            Brindar respaldo estratégico y oportuno ante incidentes bancarios y fraudes digitales en el entorno financiero mexicano. Trazamos rutas claras de diagnóstico y recolección de evidencias preliminares para actuar eficientemente ante las instancias correspondientes.
          </p>
        </div>

        <div className="bg-titanio-800 p-8 sm:p-10 rounded-3xl border border-titanio-700 shadow-xl">
          <div className="p-4 rounded-2xl bg-rubi/10 border border-rubi/30 text-rubi w-fit mb-6">
            <Award className="w-10 h-10" />
          </div>
          <h2 className="text-3xl font-black mb-4">Nuestra Visión</h2>
          <p className="text-titanio-300 text-lg leading-relaxed font-normal">
            Consolidarnos como el referente de orientación técnica y prevención patrimonial más confiable en México, elevando el nivel de respuesta de los usuarios frente a vulnerabilidades en el ecosistema financiero y bancario nacional.
          </p>
        </div>
      </section>

      {/* PILARES FUNDAMENTALES */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-titanio-700">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-5">Nuestros Pilares Operativos</h2>
          <p className="text-xl text-titanio-300 max-w-3xl mx-auto font-medium">
            Fundamentamos cada análisis en la confidencialidad, el apego regulatorio y la máxima atención al detalle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-titanio-800 p-8 rounded-2xl border border-titanio-700">
            <Lock className="w-12 h-12 text-rubi mb-5" />
            <h3 className="text-2xl font-bold mb-3">Confidencialidad Absoluta</h3>
            <p className="text-titanio-300 text-base leading-relaxed">
              Toda la información y documentación proporcionada es manejada bajo estrictos protocolos de protección de datos personales.
            </p>
          </div>

          <div className="bg-titanio-800 p-8 rounded-2xl border border-titanio-700">
            <Scale className="w-12 h-12 text-rubi mb-5" />
            <h3 className="text-2xl font-bold mb-3">Marco Legal Nacional</h3>
            <p className="text-titanio-300 text-base leading-relaxed">
              Orientación alineada con las normativas bancarias del Banco de México (Banxico) y procedimientos del sistema interbancario SPEI.
            </p>
          </div>

          <div className="bg-titanio-800 p-8 rounded-2xl border border-titanio-700">
            <Users className="w-12 h-12 text-rubi mb-5" />
            <h3 className="text-2xl font-bold mb-3">Atención Personalizada</h3>
            <p className="text-titanio-300 text-base leading-relaxed">
              Analizamos de forma individual cada caso para determinar la viabilidad real y las acciones preventivas específicas.
            </p>
          </div>
        </div>
      </section>

      {/* BANNER DE CONTACTO */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center bg-titanio-800 rounded-3xl border border-titanio-700 mb-16">
        <h2 className="text-3xl sm:text-4xl font-black mb-4">¿Requieres Asesoría Inmediata?</h2>
        <p className="text-xl text-titanio-300 max-w-2xl mx-auto mb-8 font-medium">
          Habla hoy mismo con un especialista y recibe una evaluación inicial de tu situación financiera.
        </p>
        <div className="max-w-md mx-auto">
          <WhatsAppButton variant="banner" customText="Iniciar Evaluación de Caso" />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-titanio-700 text-center text-lg text-titanio-300 font-medium">
        <p>© 2026 {siteData.name}. Recuperación Patrimonial y Soporte Antifraude Digital en México.</p>
      </footer>

      <WhatsAppButton variant="floating" />
    </div>
  );
}
