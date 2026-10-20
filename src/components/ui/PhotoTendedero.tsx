"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, ZoomIn, Camera, Sparkles } from "lucide-react";

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  title: string;
  subtitle: string;
  aspect: "portrait" | "landscape" | "tall";
  destacada?: boolean;
  rotate: number;
  sway: number;
  duration: number;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "seba-15",
    src: "/assets/galeria/seba-15.jpg",
    alt: "El Panda DJ con Lionel Messi posando con la camiseta de Chacarita en Inter Miami",
    title: "EL CAPITÁN & EL PANDA",
    subtitle: "La camiseta del Funebrero en Inter Miami CF",
    aspect: "portrait",
    destacada: true,
    rotate: -2.2,
    sway: 1.1,
    duration: 5.2,
  },
  {
    id: "seba-01",
    src: "/assets/galeria/seba-01.jpg",
    alt: "El Panda DJ en vivo en cabina con auriculares",
    title: "EL CONTROL DE LA PISTA",
    subtitle: "Sets sin escalas en la noche argentina",
    aspect: "portrait",
    destacada: false,
    rotate: 1.8,
    sway: -0.9,
    duration: 4.8,
  },
  {
    id: "seba-03",
    src: "/assets/galeria/seba-03.jpg",
    alt: "El Panda DJ con Ángel Di María sosteniendo la casaca de Chacarita",
    title: "EL FIDEO DE CHACA",
    subtitle: "Abrazo de campeones del mundo",
    aspect: "portrait",
    destacada: true,
    rotate: -1.4,
    sway: 1.2,
    duration: 5.5,
  },
  {
    id: "seba-06",
    src: "/assets/galeria/seba-06.jpg",
    alt: "El Panda DJ con el Premio Martín Fierro de Streaming en mano",
    title: "MEJOR PROGRAMA DE STREAMING",
    subtitle: "Consagración de Un Poco de Ruido en la gala oficial",
    aspect: "portrait",
    destacada: true,
    rotate: 2.1,
    sway: -1.0,
    duration: 4.6,
  },
  {
    id: "seba-05",
    src: "/assets/galeria/seba-05.jpg",
    alt: "El Panda DJ con Duki sosteniendo la jarra de Un Poco de Ruido y camiseta",
    title: "MODO DIABLO & LA CUMBIA",
    subtitle: "La jarra de Ruido y la tricolor funebrera",
    aspect: "tall",
    destacada: true,
    rotate: -1.9,
    sway: 0.8,
    duration: 5.1,
  },
  {
    id: "seba-14",
    src: "/assets/galeria/seba-14.jpg",
    alt: "El Panda DJ en el campo de juego de Chase Stadium de Inter Miami",
    title: "EN EL CAMPO DEL 10",
    subtitle: "Fort Lauderdale, Florida • Gira USA",
    aspect: "portrait",
    destacada: false,
    rotate: 1.3,
    sway: -1.1,
    duration: 4.9,
  },
  {
    id: "seba-02",
    src: "/assets/galeria/seba-02.jpg",
    alt: "Multitud enfervorizada frente al escenario de Panda DJ",
    title: "MAINSTAGE EN VIVO",
    subtitle: "Decenas de miles bailando cumbia hasta el amanecer",
    aspect: "portrait",
    destacada: false,
    rotate: -2.4,
    sway: 0.9,
    duration: 5.4,
  },
  {
    id: "seba-07",
    src: "/assets/galeria/seba-07.jpg",
    alt: "El Panda DJ festejando con Duki con la camiseta de Chaca",
    title: "FESTEJO Y CUMBIA",
    subtitle: "Zapada histórica en Un Poco de Ruido",
    aspect: "portrait",
    destacada: false,
    rotate: 1.7,
    sway: -0.8,
    duration: 4.7,
  },
  {
    id: "seba-09",
    src: "/assets/galeria/seba-09.jpg",
    alt: "El Panda DJ en la mesa de grabación con Pinky y la producción de Ruido",
    title: "LA MESA DE GRABACIÓN",
    subtitle: "Con Pinky y la banda en el estudio",
    aspect: "landscape",
    destacada: true,
    rotate: -0.9,
    sway: 1.0,
    duration: 5.6,
  },
  {
    id: "seba-18",
    src: "/assets/galeria/seba-18.jpg",
    alt: "El Panda DJ con Chelo Weigandt y Federico Redondo en Inter Miami",
    title: "CON CHELO & REDONDO",
    subtitle: "Visita al plantel profesional en Miami",
    aspect: "portrait",
    destacada: false,
    rotate: 2.2,
    sway: -1.2,
    duration: 4.9,
  },
  {
    id: "seba-04",
    src: "/assets/galeria/seba-04.jpg",
    alt: "Abrazo fraterno de El Panda con Ángel Di María",
    title: "CAMPEÓN DEL MUNDO",
    subtitle: "El Fideo con la casaca del Funebrero",
    aspect: "portrait",
    destacada: false,
    rotate: -1.7,
    sway: 0.7,
    duration: 5.3,
  },
  {
    id: "seba-08",
    src: "/assets/galeria/seba-08.jpg",
    alt: "El Panda DJ posando en la alfombra roja con el Martín Fierro",
    title: "ALFOMBRA ROJA",
    subtitle: "Gala de Premiación de Medios Digitales",
    aspect: "portrait",
    destacada: false,
    rotate: 1.4,
    sway: -0.9,
    duration: 4.8,
  },
  {
    id: "seba-10",
    src: "/assets/galeria/seba-10.jpg",
    alt: "La gente con brazos en alto en el show del Panda DJ",
    title: "NO HAY CUMBIA SIN EL PANDA",
    subtitle: "Euforia total en cada parada de la gira",
    aspect: "portrait",
    destacada: false,
    rotate: -2.0,
    sway: 1.1,
    duration: 5.0,
  },
  {
    id: "seba-11",
    src: "/assets/galeria/seba-11.jpg",
    alt: "El Panda DJ en la prueba de sonido de un estadio",
    title: "CALIBRANDO EL SONIDO",
    subtitle: "Ajustando frecuencias y bajos antes de abrir puertas",
    aspect: "portrait",
    destacada: false,
    rotate: 1.9,
    sway: -0.8,
    duration: 5.2,
  },
  {
    id: "seba-12",
    src: "/assets/galeria/seba-12.jpg",
    alt: "El Panda DJ en camarines concentrado antes de salir a tocar",
    title: "LA PREVIA DEL SHOW",
    subtitle: "Minutos antes de subir a detonar la noche",
    aspect: "tall",
    destacada: false,
    rotate: -1.3,
    sway: 1.0,
    duration: 4.7,
  },
  {
    id: "seba-13",
    src: "/assets/galeria/seba-13.jpg",
    alt: "Club totalmente colmado con el Panda DJ en el escenario",
    title: "LOCALIDADES AGOTADAS",
    subtitle: "Recorriendo los mejores clubes de todo el país",
    aspect: "landscape",
    destacada: true,
    rotate: 1.1,
    sway: -0.7,
    duration: 5.7,
  },
  {
    id: "seba-16",
    src: "/assets/galeria/seba-16.jpg",
    alt: "Puesta en escena con pantallas LED y luces en show del Panda",
    title: "SHOW AUDIOVISUAL",
    subtitle: "Producción de escenario de primer nivel",
    aspect: "portrait",
    destacada: false,
    rotate: -2.3,
    sway: 0.9,
    duration: 5.1,
  },
  {
    id: "seba-17",
    src: "/assets/galeria/seba-17.jpg",
    alt: "Primer plano de El Panda mezclando en las bandejas",
    title: "MEZCLA & TRANSICIONES",
    subtitle: "El sello inconfundible del cachengue argentino",
    aspect: "portrait",
    destacada: false,
    rotate: 1.5,
    sway: -1.0,
    duration: 4.9,
  },
  {
    id: "seba-19",
    src: "/assets/galeria/seba-19.jpg",
    alt: "Atardecer cumbiero en festival al aire libre",
    title: "ATARDECER CUMBIERO",
    subtitle: "La previa de un festival multitudinario",
    aspect: "portrait",
    destacada: false,
    rotate: -1.5,
    sway: 0.8,
    duration: 5.3,
  },
  {
    id: "seba-20",
    src: "/assets/galeria/seba-20.jpg",
    alt: "El Panda DJ saludando y festejando junto al público",
    title: "EL CARIÑO DEL PÚBLICO",
    subtitle: "De la esquina a los escenarios más grandes de Argentina",
    aspect: "portrait",
    destacada: false,
    rotate: 2.1,
    sway: -0.8,
    duration: 4.8,
  },
  {
    id: "seba-21",
    src: "/assets/galeria/seba-21.jpg",
    alt: "Público eufórico con banderas y luces",
    title: "LA CULTURA POPULAR",
    subtitle: "El movimiento que no para de crecer",
    aspect: "portrait",
    destacada: false,
    rotate: -1.9,
    sway: 1.1,
    duration: 5.4,
  },
  {
    id: "seba-22",
    src: "/assets/galeria/seba-22.jpg",
    alt: "El Panda DJ en el césped de Chase Stadium de Lionel Messi",
    title: "EN LAS TIERRAS DEL 10",
    subtitle: "Inter Miami CF • Florida, USA",
    aspect: "portrait",
    destacada: false,
    rotate: 1.3,
    sway: -0.7,
    duration: 5.0,
  },
];

