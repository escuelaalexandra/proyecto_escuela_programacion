import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import { siteData } from "@/data/siteConfig";
import { Mail, MapPin, Clock, MessageSquare, ShieldAlert, PhoneCall, Headphones } from "lucide-react";

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-titanio-900 text-white font-sans">
      <Navbar />

      {/* CABECERA */}
      <section className="pt-14 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-rubi/10 border border-rubi/30 text-rubi text-base font-bold uppercase tracking-wider mb-8">
          <MessageSquare className="w-6 h-6" />
          Atención Directa y Evaluación de Casos
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-8 tracking-tight leading-tight">
          Ponte en Contacto con Nuestros Especialistas
        </h1>
        <p className="text-2xl text-titanio-300 max-w-4xl mx-auto font-medium leading-relaxed">
          Atendemos de manera confidencial y prioritaria solicitudes de diagnóstico por transferencias SPEI retenidas, aclaración de fraudes y protección de activos en México.
        </p>
      </section>

      {/* SECCIÓN PRINCIPAL DE CONTACTO */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* TARJETA DE ACCIÓN RÁPIDA CON IMAGEN */}
        <div className="lg:col-span-7 bg-titanio-800 p-8 sm:p-12 rounded-3xl border border-titanio-700 shadow-2xl flex flex-col justify-between gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 font-bold text-sm mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
              Canal Oficial Inmediato
            </div>

            {/* IMAGEN DE SOPORTE / ATENCIÓN TÉCNICA */}
            <div className="h-56 sm:h-64 rounded-2xl overflow-hidden relative border border-titanio-700 mb-8 shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop" 
                alt="Centro de atención y soporte legal en México" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-titanio-900/90 via-titanio-900/30 to-transparent" />
              <span className="absolute bottom-4 left-4 bg-titanio-900/90 text-white font-bold text-sm px-3.5 py-2 rounded-lg border border-titanio-700 flex items-center gap-2">
                <Headphones className="w-4 h-4 text-rubi" /> Respuesta Inmediata Nacional
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black mb-6">Inicia tu Diagnóstico por WhatsApp</h2>
            <p className="text-titanio-300 text-lg leading-relaxed mb-8 font-normal">
              Para garantizar una respuesta ágil y poder evaluar tus comprobantes de pago, folios SPEI o chats con la entidad bancaria, nuestro canal prioritario es nuestra línea de WhatsApp institucional.
            </p>
            
            <div className="space-y-4 mb-2">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-titanio-900/60 border border-titanio-700">
                <ShieldAlert className="w-6 h-6 text-rubi mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-white text-base">Atención por Incidentes Recientes</h3>
                  <p className="text-titanio-300 text-sm">Si tu transferencia o bloqueo ocurrió en las últimas 72 horas, notifícalo de inmediato para priorizar tu folio.</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <WhatsAppButton variant="banner" customText="Contactar por WhatsApp Ahora" />
          </div>
        </div>

        {/* INFORMACIÓN DE OFICINA Y HORARIOS */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-titanio-800 p-8 rounded-3xl border border-titanio-700 shadow-xl space-y-6">
            <h3 className="text-2xl font-black text-white mb-6">Información Operativa</h3>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-rubi/10 border border-rubi/30 text-rubi">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-white text-lg">Horario de Atención</h4>
                <p className="text-titanio-300 text-base">Lunes a Viernes: 09:00 - 18:00 hrs (CDMX)</p>
                <p className="text-titanio-300 text-base">Sábados: 09:00 - 14:00 hrs (CDMX)</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-rubi/10 border border-rubi/30 text-rubi">
                <PhoneCall className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-white text-lg">Línea Directa / WhatsApp</h4>
                <p className="text-titanio-300 text-base font-semibold">{siteData.whatsappNumberFormatted}</p>
              </div>
            </div>



            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-rubi/10 border border-rubi/30 text-rubi">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-white text-lg">Cobertura</h4>
                <p className="text-titanio-300 text-base">República Mexicana (Atención remota y representación nacional ante el sistema financiero)</p>
              </div>
            </div>
          </div>

          <div className="bg-titanio-800/80 p-6 rounded-2xl border border-titanio-700 text-sm text-titanio-300 leading-relaxed">
            <span className="font-bold text-white block mb-1">Aviso de Privacidad y Seguridad:</span>
            Ningún agente de {siteData.name} te solicitará contraseñas bancarias, NIPs ni tokens de seguridad de tus aplicaciones.
          </div>
        </div>

      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-titanio-700 text-center text-lg text-titanio-300 font-medium mt-16">
        <p>© 2026 {siteData.name}. Recuperación Patrimonial y Soporte Antifraude Digital en México.</p>
      </footer>

      <WhatsAppButton variant="floating" />
    </div>
  );
}
