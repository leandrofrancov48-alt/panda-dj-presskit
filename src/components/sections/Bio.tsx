import Image from "next/image";
import PhotoTendedero from "@/components/ui/PhotoTendedero";

export default function Bio() {
  return (
    <section
      id="bio"
      className="relative scroll-mt-24 overflow-hidden pt-12 pb-24 sm:pt-16 sm:pb-32 bg-[#0C0B09] border-t border-[#2C261E]"
      aria-labelledby="bio-titulo"
    >
      <div className="mx-auto max-w-[1700px] px-4 sm:px-6 lg:px-10">
        <div className="grid gap-10 lg:gap-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-start">
          {/* Left Text Column */}
          <div className="space-y-6">
            {/* Giant Title (Fer Palacio style) */}
            <h2 id="bio-titulo" className="flex flex-col">
              <div className="revelar" style={{ "--i": 0 } as React.CSSProperties}>
                <span className="pincelada letra-bandera text-[clamp(2.5rem,7vw,5.5rem)] text-[#FAF6EE] leading-[0.88]">
                  DE LA ESQUINA
                </span>
              </div>
              <div className="revelar" style={{ "--i": 1 } as React.CSSProperties}>
                <span className="pincelada letra-bandera-gold text-[clamp(2.5rem,7vw,5.5rem)] text-[#E8D43F] leading-[0.88] mt-[-0.08em]">
                  A VÉLEZ SARSFIELD
                </span>
              </div>
            </h2>

            {/* Core Bio Paragraphs with Staggered Highlighter Animation */}
            <div className="revelar" style={{ "--i": 2 } as React.CSSProperties}>
              <p className="iza text-lg sm:text-2xl font-extrabold leading-relaxed text-[#FAF6EE]">
                El Panda DJ es uno de los DJ y productores más representativos de la música popular argentina y cofundador de{" "}
                <span
                  className="resaltador resaltador-amarillo text-[0.92em]"
                  style={{ "--delay": "1500ms" } as React.CSSProperties}
                >
                  Un Poco de Ruido
                </span>
                , el fenómeno musical y audiovisual que revolucionó el{" "}
                <span
                  className="resaltador resaltador-azul text-[0.92em]"
                  style={{ "--delay": "1800ms" } as React.CSSProperties}
                >
                  género tropical
                </span>{" "}
                a nivel global.
              </p>
            </div>

            <div className="revelar" style={{ "--i": 3 } as React.CSSProperties}>
              <p className="iza text-base sm:text-xl font-normal leading-relaxed text-[#CEC1AD]">
                Llevó la{" "}
                <span
                  className="resaltador resaltador-naranja text-[0.92em]"
                  style={{ "--delay": "2100ms" } as React.CSSProperties}
                >
                  cumbia y el cachengue
                </span>{" "}
                desde las zapadas barriales a los escenarios más convocantes de Argentina, consagrándose con la apertura histórica del show en el{" "}
                <span
                  className="resaltador resaltador-azul text-[0.92em]"
                  style={{ "--delay": "2400ms" } as React.CSSProperties}
                >
                  Estadio Vélez Sarsfield
                </span>{" "}
                ante más de{" "}
                <span
                  className="resaltador resaltador-amarillo text-[0.92em]"
                  style={{ "--delay": "2700ms" } as React.CSSProperties}
                >
                  45.000 personas
                </span>
                . Con millones de reproducciones acumuladas y presentaciones de culto en{" "}
                <span
                  className="resaltador resaltador-naranja text-[0.92em]"
                  style={{ "--delay": "3000ms" } as React.CSSProperties}
                >
                  Feriado de Maldini
                </span>{" "}
                y{" "}
                <span
                  className="resaltador resaltador-amarillo text-[0.92em]"
                  style={{ "--delay": "3300ms" } as React.CSSProperties}
                >
                  Buenos Aires Cumbia
                </span>
                , es el referente indiscutido de la pista de baile.
              </p>
            </div>

            {/* Clean Highlight Badges */}
            <div className="revelar" style={{ "--i": 4 } as React.CSSProperties}>
              <div className="iza flex flex-wrap items-center gap-3 pt-2">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#15130F] border border-[#453B2F] text-[#FAF6EE] text-sm sm:text-base font-black uppercase tracking-wider">
                  <span className="text-[#E8D43F] font-mono text-lg">+45K</span> En Vélez Sarsfield
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#15130F] border border-[#453B2F] text-[#FAF6EE] text-sm sm:text-base font-black uppercase tracking-wider">
                  <span className="text-[#E8D43F] font-mono text-lg">+200M</span> Reproducciones
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#15130F] border border-[#453B2F] text-[#FAF6EE] text-sm sm:text-base font-black uppercase tracking-wider">
                  <span className="text-[#E8D43F] font-mono text-lg">#1</span> Fenómeno Streaming
                </span>
              </div>
            </div>
          </div>

          {/* Right Photo Column */}
          <div className="revelar" style={{ "--i": 2 } as React.CSSProperties}>
            <div className="iza relative aspect-[4/5] w-full overflow-hidden border-2 border-[#453B2F] shadow-[10px_10px_0_rgba(0,0,0,0.9)] bg-[#15130F] group hover:border-[#E8D43F] transition-all duration-500">
              <Image
                src="/assets/bio-panda.jpg"
                alt="El Panda DJ"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top contrast-105 brightness-95 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C0B09]/80 via-transparent to-transparent" />

              {/* Tilted Sticker on Photo */}
              <div className="absolute bottom-5 left-5 right-5">
                <span className="inline-block -rotate-1 bg-[#E8D43F] text-black px-4 py-2 font-black uppercase text-xs sm:text-sm shadow-[4px_4px_0_rgba(0,0,0,0.9)]">
                  ★ Shows & Festivales en Todo el País
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fer Palacio Style Photo Tendedero Carousel */}
      <PhotoTendedero />
    </section>
  );
}
