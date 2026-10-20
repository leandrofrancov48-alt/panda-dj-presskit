import { UPCOMING_EVENTS } from "@/data/events";
import { Ticket, Calendar, MapPin, ExternalLink, ShieldCheck, Clock } from "lucide-react";

export default function TourDates() {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "AVAILABLE":
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Entradas Disponibles
          </span>
        );
      case "FEW_LEFT":
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-[#E8D43F]/20 text-[#F2E263] border border-[#E8D43F]/40">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E8D43F] animate-ping" />
            Últimos Lugares
          </span>
        );
      case "SOLD_OUT":
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-red-500/15 text-red-400 border border-red-500/30">
            Agotado (Sold Out)
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-[#15130F] text-[#8F8270] border border-[#2C261E]">
            Próximamente
          </span>
        );
    }
  };

  return (
    <section
      id="fechas"
      className="relative scroll-mt-20 py-[clamp(4.5rem,9vw,8rem)] bg-[#0C0B09] border-t border-[#2C261E]"
    >
      <div className="mx-auto max-w-[1700px] px-4 sm:px-6 lg:px-10">
        {/* Header with Pincelada */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="revelar" style={{ "--i": 0 } as React.CSSProperties}>
              <div className="iza inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#15130F] border border-[#E8D43F]/30 text-[#E8D43F] text-xs font-black tracking-wider uppercase mb-3">
                <Calendar className="w-3.5 h-3.5" />
                <span>Gira & Shows en Vivo</span>
              </div>
            </div>

            <h2 className="flex flex-col">
              <div className="revelar" style={{ "--i": 1 } as React.CSSProperties}>
                <span className="pincelada letra-bandera text-[clamp(2.6rem,7.5vw,6rem)] text-[#FAF6EE]">
                  PRÓXIMAS FECHAS
                </span>
              </div>
            </h2>

            <div className="revelar" style={{ "--i": 2 } as React.CSSProperties}>
              <p className="iza mt-2 text-base sm:text-lg font-bold text-[#CEC1AD]">
                Entradas oficiales con QR instantáneo a través de <strong className="text-[#E8D43F]">Panda Access</strong>.
              </p>
            </div>
          </div>

          {/* Ticketera badge with Iza */}
          <div className="revelar" style={{ "--i": 2 } as React.CSSProperties}>
            <div className="iza flex items-center gap-3 p-4 rounded-2xl bg-[#15130F] border border-[#2C261E]">
              <div className="w-10 h-10 rounded-xl bg-[#E8D43F]/20 border border-[#E8D43F]/40 flex items-center justify-center text-[#E8D43F] shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-xs font-black text-[#FAF6EE] flex items-center gap-1.5 uppercase">
                  Ticketing Oficial: <span className="text-[#E8D43F]">Panda Access</span>
                </div>
                <p className="text-[11px] text-[#8F8270] font-sans">
                  Acceso con QR seguro y Mercado Pago
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Events Grid Staggered on Scroll */}
        <div className="space-y-4">
          {UPCOMING_EVENTS.map((evt, idx) => {
            const isSoldOut = evt.status === "SOLD_OUT";

            return (
              <div
                key={evt.id}
                className="revelar"
                style={{ "--i": idx + 1 } as React.CSSProperties}
              >
                <div className="iza group relative rounded-2xl border transition-all duration-300 p-5 sm:p-7 flex flex-col md:flex-row md:items-center justify-between gap-6 bg-[#15130F] border-[#2C261E] hover:border-[#E8D43F] hover:shadow-xl">
                  {/* Date & Info */}
                  <div className="flex items-center gap-5 sm:gap-6">
                    {/* Big Date Stamp */}
                    <div className="flex flex-col items-center justify-center w-16 sm:w-20 h-16 sm:h-20 rounded-2xl bg-[#0C0B09] border border-[#453B2F] group-hover:border-[#E8D43F] transition-colors shrink-0">
                      <span className="text-2xl sm:text-3xl font-black text-[#E8D43F] leading-none">
                        {evt.displayDay}
                      </span>
                      <span className="text-xs font-extrabold text-[#FAF6EE] uppercase tracking-wider mt-1">
                        {evt.displayMonth}
                      </span>
                    </div>

                    {/* Title & Location */}
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-lg sm:text-2xl font-black text-[#FAF6EE] uppercase tracking-tight group-hover:text-[#E8D43F] transition-colors">
                          {evt.title}
                        </h3>
                        {evt.featured && (
                          <span className="px-2.5 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-[#E8D43F] text-black">
                            Destacado
                          </span>
                        )}
                      </div>
                      {evt.subtitle && (
                        <p className="text-xs sm:text-sm text-[#CEC1AD] font-medium">
                          {evt.subtitle}
                        </p>
                      )}
                      <div className="flex flex-wrap items-center gap-3 pt-1 text-xs text-[#8F8270]">
                        <span className="flex items-center gap-1 text-[#CEC1AD] font-bold">
                          <MapPin className="w-3.5 h-3.5 text-[#E8D43F]" />
                          {evt.venue} · {evt.city}
                        </span>
                        {evt.doorsOpen && (
                          <span className="flex items-center gap-1 font-mono text-[#8F8270]">
                            <Clock className="w-3.5 h-3.5 text-[#8F8270]" />
                            Puerta: {evt.doorsOpen} hs
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Status & CTA */}
                  <div className="flex items-center justify-between md:justify-end gap-4 pt-3 md:pt-0 border-t md:border-t-0 border-[#2C261E]">
                    <div>{getStatusBadge(evt.status)}</div>

                    {isSoldOut ? (
                      <button
                        disabled
                        className="px-6 py-3 rounded-full text-xs font-black uppercase tracking-wider bg-[#201C16] text-[#8F8270] cursor-not-allowed border border-[#2C261E]"
                      >
                        Agotado
                      </button>
                    ) : (
                      <a
                        href={evt.ticketUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 rounded-full text-xs font-black uppercase tracking-wider bg-[#E8D43F] hover:bg-[#F2E263] text-black transition-all shadow-lg shadow-[#E8D43F]/20 hover:scale-105 active:scale-95"
                      >
                        <Ticket className="w-4 h-4 stroke-[2.5]" />
                        <span>Comprar Entradas</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
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
