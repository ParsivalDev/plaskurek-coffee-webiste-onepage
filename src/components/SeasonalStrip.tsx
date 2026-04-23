import { Wheat } from "@/components/Icons";

const items = [
  "Sezonowe nowości: drożdżówka z gruszką i kardamonem",
  "Krem z dyni z olejem ziołowym",
  "Ciasto orzechowe z miodem",
  "Kawa z przyprawami korzennymi",
];

export default function SeasonalStrip() {
  const full = [...items, ...items];

  return (
    <section className="relative overflow-hidden border-y border-[color:rgba(216,183,118,0.15)] bg-[color:var(--brown-900)] py-5 text-white">
      <div className="absolute inset-0 bg-gradient-to-r from-[color:rgba(216,183,118,0.2)] via-transparent to-[color:rgba(122,122,85,0.18)]" />
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[color:var(--brown-900)] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[color:var(--brown-900)] to-transparent" />
      <div className="relative mx-auto max-w-full overflow-hidden">
        <div className="flex w-[200%] animate-ticker items-center gap-10 whitespace-nowrap px-6 text-sm tracking-[0.2em] text-white/85 md:px-10">
          {full.map((item, index) => (
            <span key={index} className="flex items-center gap-10">
              <Wheat
                size={16}
                className="text-[color:var(--wheat-300)] opacity-70"
              />
              <span className="uppercase">{item}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
