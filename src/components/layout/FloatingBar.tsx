"use client";

import { useState, useEffect } from "react";
import { User, MessageSquare } from "lucide-react";

export default function FloatingBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 350);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const navbarHeight = 84;
      const top = el.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 w-[92%] max-w-sm animate-in slide-in-from-bottom duration-300 sm:hidden">
      <div className="flex items-center justify-between gap-2 p-2 rounded-2xl bg-[#0C0B09]/95 border border-[#2C261E] shadow-2xl backdrop-blur-xl">
        <a
          href="#bio"
          onClick={(e) => scrollTo(e, "bio")}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-[#15130F] text-[#FAF6EE] text-xs font-black uppercase tracking-wider border border-[#2C261E] cursor-pointer"
        >
          <User className="w-3.5 h-3.5 text-[#F59E0B]" />
          <span>Biografía</span>
        </a>

        <a
          href="#contacto"
          onClick={(e) => scrollTo(e, "contacto")}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-[#F59E0B] text-black text-xs font-black uppercase tracking-wider shadow-lg shadow-[#F59E0B]/25 cursor-pointer"
        >
          <MessageSquare className="w-3.5 h-3.5 fill-black" />
          <span>Booking</span>
        </a>
      </div>
    </div>
  );
}
