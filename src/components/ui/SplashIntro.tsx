"use client";

import { useState, useEffect } from "react";

export default function SplashIntro() {
  const [mounted, setMounted] = useState(false);
  const [stage, setStage] = useState<"enter" | "splitting" | "complete">("enter");
  const [textVisible, setTextVisible] = useState(false);
  const [ribbonVisible, setRibbonVisible] = useState(false);
  const [lineActive, setLineActive] = useState(false);

  useEffect(() => {
    setMounted(true);
    window.scrollTo(0, 0);

    // Step 1: Ribbon entry
    const ribbonTimer = setTimeout(() => {
      setRibbonVisible(true);
    }, 60);

    // Step 2: Brush wipe text entry
    const textTimer = setTimeout(() => {
      setTextVisible(true);
    }, 280);

    // Function to trigger curtain split
    const triggerSplit = () => {
      setStage("splitting");
      setLineActive(true);
      window.dispatchEvent(new Event("splash-open"));

      // Razor slice flashes on the closed curtain for only 160ms, then unmounts completely
      setTimeout(() => {
        setLineActive(false);
      }, 160);

      // Complete unmount after curtains fully exit the viewport (150ms delay + 680ms duration + 70ms buffer)
      setTimeout(() => {
        setStage("complete");
      }, 900);
    };

    // Auto split after 2.3 seconds
    const splitTimer = setTimeout(() => {
      triggerSplit();
    }, 2300);

    // Allow user to skip after 600ms grace period (prevents accidental clicks on refresh)
    let pointerListener: (() => void) | null = null;
    let keyListener: ((e: KeyboardEvent) => void) | null = null;

    const skipTimer = setTimeout(() => {
      pointerListener = () => {
        clearTimeout(splitTimer);
        triggerSplit();
      };

      keyListener = (e: KeyboardEvent) => {
        if (e.key) {
          clearTimeout(splitTimer);
          triggerSplit();
        }
      };

      window.addEventListener("pointerdown", pointerListener, { once: true });
      window.addEventListener("keydown", keyListener, { once: true });
    }, 600);

    return () => {
      clearTimeout(ribbonTimer);
      clearTimeout(textTimer);
      clearTimeout(splitTimer);
      clearTimeout(skipTimer);
      if (pointerListener) window.removeEventListener("pointerdown", pointerListener);
      if (keyListener) window.removeEventListener("keydown", keyListener);
    };
  }, []);

  if (!mounted || stage === "complete") return null;

  const isSplitting = stage === "splitting";

  return (
    <div
      data-recibimiento="true"
      aria-hidden="true"
      className={`fixed inset-0 z-[100] overflow-hidden select-none bg-transparent ${
        isSplitting ? "pointer-events-none" : "pointer-events-auto"
      }`}
    >
      {/* 1. TOP HALF CURTAIN (Slides UP on split) */}
      <div
        className={`telon-mitad absolute inset-x-0 h-[50.5%] top-0 z-10 overflow-hidden ${
          isSplitting ? "telon-abrir-arriba" : ""
        }`}
        style={{
          backgroundColor: "#0C0B09",
          backgroundImage:
            "linear-gradient(to bottom, rgba(12,11,9,0.85) 0%, rgba(12,11,9,0.5) 45%, rgba(12,11,9,0.98) 100%), url('/assets/panda-velez-original.jpg')",
          backgroundSize: "100vw 100vh",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Analog Film Grain */}
        <div
          className="absolute inset-0 opacity-[0.08] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: "url('/assets/noise.png')",
            backgroundRepeat: "repeat",
            backgroundSize: "200px 200px",
          }}
        />

        {/* TOP 4 COLOR STRIPES RIBBON (Inside top half so it rides up with the curtain) */}
        <div className="absolute inset-x-0 top-0 z-30 flex pointer-events-none">
          {["#202C69", "#E8D43F", "#F46753", "#202C69"].map((color, idx) => (
            <span
              key={`${color}-${idx}`}
              className={`splash-ribbon h-[clamp(5px,0.8vw,10px)] flex-1 origin-left ${
                ribbonVisible ? "visible" : ""
              }`}
              style={{
                backgroundColor: color,
                transitionDelay: `${idx * 70}ms`,
              }}
            />
          ))}
        </div>
      </div>

      {/* 2. BOTTOM HALF CURTAIN (Slides DOWN on split) */}
      <div
        className={`telon-mitad absolute inset-x-0 h-[50.5%] bottom-0 z-10 overflow-hidden ${
          isSplitting ? "telon-abrir-abajo" : ""
        }`}
        style={{
          backgroundColor: "#0C0B09",
          backgroundImage:
            "linear-gradient(to top, rgba(12,11,9,0.98) 0%, rgba(12,11,9,0.5) 55%, rgba(12,11,9,0.85) 100%), url('/assets/panda-velez-original.jpg')",
          backgroundSize: "100vw 100vh",
          backgroundPosition: "bottom center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Analog Film Grain */}
        <div
          className="absolute inset-0 opacity-[0.08] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: "url('/assets/noise.png')",
            backgroundRepeat: "repeat",
            backgroundSize: "200px 200px",
          }}
        />
      </div>

      {/* 3. CENTER RAZOR LINE (Flashes across the horizon for only 160ms on closed curtain, then fully unmounts) */}
      {lineActive && (
        <div
          className="splash-raja absolute inset-x-0 top-1/2 z-30 h-[2.5px] bg-[#FAF6EE] origin-center -translate-y-1/2 pointer-events-none"
          style={{
            animation: "flash-raja 0.16s cubic-bezier(0.2, 0.8, 0.2, 1) forwards",
            boxShadow: "0 0 15px #FAF6EE, 0 0 30px #E8D43F, 0 0 50px #E8D43F",
          }}
        />
      )}

      {/* 4. GIANT CENTER TEXT ("SIN EL PANDA NO HAY CUMBIA" - Fer Palacio Style) */}
      <div
        className={`absolute inset-0 z-20 flex items-center justify-center px-[6vw] pointer-events-none transition-all duration-200 ${
          isSplitting ? "opacity-0 scale-95" : "opacity-100 scale-100"
        }`}
      >
        <p className="w-full text-center">
          {/* Line 1: SIN EL PANDA */}
          <span
            className={`splash-pincelada block text-[min(11.5vw,17vh)] leading-[0.85] font-black tracking-tighter whitespace-nowrap drop-shadow-[0_10px_30px_rgba(0,0,0,0.9)] ${
              textVisible ? "visible" : ""
            }`}
            style={{ transitionDelay: "120ms" }}
          >
            <span style={{ color: "#F46753" }}>SIN </span>
            <span style={{ color: "#FAF6EE" }}>EL PANDA</span>
          </span>

          {/* Line 2: NO HAY CUMBIA */}
          <span
            className={`splash-pincelada block text-[min(11.5vw,17vh)] leading-[0.85] font-black tracking-tighter whitespace-nowrap drop-shadow-[0_10px_30px_rgba(0,0,0,0.9)] mt-1 sm:mt-2 ${
              textVisible ? "visible" : ""
            }`}
            style={{ transitionDelay: "280ms" }}
          >
            <span style={{ color: "#202C69" }}>NO HAY </span>
            <span style={{ color: "#E8D43F" }}>CUMBIA</span>
          </span>
        </p>
      </div>
    </div>
  );
}
