import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import { siteData } from "@/data/siteConfig";
import { ShieldCheck, CheckCircle2, FileSearch, Scale, FileText, ArrowLeftRight, Landmark, Lock } from "lucide-react";

export default function ServiciosPage() {
  return (
    <div className="min-h-screen bg-titanio-900 text-white font-sans">
      <Navbar />

      {/* CABECERA DE LA PÁGINA (TEXTOS GRANDES Y DESTACADOS) */}
      <section className="pt-14 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-rubi/10 border border-rubi/30 text-rubi text-base font-bold uppercase tracking-wider mb-8">
          <ShieldCheck className="w-6 h-6" />
          Servicios Especializados en México
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-8 tracking-tight leading-tight">
          Nuestras Áreas de Orientación y Diagnóstico
        </h1>
        <p className="text-2xl text-titanio-300 max-w-4xl mx-auto font-medium leading-relaxed">
          Estrategias integrales diseñadas para evaluar la viabilidad de recuperación, congelamiento preventivo y blindaje patrimonial ante incidentes financieros dentro del sistema bancario nacional.
        </p>
      </section>

      {/* DETALLE DE SERVICIOS - FOTOS CONECTADAS DIRECTAMENTE AL CONCEPTO */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-20">
        
        {/* TARJETA 1: RECUPERACIÓN PATRIMONIAL */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-titanio-800 p-8 sm:p-10 rounded-3xl border border-titanio-700 shadow-2xl">
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="h-64 sm:h-72 rounded-2xl overflow-hidden relative border border-titanio-700 shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=800&auto=format&fit=crop" 
                alt="Documentos bancarios y análisis de transferencias" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-titanio-900/80 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 bg-titanio-900/90 text-white font-bold text-sm px-3 py-1.5 rounded-lg border border-titanio-700 flex items-center gap-2">
                <ArrowLeftRight className="w-4 h-4 text-rubi" /> Trazabilidad SPEI
              </span>
            </div>

            {/* GRÁFICO TIPO PANEL */}
            <div className="p-5 rounded-2xl bg-titanio-900/90 border border-titanio-700/80 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-rubi block mb-1">Estatus del Análisis</span>
                <span className="text-lg font-black text-white">Rastreo Interbancario $ MXN</span>
              </div>
              <span className="text-sm font-bold text-green-400 bg-green-950/60 border border-green-500/30 px-3 py-1 rounded-full">Activo</span>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl font-black mb-5 text-white">{siteData.services[0].title}</h2>
            <p className="text-titanio-300 text-xl mb-8 leading-relaxed font-normal">
              {siteData.services[0].description}
            </p>
            <h3 className="text-base font-bold uppercase tracking-wider text-rubi mb-4">Acciones y Alcance Técnico:</h3>
            <ul className="space-y-4 mb-8">
              {siteData.services[0].details.map((detail, i) => (
                <li key={i} className="flex items-start gap-3.5 text-titanio-300 font-medium text-lg">
                  <CheckCircle2 className="w-6 h-6 text-rubi mt-1 flex-shrink-0" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
            <div>
              <WhatsAppButton variant="banner" customText={`Consultar sobre ${siteData.services[0].title}`} />
            </div>
          </div>
        </div>

        {/* TARJETA 2: APOYO CONTRA FRAUDES DIGITALES (IMAGEN: ANÁLISIS DE BROKERS Y MERCADOS DE TRADING) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-titanio-800 p-8 sm:p-10 rounded-3xl border border-titanio-700 shadow-2xl lg:flex-row-reverse">
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="h-64 sm:h-72 rounded-2xl overflow-hidden relative border border-titanio-700 shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop" 
                alt="Validación de brokers y auditoría de plataformas financieras" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-titanio-900/80 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 bg-titanio-900/90 text-white font-bold text-sm px-3 py-1.5 rounded-lg border border-titanio-700 flex items-center gap-2">
                <Landmark className="w-4 h-4 text-rubi" /> Diagnóstico de Entidades
              </span>
            </div>

            {/* GRÁFICO TIPO PANEL */}
            <div className="p-5 rounded-2xl bg-titanio-900/90 border border-titanio-700/80 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-rubi block mb-1">Verificación Regulatoria</span>
                <span className="text-lg font-black text-white">Validación de Brokers & Apps</span>
              </div>
              <span className="text-sm font-bold text-rubi bg-rubi/10 border border-rubi/30 px-3 py-1 rounded-full">Antifraude</span>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl font-black mb-5 text-white">{siteData.services[1].title}</h2>
            <p className="text-titanio-300 text-xl mb-8 leading-relaxed font-normal">
              {siteData.services[1].description}
            </p>
            <h3 className="text-base font-bold uppercase tracking-wider text-rubi mb-4">Acciones y Alcance Técnico:</h3>
            <ul className="space-y-4 mb-8">
              {siteData.services[1].details.map((detail, i) => (
                <li key={i} className="flex items-start gap-3.5 text-titanio-300 font-medium text-lg">
                  <CheckCircle2 className="w-6 h-6 text-rubi mt-1 flex-shrink-0" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
            <div>
              <WhatsAppButton variant="banner" customText={`Consultar sobre ${siteData.services[1].title}`} />
            </div>
          </div>
        </div>

        {/* TARJETA 3: PROTECCIÓN Y BLINDAJE DE ACTIVOS (IMAGEN: BÓVEDA Y RESGUARDO DE CAPITAL) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-titanio-800 p-8 sm:p-10 rounded-3xl border border-titanio-700 shadow-2xl">
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="h-64 sm:h-72 rounded-2xl overflow-hidden relative border border-titanio-700 shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?q=80&w=800&auto=format&fit=crop" 
                alt="Bóveda de resguardo y protección de cuentas nacionales" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-titanio-900/80 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 bg-titanio-900/90 text-white font-bold text-sm px-3 py-1.5 rounded-lg border border-titanio-700 flex items-center gap-2">
                <Lock className="w-4 h-4 text-rubi" /> Blindaje de Capital $ MXN
              </span>
            </div>

            {/* GRÁFICO TIPO PANEL */}
            <div className="p-5 rounded-2xl bg-titanio-900/90 border border-titanio-700/80 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-rubi block mb-1">Protección de Efectivo</span>
                <span className="text-lg font-black text-white">Resguardo & Cuentas Nacionales</span>
              </div>
              <span className="text-sm font-bold text-blue-400 bg-blue-950/60 border border-blue-500/30 px-3 py-1 rounded-full">Protegido</span>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl font-black mb-5 text-white">{siteData.services[2].title}</h2>
            <p className="text-titanio-300 text-xl mb-8 leading-relaxed font-normal">
              {siteData.services[2].description}
            </p>
            <h3 className="text-base font-bold uppercase tracking-wider text-rubi mb-4">Acciones y Alcance Técnico:</h3>
            <ul className="space-y-4 mb-8">
              {siteData.services[2].details.map((detail, i) => (
                <li key={i} className="flex items-start gap-3.5 text-titanio-300 font-medium text-lg">
                  <CheckCircle2 className="w-6 h-6 text-rubi mt-1 flex-shrink-0" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
            <div>
              <WhatsAppButton variant="banner" customText={`Consultar sobre ${siteData.services[2].title}`} />
            </div>
          </div>
        </div>

      </section>

      {/* METODOLOGÍA Y DOCUMENTACIÓN */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-titanio-700">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-5">¿Qué Necesitamos Para Analizar Tu Caso?</h2>
          <p className="text-xl text-titanio-300 max-w-3xl mx-auto font-medium">
            Para iniciar un diagnóstico acertado, recopilamos la evidencia preliminar que permita trazar la ruta de atención.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-titanio-800 p-8 rounded-2xl border border-titanio-700">
            <FileSearch className="w-12 h-12 text-rubi mb-5" />
            <h3 className="text-2xl font-bold mb-3">Comprobantes y Claves SPEI</h3>
            <p className="text-titanio-300 text-base leading-relaxed">
              Fichas de depósito, transferencias interbancarias o comprobantes de pago generados durante la transacción en México.
            </p>
          </div>

          <div className="bg-titanio-800 p-8 rounded-2xl border border-titanio-700">
            <FileText className="w-12 h-12 text-rubi mb-5" />
            <h3 className="text-2xl font-bold mb-3">Evidencia de Comunicación</h3>
            <p className="text-titanio-300 text-base leading-relaxed">
              Capturas de pantalla de chats, correos electrónicos, URLs de plataformas o números telefónicos involucrados.
            </p>
          </div>

          <div className="bg-titanio-800 p-8 rounded-2xl border border-titanio-700">
            <Scale className="w-12 h-12 text-rubi mb-5" />
            <h3 className="text-2xl font-bold mb-3">Estado Actual de la Cuenta</h3>
            <p className="text-titanio-300 text-base leading-relaxed">
              Notificaciones de bloqueo, accesos denegados o estatus del panel de usuario en la plataforma correspondiente.
            </p>
          </div>
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
