import Image from "next/image";
import { PRESS_ASSETS } from "@/data/press";
import { Download, Image as ImageIcon, FileText, FolderArchive, Sparkles } from "lucide-react";

export default function PressKit() {
  const getFormatBadge = (format: string) => {
    switch (format) {
      case "PNG":
        return "bg-sky-500/20 text-sky-400 border-sky-500/30";
      case "SVG":
        return "bg-emerald-500/20 text-emerald-400 border-emerald-500/30";
      case "PDF":
        return "bg-red-500/20 text-red-400 border-red-500/30";
      case "ZIP":
        return "bg-amber-500/20 text-amber-400 border-amber-500/30";
      default:
        return "bg-zinc-800 text-zinc-300 border-zinc-700";
    }
  };

  const getAssetIcon = (format: string) => {
    if (format === "PDF") return <FileText className="w-5 h-5 text-red-400" />;
    if (format === "ZIP") return <FolderArchive className="w-5 h-5 text-amber-400" />;
    return <ImageIcon className="w-5 h-5 text-amber-400" />;
  };

  return (
    <section id="prensa" className="py-24 bg-[#0a0a0e] relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold tracking-wider uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Material Oficial para Prensa & Diseñadores</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight font-sans">
              KIT DE <span className="text-amber-500">PRENSA (EPK)</span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-400 max-w-xl">
              Logos oficiales en alta resolución con fondo transparente, fotos de prensa para flyers y fichas técnicas autorizadas.
            </p>
          </div>

          <a
            href="/assets/logos/panda-logo-hq.png"
            download="el-panda-dj-logos.png"
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black text-xs font-black uppercase tracking-wider transition-all shadow-lg shadow-amber-500/20 hover:scale-105 active:scale-95 shrink-0"
          >
            <Download className="w-4 h-4" />
            <span>Descargar Pack de Logos</span>
          </a>
        </div>

        {/* Assets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRESS_ASSETS.map((asset) => (
            <div
              key={asset.id}
              className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 hover:border-amber-500/40 hover:bg-zinc-900 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Preview Thumbnail Box */}
                <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-black/80 border border-zinc-800 flex items-center justify-center p-6 mb-4 group-hover:border-zinc-700 transition-colors">
                  {asset.previewUrl ? (
                    <div className="relative w-28 h-28">
                      <Image
                        src={asset.previewUrl}
                        alt={asset.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                  ) : (
                    <div className="p-4 rounded-full bg-zinc-900 border border-zinc-800">
                      {getAssetIcon(asset.format)}
                    </div>
                  )}

                  {/* Format Pill */}
                  <span
                    className={`absolute top-3 right-3 px-2 py-0.5 rounded text-[10px] font-black uppercase font-mono border ${getFormatBadge(
                      asset.format
                    )}`}
                  >
                    {asset.format}
                  </span>
                </div>

                {/* Details */}
                <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors">
                  {asset.title}
                </h3>
                <p className="mt-1.5 text-xs text-zinc-400 leading-relaxed">
                  {asset.description}
                </p>
              </div>

              {/* Meta & Download CTA */}
              <div className="mt-6 pt-4 border-t border-zinc-800 flex items-center justify-between">
                <div className="text-[11px] font-mono text-zinc-500">
                  {asset.resolution ? `${asset.resolution} · ` : ""}
                  {asset.fileSize}
                </div>

                <a
                  href={asset.downloadUrl}
                  download
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-zinc-800 hover:bg-amber-500 hover:text-black text-zinc-200 transition-all"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Bajar</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
