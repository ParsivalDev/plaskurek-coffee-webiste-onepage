export default function ContactMap() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-[color:rgba(178,135,73,0.18)] bg-[color:var(--wheat-100)] shadow-soft">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(122,122,85,0.15)_1px,transparent_1px),linear-gradient(180deg,rgba(122,122,85,0.15)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-[color:rgba(178,135,73,0.18)]" />
      <div className="relative flex h-full min-h-[320px] items-center justify-center">
        <div className="text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[color:var(--brown-900)] text-white shadow-soft">
            <span className="text-lg">o</span>
          </div>
          <p className="mt-4 text-sm font-semibold text-[color:var(--brown-900)]">
            Płaskurek
          </p>
          <p className="text-xs text-[color:var(--brown-700)]">
            TODO: osadz tutaj mapke
          </p>
        </div>
      </div>
    </div>
  );
}
