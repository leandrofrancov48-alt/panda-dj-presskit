import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import MarqueeTicker from "@/components/ui/MarqueeTicker";
import Bio from "@/components/sections/Bio";
import Booking from "@/components/sections/Booking";
import Downloads from "@/components/sections/Downloads";
import ExtraServices from "@/components/sections/ExtraServices";
import Footer from "@/components/layout/Footer";
import FloatingBar from "@/components/layout/FloatingBar";
import ScrollAnimations from "@/components/ui/ScrollAnimations";
import SplashIntro from "@/components/ui/SplashIntro";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#0C0B09] text-[#FAF6EE] selection:bg-[#E8D43F] selection:text-black">
      {/* 0. Welcome Splash Intro Animation (Fer Palacio "Recibimiento" Style) */}
      <SplashIntro />

      {/* Scroll Trigger Engine (Observes .revelar, .pincelada, .iza) */}
      <ScrollAnimations />

      {/* 1. Header Navigation */}
      <Navbar />

      {/* 2. Hero Section */}
      <Hero />

      {/* 3. Endless Animated Marquee Tape */}
      <MarqueeTicker
        text="SIN EL PANDA NO HAY CUMBIA ★ EL PANDA DJ EN VIVO ★ COFUNDADOR DE UN POCO DE RUIDO ★ ESTADIO VÉLEZ SARSFIELD (+45.000 PERSONAS) ★ FESTIVALES & CLUBES ★"
        bgColor="bg-[#E8D43F]"
        textColor="text-black"
      />

      {/* 4. Bio Section: "DE LA ESQUINA A VÉLEZ SARSFIELD" */}
      <Bio />

      {/* 5. Secondary Marquee Ticker */}
      <MarqueeTicker
        text="GIRA NACIONAL 2026 ★ APERTURA HISTÓRICA EN VÉLEZ ★ FERIADO DE MALDINI ★ BUENOS AIRES CUMBIA ★ BOOKING OFICIAL ★"
        reverse={true}
        bgColor="bg-[#15130F]"
        textColor="text-[#E8D43F]"
      />

      {/* 6. Booking Section: "CONTRATÁ A PANDA" */}
      <Booking />

      {/* 7. Downloads Section: "PARA DISEÑADORES & PRENSA - DESCARGAS" */}
      <Downloads />

      {/* 8. Extra Services: "SERVICIOS EXTRA - HACEMOS TU EVENTO & PANDA ACCESS" */}
      <ExtraServices />

      {/* 9. Footer & Socials */}
      <Footer />

      {/* 10. Mobile Floating Quick Action Bar */}
      <FloatingBar />
    </main>
  );
}
