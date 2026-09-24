import { Wheat } from "@/components/Icons";

const items = [
  "Sezonowe nowości: drożdżówka z gruszką i kardamonem",
  "Krem z dyni z olejem ziołowym",
  "Ciasto orzechowe z miodem",
  "Kawa z przyprawami korzennymi",
];

function Row({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul
      aria-hidden={hidden || undefined}
      className="flex shrink-0 items-center gap-10 pr-10"
    >
      {items.map((item) => (
        <li key={item} className="flex items-center gap-10">
          <Wheat
            size={16}
            className="text-[color:var(--wheat-300)] opacity-70"
          />
          <span className="uppercase">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function SeasonalStrip() {
  return (
    <section
      aria-label="Sezonowe nowości"
      className="relative overflow-hidden border-y border-[color:rgba(216,183,118,0.15)] bg-[color:var(--brown-900)] py-5 text-white"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[color:rgba(216,183,118,0.2)] via-transparent to-[color:rgba(122,122,85,0.18)]" />
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[color:var(--brown-900)] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[color:var(--brown-900)] to-transparent" />
      <div className="relative flex w-max animate-ticker whitespace-nowrap text-sm tracking-[0.2em] text-white/85 hover:[animation-play-state:paused] motion-reduce:animate-none">
        <Row />
        <Row hidden />
      </div>
    </section>
  );
}
