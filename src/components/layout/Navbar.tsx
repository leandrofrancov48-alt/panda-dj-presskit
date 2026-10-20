"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowDownRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Biografía", targetId: "bio" },
    { label: "Descargas", targetId: "descargas" },
    { label: "Servicios", targetId: "servicios" },
    { label: "Contratación", targetId: "contacto" },
  ];

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false);
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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 transform ease-out ${
        scrolled
          ? "translate-y-0 opacity-100 bg-[#0C0B09]/95 backdrop-blur-md border-b border-[#2C261E] py-3.5 shadow-2xl pointer-events-auto"
          : "-translate-y-full opacity-0 pointer-events-none py-3.5"
      }`}
    >
      <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between">
        {/* Brand */}
        <Link href="#" className="flex items-center gap-3 group">
          <div className="relative w-9 h-9 sm:w-10 sm:h-10">
            <Image
              src="/panda-logo.png"
              alt="El Panda DJ"
              fill
              className="object-contain group-hover:scale-110 transition-transform"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold tracking-tight text-lg sm:text-xl text-[#FAF6EE] group-hover:text-[#E8D43F] transition-colors leading-none uppercase">
              EL PANDA <span className="text-[#E8D43F]">DJ</span>
            </span>
            <span className="text-[10px] tracking-widest text-[#CEC1AD] uppercase font-mono">
              SIN EL PANDA NO HAY CUMBIA
            </span>
          </div>
        </Link>

        {/* Desktop Navigation with Smooth Calculated Scroll */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.targetId}
              href={`#${link.targetId}`}
              onClick={(e) => scrollTo(e, link.targetId)}
              className="text-sm font-extrabold tracking-wide text-[#FAF6EE] hover:text-[#E8D43F] transition-colors uppercase cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#contacto"
            onClick={(e) => scrollTo(e, "contacto")}
            className="flex items-center gap-1.5 px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-wider bg-[#E8D43F] hover:bg-[#F2E263] text-black transition-all shadow-lg shadow-[#E8D43F]/20 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>Contratar</span>
            <ArrowDownRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menú"
          className="md:hidden p-2 rounded-xl bg-[#15130F] border border-[#2C261E] text-[#FAF6EE] hover:text-[#E8D43F]"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-[#15130F] border-b border-[#2C261E] px-6 py-6 space-y-4 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.targetId}
                href={`#${link.targetId}`}
                onClick={(e) => scrollTo(e, link.targetId)}
                className="text-base font-extrabold tracking-wide text-[#FAF6EE] hover:text-[#E8D43F] uppercase py-2 border-b border-[#2C261E] cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2">
            <a
              href="#contacto"
              onClick={(e) => scrollTo(e, "contacto")}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-xs font-black tracking-wider uppercase bg-[#E8D43F] text-black cursor-pointer"
            >
              <span>Contratar a Panda</span>
              <ArrowDownRight className="w-4 h-4 stroke-[2.5]" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
