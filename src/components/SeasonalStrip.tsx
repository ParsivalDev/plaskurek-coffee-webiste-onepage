export default function SeasonalStrip() {
  return (
    <section className="relative overflow-hidden bg-[color:var(--brown-900)] py-4 text-white">
      <div className="absolute inset-0 bg-gradient-to-r from-[color:rgba(216,183,118,0.25)] via-transparent to-[color:rgba(122,122,85,0.2)] opacity-70" />
      <div className="relative mx-auto max-w-6xl overflow-hidden px-6 md:px-10">
        <div className="flex w-[200%] gap-8 whitespace-nowrap text-sm uppercase tracking-[0.3em] text-white/80 animate-ticker">
          <span>Sezonowe nowosci: drozdzowka z gruszka i kardamonem</span>
          <span>Krem z dyni z olejem ziolowym</span>
          <span>Ciasto orzechowe z miodem</span>
          <span>Kawa z przyprawami korzennymi</span>
          <span>Sezonowe nowosci: drozdzowka z gruszka i kardamonem</span>
          <span>Krem z dyni z olejem ziolowym</span>
          <span>Ciasto orzechowe z miodem</span>
          <span>Kawa z przyprawami korzennymi</span>
        </div>
      </div>
    </section>
  );
}
