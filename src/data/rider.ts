import { TechRiderCategory } from "@/types";

export const TECH_RIDER: TechRiderCategory[] = [
  {
    title: "Cabina DJ & Reproductores",
    iconName: "Disc3",
    description: "Equipamiento estándar Pioneer Pro DJ vinculado en red",
    specs: [
      {
        name: "Reproductores Multi-Player",
        detail: "2x Pioneer CDJ-3000 o 2x Pioneer CDJ-2000 Nexus 2 vinculados vía Link RJ45 con switch Gigabit.",
        required: true,
      },
      {
        name: "Mezclador Principal (Mixer)",
        detail: "1x Pioneer DJM-A9, DJM-900 Nexus 2 o Pioneer DJM-V10 en perfecto estado operativo.",
        required: true,
      },
      {
        name: "Actualización de Firmware",
        detail: "Todos los equipos deben contar con el firmware oficial actualizado a la última versión estable.",
        required: true,
      },
    ],
  },
  {
    title: "Monitoreo de Escenario",
    iconName: "Volume2",
    description: "Sistema estéreo de alta potencia en cabina",
    specs: [
      {
        name: "Monitores de Cabina",
        detail: "2x Monitores autoamplificados de 12\" o 15\" (Yamaha DXR, RCF TT, QSC K12.2 o similar) a la altura del oído.",
        required: true,
      },
      {
        name: "Control de Volumen Booth",
        detail: "Línea directa conectada a la salida BOOTH del mixer DJ con control de volumen independiente y sin limitador forzado.",
        required: true,
      },
    ],
  },
  {
    title: "Microfonía & Comunicación",
    iconName: "Mic",
    description: "Línea inalámbrica profesional para animación y arenga",
    specs: [
      {
        name: "Micrófono Inalámbrico",
        detail: "1x Shure SM58 / Beta 58A inalámbrico o Sennheiser EW-D con cápsula dinámica profesional.",
        required: true,
      },
      {
        name: "Baterías de Repuesto",
        detail: "Pilas alcalinas nuevas instaladas antes del inicio del set + repuesto sellado en cabina.",
        required: true,
      },
    ],
  },
  {
    title: "Estructura, Electricidad & Conectividad",
    iconName: "Zap",
    description: "Requisitos de seguridad, estabilidad y energía",
    specs: [
      {
        name: "Mesa / Cabina DJ",
        detail: "Mesa rígida y nivelada con altura de 95 cm a 100 cm, firme y libre de vibraciones acústicas de graves.",
        required: true,
      },
      {
        name: "Energía 220V Estabilizada",
        detail: "Zapatilla con 4 tomas de corriente 220V con descarga a tierra exclusiva para la cabina DJ.",
        required: true,
      },
      {
        name: "Iluminación de Cabina",
        detail: "Luz cenital tenue o flexo dimerizable para control de mixer y reproductores en penumbra.",
        required: false,
      },
    ],
  },
  {
    title: "Hospitality & Camarín",
    iconName: "Sparkles",
    description: "Requerimientos básicos de catering en cabina",
    specs: [
      {
        name: "Hidratación",
        detail: "4x botellas de agua mineral sin gas 500ml frías + 4x energizantes (Speed / Red Bull).",
        required: true,
      },
      {
        name: "Comodidad en Cabina",
        detail: "Toalla de mano de algodón negra limpia en cabina + espacio reservado para bolsos técnicos.",
        required: true,
      },
    ],
  },
];
