import Section from "@/components/Section";
import ContactMap from "@/components/ContactMap";

export default function Contact() {
  return (
    <Section
      id="kontakt"
      title="Kontakt i dojazd"
      subtitle="Kontakt"
      className="bg-[color:rgba(239,228,209,0.6)]"
    >
      <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
        <div className="rounded-2xl border border-[color:rgba(178,135,73,0.18)] bg-white/80 p-6 shadow-soft">
          <h3 className="text-lg font-semibold text-[color:var(--brown-900)]">
            Płaskurek
          </h3>
          <p className="mt-2 text-sm text-[color:var(--brown-700)]">
            ul. 11-Listopada 59a, 28-200 Staszów
          </p>
          <div className="mt-6 grid gap-4 text-sm text-[color:var(--brown-700)]">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--green-muted)]">
                Godziny
              </p>
              <p className="mt-2">Pn-Pt: 7:00 - 21:00</p>
              <p>Sob-Nd: 8:00 - 22:00</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--green-muted)]">
                Kontakt
              </p>
              <p>plaskurekcoffee@o2.pl</p>
            </div>
          </div>
          <a
            href="#"
            className="focus-ring mt-6 inline-flex rounded-full bg-[color:var(--wheat-300)] px-5 py-3 text-sm font-semibold text-[color:var(--brown-900)] transition hover:bg-[color:var(--wheat-500)]"
          >
            Jak dojechac
          </a>
        </div>
        <ContactMap />
      </div>
    </Section>
  );
}