// Duplicated list for seamless infinite auto-scroll loop
const INFINITE_GALLERY_ITEMS = [...GALLERY_ITEMS, ...GALLERY_ITEMS];

/* SVG Realistic Wooden Clothespin (Broche de Madera) */
function Clothespin({ className = "" }: { className?: string }) {
  return (
    <svg
      width="20"
      height="34"
      viewBox="0 0 20 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`drop-shadow-[0_4px_4px_rgba(0,0,0,0.85)] pointer-events-none select-none ${className}`}
    >
      {/* Left Wooden Pin */}
      <path
        d="M4 2C4 0.895431 4.89543 0 6 0H8.5C9.05228 0 9.5 0.447715 9.5 1V32C9.5 32.5523 9.05228 33 8.5 33H6C4.89543 33 4 32.1046 4 31V2Z"
        fill="#C99F67"
      />
      {/* Right Wooden Pin */}
      <path
        d="M10.5 1C10.5 0.447715 10.9477 0 11.5 0H14C15.1046 0 16 0.895431 16 2V31C16 32.1046 15.1046 33 14 33H11.5C10.9477 33 10.5 32.5523 10.5 32V1Z"
        fill="#B88A50"
      />
      {/* Slot Groove Shadow */}
      <rect x="9.2" y="1" width="1.6" height="32" fill="#5E3F1E" opacity="0.75" />
      {/* Wooden Bevel Highlights */}
      <line x1="5.5" y1="2" x2="5.5" y2="31" stroke="#E3C498" strokeWidth="0.8" opacity="0.7" />
      <line x1="14.5" y1="2" x2="14.5" y2="31" stroke="#8F6332" strokeWidth="0.8" opacity="0.6" />
      {/* Steel Spring Coil wrapping waist */}
      <rect x="2" y="13" width="16" height="6" rx="2" fill="#4B4B52" stroke="#71717A" strokeWidth="0.75" />
      <circle cx="10" cy="16" r="1.8" fill="#D4D4D8" />
    </svg>
  );
}

