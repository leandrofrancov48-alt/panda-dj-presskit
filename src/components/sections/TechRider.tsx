import { TECH_RIDER } from "@/data/rider";
import { Sliders, Disc3, Volume2, Mic, Zap, Sparkles, Download, AlertCircle } from "lucide-react";

export default function TechRider() {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Disc3":
        return <Disc3 className="w-5 h-5 text-amber-400" />;
      case "Volume2":
        return <Volume2 className="w-5 h-5 text-amber-400" />;
      case "Mic":
        return <Mic className="w-5 h-5 text-amber-400" />;
      case "Zap":
        return <Zap className="w-5 h-5 text-amber-400" />;
      case "Sparkles":
        return <Sparkles className="w-5 h-5 text-amber-400" />;
      default:
        return <Sliders className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="rider" className="py-24 bg-[#08080a] relative border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold tracking-wider uppercase mb-3">
              <Sliders className="w-3.5 h-3.5" />
              <span>Especificaciones de Escenario</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight font-sans">
              RIDER <span className="text-amber-500">TÉCNICO</span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-400 max-w-xl">
              Requerimientos de cabina DJ, monitoreo estéreo y conectividad eléctrica para garantizar la máxima calidad sonora del show.
            </p>
          </div>

          <a
            href="#prensa"
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black text-xs font-black uppercase tracking-wider transition-all shadow-lg shadow-amber-500/20 hover:scale-105 active:scale-95 shrink-0"
          >
            <Download className="w-4 h-4" />
            <span>Descargar Rider PDF</span>
          </a>
        </div>

        {/* Warning / Important note for sound engineers */}
        <div className="mb-10 p-4 sm:p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-4">
          <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-zinc-300 space-y-1">
            <span className="font-bold text-amber-300 block">
              Nota importante para la producción técnica y sonidistas:
            </span>
            <p className="text-zinc-400">
              Cualquier modificación o reemplazo en los modelos de mixer o reproductores debe ser consultada previamente con el equipo de producción de El Panda DJ antes de la confirmación técnica del evento.
            </p>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TECH_RIDER.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-zinc-800 border border-zinc-700/80">
                    {getCategoryIcon(cat.iconName)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white uppercase tracking-tight">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-zinc-400">
                      {cat.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 mt-4">
                  {cat.specs.map((sp, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-xl bg-zinc-950/70 border border-zinc-800/80 space-y-1"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-zinc-200">
                          {sp.name}
                        </span>
                        {sp.required ? (
                          <span className="px-1.5 py-0.5 rounded text-[9px] font-black uppercase tracking-wider bg-amber-500/20 text-amber-400 border border-amber-500/30 font-mono">
                            Obligatorio
                          </span>
                        ) : (
                          <span className="px-1.5 py-0.5 rounded text-[9px] font-mono uppercase bg-zinc-800 text-zinc-400">
                            Recomendado
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-zinc-400 leading-relaxed font-mono">
                        {sp.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
