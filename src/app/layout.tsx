import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const yellowBalloon = localFont({
  src: "./fonts/YellowBalloon.ttf",
  variable: "--font-yellow-balloon",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://elpandadj.com.ar"),
  title: "El Panda DJ • Portfolio Oficial & Presskit (EPK)",
  description:
    "Sitio oficial, portfolio y Presskit (EPK) de El Panda DJ. Cofundador de Un Poco de Ruido, apertura en Estadio Vélez Sarsfield (+45.000 personas). Escuchá los últimos mixes y contratá el show.",
  keywords: [
    "El Panda DJ",
    "Panda DJ",
    "Un Poco de Ruido",
    "No Panda No Party",
    "Cumbia Argentina",
    "Booking Panda DJ",
    "Presskit El Panda DJ",
  ],
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://elpandadj.com.ar",
    title: "El Panda DJ • Web Oficial & EPK",
    description:
      "El ritmo, la fiesta y la revolución de la cumbia. Escuchá los últimos mixes y contratá el show para tu evento.",
    siteName: "El Panda DJ",
    images: [
      {
        url: "/panda-logo.png",
        width: 800,
        height: 800,
        alt: "El Panda DJ",
      },
    ],
  },
  icons: {
    icon: "/panda-logo.png",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`dark ${yellowBalloon.variable} scroll-smooth`}
      style={{ colorScheme: "dark" }}
    >
      <body
        className={`${yellowBalloon.className} min-h-screen flex flex-col bg-[#0C0B09] text-[#FAF6EE] selection:bg-[#F59E0B] selection:text-black antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
