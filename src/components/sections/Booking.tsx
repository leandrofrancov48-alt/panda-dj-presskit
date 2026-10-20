"use client";

import { useState } from "react";
import { MessageSquare, Phone, Mail, Sparkles, Send, RotateCcw, ExternalLink } from "lucide-react";

const EVENT_OPTIONS = [
  { id: "festival", label: "Festival / Estadio", defaultMsg: "Hola, quiero contratarte para un Festival." },
  { id: "boliche", label: "Boliche / Club", defaultMsg: "Hola, quiero contratarte para una fecha en un Boliche / Club." },
  { id: "fiesta", label: "Fiesta Privada", defaultMsg: "Hola, quiero contratarte para una Fiesta Privada." },
  { id: "cumple", label: "Cumpleaños / Casamiento", defaultMsg: "Hola, quiero contratarte para un Cumpleaños / Casamiento." },
  { id: "corporativo", label: "Evento Corporativo", defaultMsg: "Hola, quiero contratarte para un Evento Corporativo." },
  { id: "gira", label: "Gira / Tour", defaultMsg: "Hola, quiero contratarte para una Gira / Tour." },
];

const PHONE_NUMBER = "+54 9 11 6889-4219";
const PHONE_CLEAN = "5491168894219";
const EMAIL_ADDRESS = "elpandadj13@gmail.com";

