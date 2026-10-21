"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const handleSplashOpen = () => {
      setRevealed(true);
    };

    window.addEventListener("splash-open", handleSplashOpen);

    const fallbackTimer = setTimeout(() => {
      setRevealed(true);
    }, 2800);

    return () => {
      window.removeEventListener("splash-open", handleSplashOpen);
      clearTimeout(fallbackTimer);
    };
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

  return (
    <section
      aria-label="El Panda DJ"
      className="relative isolate flex min-h-screen flex-col justify-center overflow-hidden py-[clamp(3rem,7svh,5.5rem)]"
    >
      {/* Background Stadium Photo: El Panda DJ en Estadio Vélez Sarsfield */}
      <div className="absolute inset-0 -z-20 overflow-hidden bg-[#0C0B09]">
        <div className="animate-deriva relative w-full h-full">
          <Image
            src="/assets/panda-velez-original.jpg"
            alt="El Panda DJ tocando en vivo en el Estadio Vélez Sarsfield"
            fill
            priority
            quality={95}
            className="object-cover object-[50%_35%] brightness-[0.58] contrast-[1.22] saturate-[0.80]"
          />
        </div>

        {/* 1. Espresso Tint Overlay (Darkens daylight sky and integrates with dark theme) */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[#0C0B09]/45 mix-blend-multiply"
        />

        {/* 2. Analog 35mm Film Grain */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 pointer-events-none opacity-[0.09] mix-blend-overlay"
          style={{
            backgroundImage: "url('/assets/noise.png')",
            backgroundRepeat: "repeat",
            backgroundSize: "200px 200px",
          }}
        />

        {/* 3. Deep Cinematic Radial Vignette */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(12,11,9,0.65)_65%,#0C0B09_100%)]"
        />

        {/* 4. Top & Bottom Vignette Gradients */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(12,11,9,0.85)_0%,rgba(12,11,9,0.25)_25%,rgba(12,11,9,0.45)_50%,rgba(12,11,9,0.92)_75%,#0C0B09_100%)]"
        />

        {/* 5. Left Side Gradient for Bold Letter Contrast */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 hidden bg-[linear-gradient(to_right,rgba(12,11,9,0.92)_0%,rgba(12,11,9,0.55)_35%,transparent_70%)] md:block"
        />

        {/* 6. Subtle Amber Concert Lighting Accent on DJ Booth */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_70%,rgba(232,212,63,0.12)_0%,transparent_50%)] mix-blend-screen"
        />
      </div>

      {/* Main Content Area */}
      <div className="relative mx-auto w-full max-w-[1900px] px-4 sm:px-6 lg:px-10 my-auto">
        <div className="relative">
          {/* Desktop Big Panda Logo floating on the right side - only on md: screens and up */}
          <div
            aria-hidden="true"
            className={`hidden md:block pointer-events-none absolute top-1/2 -translate-y-1/2 right-6 lg:right-12 w-[clamp(12rem,21vw,24rem)] aspect-square z-20 transition-all duration-700 ${
              revealed ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          >
            <div className="animate-float-subtle relative w-full h-full drop-shadow-[0_20px_35px_rgba(0,0,0,0.95)]">
              <Image
                src="/panda-logo.png"
                alt="El Panda DJ Sticker"
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>

          {/* Giant Headline (Fer Palacio Style) */}
          <h1 className="flex flex-col">
            <span className="sr-only">El Panda DJ</span>
            {/* Line 1: EL PANDA (Full unobstructed width) */}
            <div
              className={`revelar ${revealed ? "abierta" : ""}`}
              style={{ "--i": 0 } as React.CSSProperties}
            >
              <span
                className="pincelada letra-bandera text-[clamp(2.75rem,13vw,14rem)]"
                data-registro="EL PANDA"
                style={{ "--registro": "#E8D43F" } as React.CSSProperties}
              >
                EL PANDA
              </span>
            </div>

            {/* Line 2: DJ + Mobile Panda Logo Sticker side-by-side */}
            <div
              className={`revelar flex items-center gap-3.5 sm:gap-6 ${revealed ? "abierta" : ""}`}
              style={{ "--i": 1 } as React.CSSProperties}
            >
              <span
                className="pincelada letra-bandera text-[clamp(2.75rem,13vw,14rem)] -mt-[0.06em]"
                data-registro="DJ"
                style={{ "--registro": "#E8D43F" } as React.CSSProperties}
              >
                DJ
              </span>

              {/* Mobile-only Panda Logo sticker inline with DJ - NEVER overlaps EL PANDA */}
              <div
                aria-hidden="true"
                className={`md:hidden pointer-events-none relative w-[clamp(4.25rem,18vw,6.5rem)] aspect-square shrink-0 -mt-1 sm:-mt-2 transition-all duration-700 ${
                  revealed ? "opacity-100 scale-100" : "opacity-0 scale-90"
                }`}
              >
                <div className="animate-float-subtle relative w-full h-full drop-shadow-[0_12px_24px_rgba(0,0,0,0.95)]">
                  <Image
                    src="/panda-logo.png"
                    alt="El Panda DJ Sticker"
                    fill
                    priority
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </h1>
        </div>

        {/* Tilted Marker Sticker: SIN EL PANDA NO HAY CUMBIA */}
        <p
          className={`revelar -mt-[clamp(0.2rem,0.8vw,0.9rem)] ${revealed ? "abierta" : ""}`}
          style={{ "--i": 2 } as React.CSSProperties}
        >
          <span className="iza inline-block">
            <span className="inline-block -rotate-2 bg-[#E8D43F] text-black px-4 py-1.5 sm:px-5 sm:py-2 text-[clamp(0.75rem,1.5vw,1.1rem)] font-black uppercase tracking-wider shadow-[6px_6px_0_rgba(0,0,0,0.95)]">
              Sin El Panda No Hay Cumbia
            </span>
          </span>
        </p>

        {/* Action Buttons: Minimalist & Direct (Fer Palacio Style) */}
        <div
          className={`revelar mt-[clamp(1.5rem,3.5vw,2.5rem)] ${revealed ? "abierta" : ""}`}
          style={{ "--i": 3 } as React.CSSProperties}
        >
          <div className="iza flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
            {/* Button 1: Contratar a Panda */}
            <a
              href="#contacto"
              onClick={(e) => scrollTo(e, "contacto")}
              className="costura group inline-flex items-center justify-center gap-3 px-7 py-4 sm:px-8 sm:py-4.5 text-base sm:text-xl font-black uppercase tracking-wider text-black bg-[#E8D43F] hover:bg-[#F2E263] transition-all duration-200 hover:-translate-y-1 active:translate-y-0 shadow-[5px_5px_0_rgba(0,0,0,0.9)] cursor-pointer"
            >
              <span>Contratar a Panda</span>
              <ArrowRight className="w-5 h-5 stroke-[2.8] transition-transform group-hover:translate-x-1" />
            </a>

            {/* Button 2: Biografía & Trayectoria */}
            <a
              href="#bio"
              onClick={(e) => scrollTo(e, "bio")}
              className="costura group inline-flex items-center justify-center gap-3 px-7 py-4 sm:px-8 sm:py-4.5 text-base sm:text-xl font-black uppercase tracking-wider text-black bg-[#F46753] hover:bg-[#FA7C6B] transition-all duration-200 hover:-translate-y-1 active:translate-y-0 shadow-[5px_5px_0_rgba(0,0,0,0.9)] cursor-pointer"
            >
              <span>Biografía & Trayectoria</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
