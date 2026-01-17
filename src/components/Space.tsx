import Section from "@/components/Section";

const stats = [
  { label: "miejsc siedzacych", value: "48" },
  { label: "gniazdka", value: "24" },
  { label: "Wi-Fi", value: "300 Mb/s" },
  { label: "strefy", value: "3" },
];

const timeCards = [
  {
    title: "Rano",
    text: "Spokojny start dnia z zapachem swiezego chleba i kawy. Idealne na chwile tylko dla siebie.",
  },
  {
    title: "Popoludnie",
    text: "Przerwa na lunch, cieple dania i praca przy stoliku. W tle spokojna muzyka.",
  },
  {
    title: "Wieczor",
    text: "Spotkania ze znajomymi, cieple swiatlo i rozmowy przy kieliszku kawy lub herbaty.",
  },
];

export default function Space() {
  return (
    <Section
      id="przestrzen"
      title="Przestrzen, w ktorej chce sie zostac"
      subtitle="Przestrzen"
      className="grainy noise-soft"
    >
      <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
        <div>
          <p className="text-lg text-[color:var(--brown-700)]">
            Duza sala, jasne stoliki i wygodne miejsca do pracy. Płaskurek
            to piekarnia, ale tez kawiarnia z prawdziwym klimatem – mozesz
            wpasc na chwile albo zostac na dluzej.
          </p>
          <ul className="mt-6 grid gap-3 text-sm text-[color:var(--brown-700)]">
            <li>• duzo stolikow i spokojne strefy</li>
            <li>• stabilne Wi-Fi i gniazdka przy stolikach</li>
            <li>• lagodna muzyka i przytulne swiatlo</li>
            <li>• przyjazna obsluga i swoboda pracy</li>
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="section-card rounded-2xl p-4 text-center shadow-soft"
            >
              <p className="text-2xl font-semibold text-[color:var(--brown-900)]">
                {stat.value}
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[color:var(--green-muted)]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {timeCards.map((card) => (
          <div
            key={card.title}
            className="rounded-2xl border border-[color:rgba(178,135,73,0.12)] bg-white/80 p-5 shadow-sm"
          >
            <h3 className="text-lg font-semibold text-[color:var(--brown-900)]">
              {card.title}
            </h3>
            <p className="mt-3 text-sm text-[color:var(--brown-700)]">
              {card.text}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
