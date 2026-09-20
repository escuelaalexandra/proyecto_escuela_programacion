import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import { siteData } from "@/data/siteConfig";
import { ShieldAlert, ShieldCheck, CheckCircle2, TrendingUp, Landmark, ArrowLeftRight, UserX } from "lucide-react";

export default function Home() {
  // Función para asignar el ícono adecuado según el caso
  const getCaseIcon = (type: string) => {
    switch (type) {
      case "trending":
        return <TrendingUp className="w-6 h-6" />;
      case "bank":
        return <Landmark className="w-6 h-6" />;
      case "transfer":
        return <ArrowLeftRight className="w-6 h-6" />;
      case "user":
        return <UserX className="w-6 h-6" />;
      default:
        return <ShieldCheck className="w-6 h-6" />;
    }
  };

  return (
    <div className="min-h-screen bg-titanio-900 text-white font-sans">
      <Navbar />

      {/* SECCIÓN HERO */}
      <section className="relative pt-10 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rubi/10 border border-rubi/30 text-rubi text-sm font-bold uppercase tracking-wider mb-6">
              <ShieldAlert className="w-5 h-5" />
              {siteData.hero.badge}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-6">
              {siteData.hero.title}
            </h1>
            
            <p className="text-xl text-titanio-300 mb-8 leading-relaxed font-medium">
              {siteData.hero.description}
            </p>

            <div className="mb-8">
              <WhatsAppButton variant="banner" customText={siteData.hero.ctaButton} />
            </div>
          </div>

          {/* IMAGEN PRINCIPAL HERO */}
          <div className="relative rounded-2xl overflow-hidden border border-titanio-700 shadow-2xl group">
            <img 
              src={siteData.hero.imageUrl} 
              alt="Recuperación Patrimonial y Antifraude" 
              className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-titanio-900 via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center gap-3 bg-titanio-800/90 backdrop-blur-md p-4 rounded-xl border border-titanio-700">
              <ShieldCheck className="w-8 h-8 text-rubi flex-shrink-0" />
              <p className="text-base text-titanio-300 font-semibold">
                Asistencia especializada en recuperación de activos y prevención de fraudes.
              </p>
            </div>
          </div>

        </div>

        {/* ESTADÍSTICAS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto mt-16 pt-10 border-t border-titanio-700">
          {siteData.stats.map((stat, index) => (
            <div key={index} className="p-6 rounded-2xl bg-titanio-800 border border-titanio-700 text-center">
              <div className={`text-4xl sm:text-5xl font-black ${stat.highlight ? 'text-rubi' : 'text-white'}`}>
                {stat.value}
              </div>
              <div className="text-base font-semibold text-titanio-300 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ÁREAS DE SERVICIO (SIN BOTONES REPETIDOS Y CON IMÁGENES REALES) */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Áreas de Recuperación y Protección Patrimonial</h2>
          <p className="text-xl text-titanio-300 max-w-3xl mx-auto font-medium">
            Conoce cómo te orientamos según el tipo de incidente o vulneración que hayas experimentado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteData.services.map((service) => (
            <div key={service.id} className="rounded-2xl bg-titanio-800 border border-titanio-700 overflow-hidden hover:border-rubi/50 transition-all flex flex-col justify-between p-2">
              <div>
                <div className="h-52 overflow-hidden rounded-xl relative mb-6">
                  <img 
                    src={service.imageUrl} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="px-4 pb-4">
                  <h3 className="text-2xl font-bold mb-3 text-white">{service.title}</h3>
                  <p className="text-base text-titanio-300 mb-6 leading-relaxed font-normal">
                    {service.description}
                  </p>
                  
                  {/* PUNTOS DETALLADOS */}
                  <div className="space-y-2 border-t border-titanio-700 pt-4">
                    {service.details.map((detail, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-titanio-300">
                        <CheckCircle2 className="w-4 h-4 text-rubi mt-0.5 flex-shrink-0" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CASOS FÁCILES DE IDENTIFICAR (DIVERSIFICADOS CON ÍCONOS ESPECÍFICOS) */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-titanio-700/60">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Situaciones e Incidentes Atendidos</h2>
          <p className="text-xl text-titanio-300 max-w-2xl mx-auto font-medium">
            Brindamos orientación técnica en diversas modalidades de afectación patrimonial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {siteData.casesHandled.map((item, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-titanio-800 border border-titanio-700 flex items-start gap-4 hover:border-rubi/40 transition-colors">
              <div className="p-3 rounded-xl bg-rubi/10 border border-rubi/30 text-rubi flex-shrink-0">
                {getCaseIcon(item.icon)}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-titanio-300 text-base leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESO EN 3 PASOS */}
      <section className="py-16 bg-titanio-800/40 border-y border-titanio-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold">Proceso Inmediato de Atención</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {siteData.steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center bg-titanio-800 p-8 rounded-2xl border border-titanio-700">
                <div className="w-16 h-16 rounded-2xl bg-rubi text-white font-black text-3xl flex items-center justify-center mb-6 shadow-lg shadow-rubi/20">
                  {step.number}
                </div>
                <h3 className="font-bold text-2xl mb-3">{step.title}</h3>
                <p className="text-base text-titanio-300 leading-relaxed font-medium">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 border-t border-titanio-700 text-center text-base text-titanio-300 font-medium">
        <p>© 2026 {siteData.name}. Recuperación Patrimonial y Soporte Antifraude Digital.</p>
      </footer>

      <WhatsAppButton variant="floating" />
    </div>
  );
}
