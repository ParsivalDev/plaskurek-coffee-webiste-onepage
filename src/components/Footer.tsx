import { Facebook, Mail, MapPin, Wheat } from "@/components/Icons";

const links = [
  { id: "start", label: "Start" },
  { id: "onas", label: "O nas" },
  { id: "menu", label: "Menu" },
  { id: "przestrzen", label: "Przestrzeń" },
  { id: "eventy", label: "Eventy" },
  { id: "kontakt", label: "Kontakt" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[color:var(--brown-900)] text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 text-white/5"
      >
        <Wheat size={260} strokeWidth={1} />
      </div>
      <div className="relative mx-auto max-w-6xl px-6 py-14 md:px-10">
        <div className="grid gap-10 md:grid-cols-[1.3fr,1fr,1fr]">
          <div>
            <p className="font-display text-3xl font-bold">Płaskurek</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/70">
              Piekarnia i kawiarnia, w której chce się zostać. Rzemiosło wypieku,
              kawa z charakterem i miejsce na spokojną chwilę.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61586080679602"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:-translate-y-0.5 hover:bg-white/20"
              >
                <Facebook size={18} />
              </a>
              <a
                href="mailto:plaskurekcoffee@o2.pl"
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:-translate-y-0.5 hover:bg-white/20"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/50">
              Nawigacja
            </p>
            <nav className="mt-4 grid grid-cols-2 gap-y-2 text-sm text-white/80">
              {links.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className="transition hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/50">
              Kontakt
            </p>
            <div className="mt-4 flex items-start gap-2 text-sm text-white/80">
              <MapPin size={16} className="mt-0.5 shrink-0 text-white/60" />
              <span>
                ul. 11-Listopada 59a
                <br />
                28-200 Staszów
              </span>
            </div>
            <a
              href="mailto:plaskurekcoffee@o2.pl"
              className="mt-3 flex items-start gap-2 text-sm text-white/80 transition hover:text-white"
            >
              <Mail size={16} className="mt-0.5 shrink-0 text-white/60" />
              plaskurekcoffee@o2.pl
            </a>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 md:flex-row md:items-center">
          <p className="text-xs text-white/50">
            © 2026 Płaskurek. Wszystkie prawa zastrzeżone.
          </p>
          <p className="text-xs text-white/40">Wypiekamy z sercem</p>
        </div>
      </div>
    </footer>
  );
}