export default function Booking() {
  const [selectedEvent, setSelectedEvent] = useState(EVENT_OPTIONS[0].label);
  const [message, setMessage] = useState(EVENT_OPTIONS[0].defaultMsg);

  const handleSelectEvent = (eventLabel: string, defaultMsg: string) => {
    setSelectedEvent(eventLabel);
    setMessage(defaultMsg);
  };

  const handleReset = () => {
    const current = EVENT_OPTIONS.find((e) => e.label === selectedEvent) || EVENT_OPTIONS[0];
    setMessage(current.defaultMsg);
  };

  const handleAppendDetail = (detailText: string) => {
    setMessage((prev) => `${prev.trim()}\n${detailText}`);
  };

  // WhatsApp send handler
  const handleSendWhatsApp = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const textToSend = message.trim() || `Hola, quiero contratarte para ${selectedEvent}.`;
    const url = `https://wa.me/${PHONE_CLEAN}?text=${encodeURIComponent(textToSend)}`;
    window.open(url, "_blank");
  };

  // Gmail Web send handler (opens Gmail web composer, not desktop mail client)
  const handleSendEmail = () => {
    const textToSend = message.trim() || `Hola, quiero contratarte para ${selectedEvent}.`;
    const subject = `Consulta Contratación: ${selectedEvent} - El Panda DJ`;
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL_ADDRESS}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(textToSend)}`;
    window.open(gmailUrl, "_blank");
  };

  return (
    <section
      id="contacto"
      className="relative scroll-mt-24 py-16 sm:py-24 bg-[#15130F] text-[#FAF6EE] border-t border-[#2C261E]"
      aria-labelledby="contacto-titulo"
    >
      <div className="mx-auto max-w-[1700px] px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="mb-12">
          <h2 id="contacto-titulo" className="flex flex-col">
            <div className="revelar" style={{ "--i": 0 } as React.CSSProperties}>
              <span className="pincelada letra-bandera text-[clamp(2.6rem,8vw,6.5rem)] text-[#FAF6EE] leading-none">
                CONTRATÁ A PANDA
              </span>
            </div>
          </h2>
          <div className="revelar mt-3" style={{ "--i": 1 } as React.CSSProperties}>
            <p className="iza text-base sm:text-xl font-bold text-[#CEC1AD] max-w-2xl">
              Contratación directa por WhatsApp o Email para festivales, clubes, boliches, fiestas privadas y eventos en todo el país.
            </p>
          </div>
        </div>

        {/* 2-Step Interactive Booking */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Step 1: Selección de Evento */}
          <div
            className="revelar lg:col-span-5"
            style={{ "--i": 1 } as React.CSSProperties}
          >
            <div className="iza p-7 sm:p-9 rounded-2xl bg-[#0C0B09] border-2 border-[#2C261E] hover:border-[#453B2F] transition-colors space-y-6 shadow-[8px_8px_0_rgba(0,0,0,0.85)]">
              <div>
                <span className="text-xs font-black text-[#E8D43F] uppercase tracking-widest block font-mono">
                  Paso 01
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#FAF6EE] uppercase mt-1">
                  Elegí el evento
                </h3>
                <p className="text-xs text-[#8F8270] mt-1 font-normal">
                  Tocá el tipo de show para generar el mensaje predeterminado.
                </p>
              </div>

              {/* Event Type Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {EVENT_OPTIONS.map((item) => {
                  const isSelected = selectedEvent === item.label;
                  return (
                    <button
                      type="button"
                      key={item.id}
                      onClick={() => handleSelectEvent(item.label, item.defaultMsg)}
                      className={`py-3.5 px-4 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider text-center transition-all cursor-pointer ${
                        isSelected
                          ? "bg-[#E8D43F] text-black shadow-[4px_4px_0_rgba(0,0,0,0.9)] scale-[1.02]"
                          : "bg-[#15130F] text-[#CEC1AD] border border-[#2C261E] hover:border-[#453B2F] hover:text-[#FAF6EE]"
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>

              {/* Direct Booking Contact Channels */}
              <div className="pt-6 border-t border-[#2C261E] space-y-3">
                <span className="text-xs font-bold text-[#8F8270] uppercase tracking-wider block">
                  Canales Oficiales de Contratación
                </span>

                <a
                  href={`https://wa.me/${PHONE_CLEAN}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#15130F] border border-[#2C261E] hover:border-[#E8D43F]/50 text-xs sm:text-sm font-bold text-[#FAF6EE] hover:text-[#E8D43F] transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#E8D43F]" />
                    <span>WhatsApp: {PHONE_NUMBER}</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[#8F8270] group-hover:text-[#E8D43F]" />
                </a>

                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL_ADDRESS}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#15130F] border border-[#2C261E] hover:border-[#E8D43F]/50 text-xs sm:text-sm font-bold text-[#FAF6EE] hover:text-[#E8D43F] transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[#E8D43F]" />
                    <span>Gmail: {EMAIL_ADDRESS}</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[#8F8270] group-hover:text-[#E8D43F]" />
                </a>
              </div>
            </div>
          </div>

          {/* Step 2: Mensaje Personalizable para WhatsApp o Email */}
          <div
            className="revelar lg:col-span-7"
            style={{ "--i": 2 } as React.CSSProperties}
          >
            <div className="iza p-7 sm:p-9 rounded-2xl bg-[#0C0B09] border-2 border-[#2C261E] hover:border-[#453B2F] transition-colors space-y-6 shadow-[8px_8px_0_rgba(0,0,0,0.85)]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="text-xs font-black text-[#E8D43F] uppercase tracking-widest block font-mono">
                    Paso 02
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-[#FAF6EE] uppercase mt-1">
                    Tu Mensaje de Consulta
                  </h3>
                </div>

                {/* Destination Badges */}
                <div className="flex flex-wrap items-center gap-2 self-start sm:self-auto">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#15130F] border border-[#2C261E] text-[11px] font-mono text-[#E8D43F]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>{PHONE_NUMBER}</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#15130F] border border-[#2C261E] text-[11px] font-mono text-[#CEC1AD]">
                    <Mail className="w-3 h-3 text-[#E8D43F]" />
                    <span>{EMAIL_ADDRESS}</span>
                  </span>
                </div>
              </div>

              <p className="text-xs text-[#8F8270]">
                Este es el mensaje predeterminado. Podés <span className="text-[#FAF6EE] font-bold">borrarlo, modificarlo o agregar lo que quieras</span> y luego enviarlo por WhatsApp o Email:
              </p>

              {/* Editable Message Textarea */}
              <div className="relative">
                <textarea
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Escribí tu mensaje aquí..."
                  className="w-full p-4 rounded-xl bg-[#15130F] border-2 border-[#2C261E] focus:border-[#E8D43F] text-[#FAF6EE] text-sm sm:text-base leading-relaxed focus:outline-none transition-colors resize-y min-h-[140px] font-sans"
                />

                {/* Reset button */}
                <button
                  type="button"
                  onClick={handleReset}
                  title="Restablecer mensaje predeterminado"
                  className="absolute right-3 top-3 inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#0C0B09] border border-[#2C261E] hover:border-[#E8D43F] text-[11px] text-[#CEC1AD] hover:text-[#FAF6EE] transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3 text-[#E8D43F]" />
                  <span>Reestablecer</span>
                </button>
              </div>

              {/* Quick Append Tags */}
              <div>
                <span className="text-xs font-black text-[#8F8270] uppercase tracking-wider block mb-2 font-mono">
                  Atajos rápidos para sumar detalles (opcional):
                </span>
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => handleAppendDetail("📅 Fecha estimada: ")}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#15130F] border border-[#2C261E] hover:border-[#E8D43F] text-xs font-bold text-[#CEC1AD] hover:text-[#FAF6EE] transition-all cursor-pointer"
                  >
                    <span>+ Agregar fecha</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleAppendDetail("📍 Lugar / Ciudad: ")}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#15130F] border border-[#2C261E] hover:border-[#E8D43F] text-xs font-bold text-[#CEC1AD] hover:text-[#FAF6EE] transition-all cursor-pointer"
                  >
                    <span>+ Agregar ciudad</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleAppendDetail("👤 Mi nombre / Productora: ")}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#15130F] border border-[#2C261E] hover:border-[#E8D43F] text-xs font-bold text-[#CEC1AD] hover:text-[#FAF6EE] transition-all cursor-pointer"
                  >
                    <span>+ Agregar mi nombre</span>
                  </button>
                </div>
              </div>

              {/* Both Action Buttons: WhatsApp & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => handleSendWhatsApp()}
                  className="w-full py-4 px-5 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider bg-[#E8D43F] hover:bg-[#F2E263] text-black transition-all shadow-[4px_4px_0_rgba(0,0,0,0.9)] hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2.5 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 fill-black" />
                  <span>Enviar por WhatsApp</span>
                  <Send className="w-3.5 h-3.5 ml-0.5" />
                </button>

                <button
                  type="button"
                  onClick={handleSendEmail}
                  className="w-full py-4 px-5 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider bg-[#15130F] hover:bg-[#201C16] text-[#FAF6EE] border-2 border-[#453B2F] hover:border-[#E8D43F] transition-all shadow-[4px_4px_0_rgba(0,0,0,0.9)] hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2.5 cursor-pointer"
                >
                  <Mail className="w-4 h-4 text-[#E8D43F]" />
                  <span>Enviar por Gmail</span>
                  <Send className="w-3.5 h-3.5 ml-0.5 text-[#E8D43F]" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-xs text-[#8F8270] text-center">
                <Sparkles className="w-3.5 h-3.5 text-[#E8D43F]" />
                <span>Elegí WhatsApp ({PHONE_NUMBER}) o Gmail ({EMAIL_ADDRESS}) con tu mensaje personalizado</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
