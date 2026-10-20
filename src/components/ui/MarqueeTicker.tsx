export default function MarqueeTicker({
  text = "NO PANDA NO PARTY ★ EL PANDA DJ EN VIVO ★ COFUNDADOR DE UN POCO DE RUIDO ★ ESTADIO VÉLEZ SARSFIELD (+45.000 PERSONAS) ★ TICKETS OFICIALES EN PANDA ACCESS ★",
  reverse = false,
  bgColor = "bg-[#F59E0B]",
  textColor = "text-black",
}: {
  text?: string;
  reverse?: boolean;
  bgColor?: string;
  textColor?: string;
}) {
  return (
    <div
      className={`relative w-full overflow-hidden ${bgColor} ${textColor} py-3 font-extrabold uppercase tracking-widest text-sm sm:text-base border-y border-black/10 select-none shadow-md`}
    >
      <div className={`${reverse ? "animate-marquee-fast" : "animate-marquee"} flex items-center`}>
        <span className="whitespace-nowrap px-4 font-black">{text}</span>
        <span className="whitespace-nowrap px-4 font-black">{text}</span>
        <span className="whitespace-nowrap px-4 font-black">{text}</span>
        <span className="whitespace-nowrap px-4 font-black">{text}</span>
      </div>
    </div>
  );
}