export default function PhotoTendedero() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Auto-scroll pause controls (only pause during active mouse drag, touch drag, or open modal)
  const [isTouching, setIsTouching] = useState(false);

  // Mouse drag tracking
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollStart, setScrollStart] = useState(0);
  const hasDragged = useRef(false);

  // Animation refs to prevent stale closure re-creation of requestAnimationFrame loop
  const isMouseDownRef = useRef(false);
  const isTouchingRef = useRef(false);
  const modalOpenRef = useRef(false);

  useEffect(() => {
    isMouseDownRef.current = isMouseDown;
  }, [isMouseDown]);

  useEffect(() => {
    isTouchingRef.current = isTouching;
  }, [isTouching]);

  useEffect(() => {
    modalOpenRef.current = selectedIndex !== null;
  }, [selectedIndex]);

  // CONTINUOUS SILKY-SMOOTH AUTO-SCROLL LOOP (DOES NOT STOP ON MOUSE HOVER)
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationFrameId: number;
    let lastTime = performance.now();
    const speed = 0.85; // Pixels per frame (normalized to 60fps)

    const step = (time: number) => {
      const elapsed = time - lastTime;
      lastTime = time;

      // Only pause if user is actively holding down the mouse to drag, touch-swiping, or modal is open
      if (
        !isMouseDownRef.current &&
        !isTouchingRef.current &&
        !modalOpenRef.current &&
        container
      ) {
        const halfWidth = container.scrollWidth / 2;
        const normalizedDelta = (speed * (elapsed > 0 && elapsed < 100 ? elapsed : 16.6)) / 16.6;

        container.scrollLeft += normalizedDelta;

        // When reaching the middle of the duplicated list, reset seamlessly to start
        if (container.scrollLeft >= halfWidth) {
          container.scrollLeft -= halfWidth;
        }
      }

      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);


  // Manual arrow navigation
  const handleScroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const distance = direction === "left" ? -460 : 460;
    scrollRef.current.scrollBy({ left: distance, behavior: "smooth" });
  };

  // Mouse Drag to Scroll handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsMouseDown(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollStart(scrollRef.current.scrollLeft);
    hasDragged.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDown || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    if (Math.abs(walk) > 6) {
      hasDragged.current = true;
    }
    scrollRef.current.scrollLeft = scrollStart - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsMouseDown(false);
  };

  const handlePhotoClick = (index: number) => {
    if (hasDragged.current) return;
    // Map from duplicated index back to 0..21
    setSelectedIndex(index % GALLERY_ITEMS.length);
  };

  // Lightbox navigation
  const handlePrevPhoto = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! > 0 ? prev! - 1 : GALLERY_ITEMS.length - 1));
  }, [selectedIndex]);

  const handleNextPhoto = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! < GALLERY_ITEMS.length - 1 ? prev! + 1 : 0));
  }, [selectedIndex]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowLeft") handlePrevPhoto();
      if (e.key === "ArrowRight") handleNextPhoto();
    };

    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [selectedIndex, handlePrevPhoto, handleNextPhoto]);

  return (
    <div className="relative mt-16 sm:mt-24 pt-8 pb-10 overflow-hidden">
      {/* Top Header & Navigation Bar */}
      <div className="mx-auto max-w-[1700px] px-4 sm:px-6 lg:px-10 mb-8 sm:mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-5 border-b border-[#2C261E] pb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#202C69] text-[#FAF6EE] text-[11px] sm:text-xs font-black uppercase tracking-wider border border-[#E8D43F]/30 shadow-[2px_2px_0_rgba(0,0,0,0.8)]">
              <Camera className="w-3.5 h-3.5 text-[#E8D43F]" />
              <span>Archivo Oficial • Fotos Colgadas</span>
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#15130F] text-[#CEC1AD] text-[11px] font-mono border border-[#453B2F]">
              22 FOTOS EXCLUSIVAS
            </span>
          </div>

          <h3 className="letra-bandera text-[clamp(1.8rem,4vw,3.2rem)] text-[#FAF6EE] leading-[0.92]">
            MOMENTOS, GIRA & AMIGOS
          </h3>
          <p className="text-sm sm:text-base text-[#CEC1AD] mt-1 font-medium max-w-xl">
            De las zapadas con Leo Messi y Di María hasta los estadios de fútbol y festivales más multitudinarios.
          </p>
        </div>

        {/* Action Controls & Arrows */}
        <div className="flex items-center gap-3 select-none self-start sm:self-auto">
          <span className="hidden md:inline-flex items-center gap-1.5 text-xs text-[#8F8270] font-bold uppercase tracking-wider mr-2">
            <Sparkles className="w-3.5 h-3.5 text-[#E8D43F]" />
            Giro continuo automático • Click para ampliar
          </span>

          <button
            type="button"
            onClick={() => handleScroll("left")}
            aria-label="Ver fotos anteriores"
            className="w-11 h-11 flex items-center justify-center bg-[#15130F] hover:bg-[#E8D43F] text-[#FAF6EE] hover:text-black border-2 border-[#453B2F] hover:border-[#E8D43F] shadow-[4px_4px_0_rgba(0,0,0,0.9)] hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => handleScroll("right")}
            aria-label="Ver fotos siguientes"
            className="w-11 h-11 flex items-center justify-center bg-[#15130F] hover:bg-[#E8D43F] text-[#FAF6EE] hover:text-black border-2 border-[#453B2F] hover:border-[#E8D43F] shadow-[4px_4px_0_rgba(0,0,0,0.9)] hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* CLOTHESLINE TENDEDERO CONTAINER */}
      <div
        className="relative w-full overflow-hidden pt-4 pb-8"
        onMouseLeave={() => {
          setIsMouseDown(false);
        }}
        onTouchStart={() => setIsTouching(true)}
        onTouchEnd={() => {
          setTimeout(() => setIsTouching(false), 800);
        }}
      >
        {/* Tension Wire running horizontally across full width */}
        <div className="absolute top-[28px] left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#705E4D] to-transparent pointer-events-none z-10 shadow-[0_1px_3px_rgba(0,0,0,0.9)]" />

        {/* Subtle Wire Highlights */}
        <div className="absolute top-[27px] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#A8947C]/40 to-transparent pointer-events-none z-10" />

        {/* Scrollable Ribbon Track (Continuous Infinite Loop) */}
        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          className={`flex items-start gap-6 sm:gap-8 px-6 sm:px-12 lg:px-16 overflow-x-auto no-scrollbar select-none py-6 ${
            isMouseDown ? "cursor-grabbing" : "cursor-grab"
          }`}
          style={{
            WebkitOverflowScrolling: "touch",
          }}
        >
          {INFINITE_GALLERY_ITEMS.map((item, index) => {
            // Determine width classes
            let widthClass = "w-[240px] sm:w-[270px] md:w-[290px]";
            if (item.aspect === "landscape") {
              widthClass = "w-[340px] sm:w-[390px] md:w-[430px]";
            } else if (item.destacada) {
              widthClass = "w-[290px] sm:w-[330px] md:w-[360px]";
            }

            // Aspect ratio
            let aspectClass = "aspect-[3/4]";
            if (item.aspect === "landscape") aspectClass = "aspect-[4/3]";
            if (item.aspect === "tall") aspectClass = "aspect-[9/16]";

            return (
              <div
                key={`${item.id}-${index}`}
                onClick={() => handlePhotoClick(index)}
                style={
                  {
                    "--rot": `${item.rotate}deg`,
                    "--sway": `${item.sway}deg`,
                    "--dur": `${item.duration}s`,
                    "--del": `${(index % 5) * 0.4}s`,
                  } as React.CSSProperties
                }
                className={`group relative shrink-0 tendedero-foto transition-all duration-300 ${widthClass}`}
              >
                {/* Clothespin (Broche de Madera) clipping card to wire */}
                <div className="absolute -top-[23px] left-1/2 -translate-x-1/2 z-30">
                  <Clothespin />
                </div>

                {/* Hanging Polaroid / Brutalist Card */}
                <div className="relative bg-[#FAF6EE] p-2.5 sm:p-3 pb-4 sm:pb-5 rounded-[2px] shadow-[6px_8px_0_rgba(0,0,0,0.95)] group-hover:shadow-[10px_14px_0_#E8D43F] border border-[#DDD4C5] transition-all duration-300">
                  {/* Photo Container (Clean, without top label stickers) */}
                  <div className={`relative w-full ${aspectClass} overflow-hidden bg-black rounded-[1px]`}>
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 640px) 290px, (max-width: 1024px) 360px, 430px"
                      className="object-cover contrast-[1.04] brightness-95 group-hover:scale-105 group-hover:contrast-100 group-hover:brightness-100 transition-all duration-500 pointer-events-none"
                    />

                    {/* Subtle Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                      <span className="inline-flex items-center gap-1.5 text-xs text-white font-bold bg-black/80 px-2.5 py-1 border border-white/20">
                        <ZoomIn className="w-3.5 h-3.5 text-[#E8D43F]" />
                        Ver foto completa
                      </span>
                    </div>
                  </div>

                  {/* Card Caption Zone (Polaroid Style Bottom) */}
                  <div className="pt-3 px-0.5">
                    <p className="font-black text-black text-xs sm:text-sm uppercase tracking-tight truncate">
                      {item.title}
                    </p>
                    <p className="text-[11px] sm:text-xs text-[#6B5C4D] font-bold truncate mt-0.5">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-3 sm:p-6 lg:p-10 select-none animate-in fade-in duration-200"
          onClick={() => setSelectedIndex(null)}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIndex(null);
            }}
            aria-label="Cerrar foto"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 w-12 h-12 flex items-center justify-center bg-[#15130F] hover:bg-[#E8D43F] text-[#FAF6EE] hover:text-black border-2 border-[#453B2F] hover:border-[#E8D43F] shadow-[4px_4px_0_rgba(0,0,0,0.9)] transition-all cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handlePrevPhoto();
            }}
            aria-label="Foto anterior"
            className="absolute left-3 sm:left-6 z-50 w-12 h-12 flex items-center justify-center bg-[#15130F] hover:bg-[#E8D43F] text-[#FAF6EE] hover:text-black border-2 border-[#453B2F] hover:border-[#E8D43F] shadow-[4px_4px_0_rgba(0,0,0,0.9)] transition-all cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleNextPhoto();
            }}
            aria-label="Foto siguiente"
            className="absolute right-3 sm:right-6 z-50 w-12 h-12 flex items-center justify-center bg-[#15130F] hover:bg-[#E8D43F] text-[#FAF6EE] hover:text-black border-2 border-[#453B2F] hover:border-[#E8D43F] shadow-[4px_4px_0_rgba(0,0,0,0.9)] transition-all cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Main Modal Image Container */}
          <div
            className="relative max-w-5xl max-h-[92vh] flex flex-col items-center bg-[#15130F] border-2 border-[#453B2F] shadow-[12px_12px_0_rgba(0,0,0,0.9)] p-3 sm:p-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Clothespin accent at top of modal */}
            <div className="absolute -top-[20px] left-1/2 -translate-x-1/2 z-10">
              <Clothespin />
            </div>

            {/* Modal Image */}
            <div className="relative w-full max-h-[72vh] flex items-center justify-center overflow-hidden bg-black">
              <div
                className={`relative w-full ${
                  GALLERY_ITEMS[selectedIndex].aspect === "landscape"
                    ? "aspect-[4/3] max-w-4xl h-[65vh]"
                    : GALLERY_ITEMS[selectedIndex].aspect === "tall"
                    ? "aspect-[9/16] max-w-md h-[72vh]"
                    : "aspect-[3/4] max-w-2xl h-[70vh]"
                }`}
              >
                <Image
                  src={GALLERY_ITEMS[selectedIndex].src}
                  alt={GALLERY_ITEMS[selectedIndex].alt}
                  fill
                  priority
                  className="object-contain"
                  sizes="(max-width: 1200px) 90vw, 1200px"
                />
              </div>
            </div>

            {/* Modal Caption Footer */}
            <div className="w-full pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-[#2C261E] mt-3">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs text-[#E8D43F] font-mono font-bold">
                    Foto {selectedIndex + 1} de {GALLERY_ITEMS.length}
                  </span>
                </div>
                <h4 className="text-base sm:text-xl font-black text-[#FAF6EE] tracking-tight">
                  {GALLERY_ITEMS[selectedIndex].title}
                </h4>
                <p className="text-xs sm:text-sm text-[#CEC1AD] font-medium">
                  {GALLERY_ITEMS[selectedIndex].subtitle}
                </p>
              </div>

              {/* Instructions */}
              <div className="hidden sm:flex items-center gap-2 text-xs text-[#8F8270] font-mono">
                <span>◀ ▶ Teclado para navegar</span>
                <span>•</span>
                <span>ESC para cerrar</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
