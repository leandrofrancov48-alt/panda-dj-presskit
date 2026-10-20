import { Camera, Type, FileText, Sliders, Download, Eye } from "lucide-react";

export default function Downloads() {
  const downloadItems = [
    {
      id: "fotos",
      title: "Pack de fotos",
      description: "39 fotos de prensa para flyers en alta resolución, listas para gráfica y redes.",
      btnText: "Descargar ZIP",
      icon: Camera,
      href: "https://zzez7gfzofthc7ry.public.blob.vercel-storage.com/downloads/Panda_DJ_Pack_Fotos_HD.zip",
      download: "Panda_DJ_Pack_Fotos_HD.zip",
      target: "_blank",
    },
    {
      id: "logos",
      title: "Logo & marca",
      description: "Logotipo oficial de El Panda DJ en alta resolución (PDF vector y PNG).",
      btnText: "Descargar logo",
      icon: Type,
      href: "/downloads/Panda_DJ_Logos_Oficiales.zip",
      download: "Panda_DJ_Logos_Oficiales.zip",
      target: undefined,
    },
    {
      id: "onesheet",
      title: "One-sheet (PDF)",
      description: "PDF de presentación para productores y salas.",
      btnText: "Ver PDF",
      icon: FileText,
      href: "/downloads/Panda_DJ_OneSheet.pdf",
      download: undefined,
      target: "_blank",
    },
    {
      id: "rider",
      title: "Rider técnico",
      description: "Requerimientos de sonido y escenario para el show en vivo.",
      btnText: "Ver rider",
      icon: Sliders,
      href: "/downloads/Panda_DJ_Rider_Tecnico.pdf",
      download: undefined,
      target: "_blank",
    },
  ];

  return (
    <section id="descargas" className="py-20 sm:py-28 bg-[#0C0B09] border-t border-[#2C261E] relative">
      <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="mb-10 sm:mb-12">
          <div className="revelar" style={{ "--i": 0 } as React.CSSProperties}>
            <span className="pincelada text-xs sm:text-sm font-black tracking-widest text-[#F46753] uppercase block mb-2 font-mono">
              PARA DISEÑADORES & PRENSA
            </span>
          </div>
          <div className="revelar" style={{ "--i": 1 } as React.CSSProperties}>
            <h2 className="pincelada letra-bandera text-3xl sm:text-5xl text-[#FAF6EE] font-black uppercase tracking-tight">
              Descargas
            </h2>
          </div>
        </div>

        {/* 4 Cards Grid (matching reference image) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {downloadItems.map((item, idx) => {
            const Icon = item.icon;
            const isExternal = item.target === "_blank";

            return (
              <div
                key={item.id}
                className="revelar"
                style={{ "--i": idx + 1 } as React.CSSProperties}
              >
                <div className="iza h-full rounded-2xl bg-[#131418] border border-[#232328] hover:border-[#F46753]/60 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-[6px_6px_0_rgba(0,0,0,0.8)] group">
                  <div>
                    {/* Icon */}
                    <div className="w-10 h-10 flex items-center justify-center text-[#F46753] mb-5">
                      <Icon className="w-7 h-7 stroke-[1.8]" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-[#FAF6EE] mb-2.5 tracking-tight group-hover:text-[#F46753] transition-colors">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-zinc-400 leading-relaxed min-h-[48px]">
                      {item.description}
                    </p>
                  </div>

                  {/* Action Button */}
                  <div className="pt-6 mt-4">
                    <a
                      href={item.href}
                      download={item.download}
                      target={item.target}
                      rel={item.target ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#F46753] hover:bg-[#ff7563] text-white text-sm font-bold transition-all shadow-md hover:scale-105 active:scale-95 cursor-pointer"
                    >
                      {isExternal ? (
                        <Eye className="w-4 h-4" />
                      ) : (
                        <Download className="w-4 h-4" />
                      )}
                      <span>{item.btnText}</span>
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
