const links = [
  { id: "start", label: "Start" },
  { id: "onas", label: "O nas" },
  { id: "menu", label: "Menu" },
  { id: "przestrzen", label: "Przestrzen" },
  { id: "eventy", label: "Eventy" },
  { id: "kontakt", label: "Kontakt" },
];

export default function Footer() {
  return (
    <footer className="bg-[color:var(--brown-900)] text-white">
      <div className="mx-auto max-w-6xl px-6 py-10 md:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-semibold">Płaskurek</p>
            <p className="mt-2 text-sm text-white/70">
              Płaskurek — piekarnia i kawiarnia, w ktorej chce sie zostac.
            </p>
          </div>
          <nav className="flex flex-wrap gap-4 text-sm text-white/70">
            {links.map((link) => (
              <a key={link.id} href={`#${link.id}`} className="hover:text-white">
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <p className="mt-8 text-xs text-white/50">
          © 2026 Płaskurek. Wszystkie prawa zastrzezone.
        </p>
      </div>
    </footer>
  );
}
