"use client";

import { useState } from "react";
import Image from "next/image";
import { MUSIC_TRACKS } from "@/data/music";
import { MusicTrack } from "@/types";
import VideoModal from "@/components/ui/VideoModal";
import { Play, ExternalLink } from "lucide-react";
import { YoutubeIcon, SpotifyIcon } from "@/components/ui/Icons";

export default function MusicSets() {
  const [selectedCategory, setSelectedCategory] = useState<string>("TODOS");
  const [activeVideo, setActiveVideo] = useState<MusicTrack | null>(null);

  const categories = [
    "TODOS",
    "ENGANCHADOS",
    "UN POCO DE RUIDO",
    "LIVE SETS",
    "REMIXES",
  ];

  const filteredTracks = MUSIC_TRACKS.filter((track) => {
    if (selectedCategory === "TODOS") return true;
    if (selectedCategory === "ENGANCHADOS") return track.category === "Enganchado";
    if (selectedCategory === "UN POCO DE RUIDO") return track.category === "Un Poco de Ruido";
    if (selectedCategory === "LIVE SETS") return track.category === "Live Set";
    if (selectedCategory === "REMIXES") return track.category === "Remix";
    return true;
  });

  return (
    <section
      id="lanzamientos"
      className="relative scroll-mt-24 overflow-hidden pt-10 pb-20 sm:pt-14 sm:pb-28 bg-[#15130F] text-[#FAF6EE] border-t border-[#2C261E]"
      aria-labelledby="lanzamientos-titulo"
    >
      <div className="mx-auto max-w-[1700px] px-4 sm:px-6 lg:px-10">
        {/* Section Header (Fer Palacio Style with Pincelada on Scroll) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 id="lanzamientos-titulo" className="flex flex-col">
              <div className="revelar" style={{ "--i": 0 } as React.CSSProperties}>
                <span className="pincelada letra-bandera text-[clamp(2.6rem,7.5vw,6rem)] text-[#FAF6EE] leading-none">
                  LO ÚLTIMO
                </span>
              </div>
            </h2>

            <div className="revelar mt-3" style={{ "--i": 1 } as React.CSSProperties}>
              <p className="iza text-base sm:text-xl font-bold text-[#CEC1AD]">
                Escuchá los últimos enganchados de cumbia y zapadas de Un Poco de Ruido.
              </p>
            </div>
          </div>

          {/* Social Badges with Iza Slide */}
          <div className="revelar" style={{ "--i": 2 } as React.CSSProperties}>
            <div className="iza flex items-center gap-3">
              <a
                href="https://www.youtube.com/@unpocoderuido"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-full bg-[#0C0B09] hover:bg-black text-[#FAF6EE] border border-[#2C261E] hover:border-[#E8D43F] text-xs font-black uppercase tracking-wider transition-all hover:scale-105"
              >
                <YoutubeIcon className="w-4 h-4 text-red-500" />
                <span>YouTube</span>
              </a>
              <a
                href="https://open.spotify.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-full bg-[#0C0B09] hover:bg-black text-[#FAF6EE] border border-[#2C261E] hover:border-[#E8D43F] text-xs font-black uppercase tracking-wider transition-all hover:scale-105"
              >
                <SpotifyIcon className="w-4 h-4 text-emerald-400" />
                <span>Spotify</span>
              </a>
            </div>
          </div>
        </div>

        {/* Categories Carousel Filter with Reveal */}
        <div className="revelar" style={{ "--i": 3 } as React.CSSProperties}>
          <div className="iza flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-black tracking-wider uppercase whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#E8D43F] text-black shadow-[4px_4px_0_rgba(0,0,0,0.9)] scale-105"
                    : "bg-[#0C0B09] border border-[#2C261E] text-[#CEC1AD] hover:text-[#FAF6EE] hover:border-[#453B2F]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Tracks Grid (Each Card Staggered with Iza on Scroll) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTracks.map((track, idx) => (
            <div
              key={track.id}
              className="revelar"
              style={{ "--i": (idx % 3) + 1 } as React.CSSProperties}
            >
              <div className="iza group relative rounded-2xl bg-[#0C0B09] border-2 border-[#2C261E] overflow-hidden hover:border-[#E8D43F] transition-all duration-300 flex flex-col justify-between shadow-[8px_8px_0_rgba(0,0,0,0.85)] hover:-translate-y-1 h-full">
                {/* Media Poster / Cover */}
                <div
                  className="relative aspect-video w-full overflow-hidden bg-black cursor-pointer"
                  onClick={() => setActiveVideo(track)}
                >
                  <Image
                    src={track.coverImage}
                    alt={track.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-85 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C0B09] via-transparent to-transparent" />

                  {/* Category Pill Tag */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-wider bg-black/80 backdrop-blur-md text-[#E8D43F] border border-[#E8D43F]/40">
                      {track.category}
                    </span>
                  </div>

                  {/* Duration & Views Badges */}
                  <div className="absolute bottom-3 right-3 flex items-center gap-2">
                    {track.views && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-black/80 text-[#CEC1AD] border border-[#2C261E]">
                        {track.views} views
                      </span>
                    )}
                    {track.duration && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-black bg-[#E8D43F] text-black">
                        {track.duration}
                      </span>
                    )}
                  </div>

                  {/* Big Center Play Circle */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-[#E8D43F] text-black flex items-center justify-center transform group-hover:scale-110 transition-all shadow-xl shadow-black/80 group-hover:bg-[#F2E263]">
                      <Play className="w-6 h-6 fill-black ml-0.5" />
                    </div>
                  </div>
                </div>

                {/* Title & Info */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3
                      onClick={() => setActiveVideo(track)}
                      className="text-base sm:text-lg font-black text-[#FAF6EE] group-hover:text-[#E8D43F] transition-colors line-clamp-1 cursor-pointer"
                    >
                      {track.title}
                    </h3>
                    {track.subtitle && (
                      <p className="mt-1 text-xs text-[#CEC1AD] line-clamp-2 leading-relaxed font-normal">
                        {track.subtitle}
                      </p>
                    )}
                  </div>

                  {/* Footer Action */}
                  <div className="mt-5 pt-3 border-t border-[#2C261E] flex items-center justify-between">
                    <span className="text-xs font-mono text-[#8F8270]">
                      {track.year} · Set Oficial
                    </span>

                    <button
                      onClick={() => setActiveVideo(track)}
                      className="flex items-center gap-1.5 text-xs font-black text-[#E8D43F] hover:text-[#F2E263] transition-colors uppercase tracking-wider"
                    >
                      <span>Reproducir</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal Player */}
      {activeVideo && (
        <VideoModal
          isOpen={!!activeVideo}
          onClose={() => setActiveVideo(null)}
          videoTitle={activeVideo.title}
          youtubeId={activeVideo.youtubeId}
        />
      )}
    </section>
  );
}
