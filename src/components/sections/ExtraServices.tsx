import { Sparkles, Ticket, ArrowUpRight, CheckCircle2, Sliders, QrCode } from "lucide-react";

export default function ExtraServices() {
  const services = [
    {
      id: "hacemos-tu-evento",
      badge: "PRODUCCIÓN INTEGRAL",
      badgeColor: "bg-[#E8D43F]/15 text-[#E8D43F] border-[#E8D43F]/30",
      accentColor: "#E8D43F",
      title: "Hacemos Tu Evento",
      tagline: "Sonido, Iluminación & Técnica Integral para Eventos",
      url: "https://www.hacemostuevento.com.ar/",
      displayUrl: "hacemostuevento.com.ar",
      icon: Sliders,
      description:
        "Solución completa de producción técnica y logística para eventos sociales, corporativos, boliches y festivales masivos. Equipamiento de sonido profesional de alta potencia, sistemas de iluminación robótica de última generación, pantallas LED gigantes, ambientación escénica y coordinación general para que no tengas que preocuparte por nada.",
      highlights: [
        "Sonido profesional & sistemas de audio de alta gama",
        "Iluminación robótica, efectos especiales y láser",
        "Pantallas LED de alta resolución para shows y visuales",
        "Ambientación, estructuras y técnica de escenario integral",
      ],
      btnText: "Visitar Hacemos Tu Evento",
      btnClass:
        "bg-[#E8D43F] hover:bg-[#F2E263] text-black shadow-[#E8D43F]/20",
    },
    {
      id: "panda-access",
      badge: "TICKETING & CONTROL DE ACCESOS",
      badgeColor: "bg-[#F46753]/15 text-[#F46753] border-[#F46753]/30",
      accentColor: "#F46753",
      title: "Panda Access",
      tagline: "Venta de Entradas Oficiales & Accesos QR 100% Digitales",
      url: "https://pandaaccess.com.ar/",
      displayUrl: "pandaaccess.com.ar",
      icon: Ticket,
      description:
        "La plataforma directa y segura de venta de entradas y gestión de accesos pensada para recitales, fiestas, productoras y clubes. Validación ultrarrápida por código QR en puerta (en milisegundos), cobros transparentes e inmediatos, prevención de reventa o falsificación, y métricas de taquilla en tiempo real.",
      highlights: [
        "Venta de tickets 100% digital, directa y segura",
        "Control de accesos con escaneo de código QR en puerta",
        "Cero filas, cero demoras y máxima protección antifraude",
        "Panel en vivo para productores con métricas y recaudación",
      ],
      btnText: "Visitar Panda Access",
      btnClass:
        "bg-[#F46753] hover:bg-[#ff7563] text-white shadow-[#F46753]/20",
    },
  ];

  return (
    <section
      id="servicios"
      className="py-20 sm:py-28 bg-[#15130F] text-[#FAF6EE] border-t border-[#2C261E] relative overflow-hidden"
    >
      {/* Background glow accents */}
      <div className="absolute top-0 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#E8D43F]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 translate-y-1/2 w-96 h-96 bg-[#F46753]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <div className="revelar" style={{ "--i": 0 } as React.CSSProperties}>
            <span className="pincelada text-xs sm:text-sm font-black tracking-widest text-[#E8D43F] uppercase block mb-2 font-mono">
              ECOSISTEMA PANDA • PRODUCCIÓN & TICKETING
            </span>
          </div>

          <div className="revelar" style={{ "--i": 1 } as React.CSSProperties}>
            <h2 className="pincelada letra-bandera text-3xl sm:text-5xl lg:text-6xl text-[#FAF6EE] font-black uppercase tracking-tight">
              Servicios Extra
            </h2>
          </div>

          <div className="revelar" style={{ "--i": 2 } as React.CSSProperties}>
            <p className="text-base sm:text-lg text-zinc-300 max-w-3xl leading-relaxed mt-4 font-normal">
              Además del show en vivo y los DJ sets de El Panda, contamos con un
              ecosistema de plataformas aliadas para resolver cada etapa de tu
              evento: desde la producción técnica integral (sonido, luces y
              pantallas) hasta la plataforma oficial de venta de entradas y
              control de accesos digital.
            </p>
          </div>
        </div>

        {/* 2-Column High-Impact Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {services.map((srv, idx) => {
            const Icon = srv.icon;

            return (
              <div
                key={srv.id}
                className="revelar h-full"
                style={{ "--i": idx + 3 } as React.CSSProperties}
              >
                <div className="iza h-full rounded-2xl sm:rounded-3xl bg-[#0C0B09] border border-[#2C261E] hover:border-zinc-500 p-7 sm:p-10 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-[8px_8px_0_rgba(0,0,0,0.85)] group relative">
                  <div>
                    {/* Top Row: Badge + Domain */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                      <span
                        className={`px-3 py-1 rounded-full text-[11px] font-black tracking-wider uppercase border font-mono ${srv.badgeColor}`}
                      >
                        {srv.badge}
                      </span>
                      <span className="text-xs text-zinc-400 font-mono tracking-wide flex items-center gap-1">
                        {srv.displayUrl}
                        <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
                      </span>
                    </div>

                    {/* Icon + Title block */}
                    <div className="flex items-start gap-4 mb-4">
                      <div
                        className="w-14 h-14 rounded-2xl bg-[#15130F] border border-[#2C261E] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform"
                        style={{ color: srv.accentColor }}
                      >
                        <Icon className="w-7 h-7 stroke-[1.8]" />
                      </div>
                      <div>
                        <h3 className="letra-bandera text-2xl sm:text-3xl lg:text-4xl text-[#FAF6EE] tracking-tight group-hover:text-[#E8D43F] transition-colors leading-tight">
                          {srv.title}
                        </h3>
                        <p
                          className="text-xs sm:text-sm font-bold uppercase tracking-wide mt-1"
                          style={{ color: srv.accentColor }}
                        >
                          {srv.tagline}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mt-4 mb-6">
                      {srv.description}
                    </p>

                    {/* Highlights List */}
                    <div className="space-y-2.5 pt-2 pb-4 border-t border-[#2C261E]/70">
                      {srv.highlights.map((h, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 font-medium"
                        >
                          <CheckCircle2
                            className="w-4 h-4 shrink-0 mt-0.5"
                            style={{ color: srv.accentColor }}
                          />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Action Button */}
                  <div className="pt-6 mt-4 border-t border-[#2C261E]">
                    <a
                      href={srv.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-black text-xs sm:text-sm tracking-wider uppercase transition-all shadow-lg hover:scale-105 active:scale-95 cursor-pointer ${srv.btnClass}`}
                    >
                      <span>{srv.btnText}</span>
                      <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
