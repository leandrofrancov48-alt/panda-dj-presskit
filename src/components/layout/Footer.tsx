import { YoutubeIcon, InstagramIcon, SpotifyIcon } from "@/components/ui/Icons";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    {
      name: "YouTube",
      url: "https://www.youtube.com/channel/UCg6kTB4vw1XYFBR4TtHaBuQ",
      handle: "@unpocoderuido",
      icon: <YoutubeIcon className="w-5 h-5 text-red-500" />,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/elpandadj",
      handle: "@elpandadj",
      icon: <InstagramIcon className="w-5 h-5 text-[#E8D43F]" />,
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@elpandadj",
      handle: "@elpandadj",
      icon: <span className="font-mono text-sm font-black text-cyan-400">TK</span>,
    },
    {
      name: "Spotify",
      url: "https://open.spotify.com",
      handle: "El Panda DJ",
      icon: <SpotifyIcon className="w-5 h-5 text-emerald-400" />,
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#0C0B09] border-t border-[#2C261E] pt-20 pb-12 text-[#CEC1AD]">
      <div className="mx-auto max-w-[1700px] px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#2C261E] items-start">
          {/* Col 1: Giant Panda Brand */}
          <div className="md:col-span-6 space-y-4">
            <h3 className="letra-bandera text-4xl sm:text-6xl text-[#FAF6EE] leading-none">
              SIN EL PANDA NO HAY CUMBIA
            </h3>
            <p className="text-sm sm:text-base text-[#CEC1AD] max-w-md font-bold leading-relaxed">
              El Panda DJ. Cofundador de Un Poco de Ruido y referente del movimiento tropical contemporáneo en Argentina.
            </p>
          </div>

          {/* Col 2: Sumate a Panda! (Fer Palacio Style) */}
          <div className="md:col-span-6 space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-[#8F8270]">
              Sumate a Panda!
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-4 rounded-2xl bg-[#15130F] border border-[#2C261E] hover:border-[#E8D43F] transition-all hover:scale-[1.02]"
                >
                  <div className="flex items-center gap-3">
                    {s.icon}
                    <div>
                      <span className="text-sm font-extrabold text-[#FAF6EE] group-hover:text-[#E8D43F] transition-colors block leading-tight">
                        {s.name}
                      </span>
                      <span className="text-xs text-[#8F8270] font-mono">
                        {s.handle}
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#8F8270] group-hover:text-[#E8D43F] transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-bold text-[#8F8270]">
          <p>© 2026 El Panda DJ · Todos los derechos reservados.</p>
          <p className="font-mono text-[11px] text-[#8F8270]">
            Web Oficial & Presskit EPK
          </p>
        </div>
      </div>
    </footer>
  );
}
