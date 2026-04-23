"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";
import { SunLow, Sun, Moon, Users, Plug, Wifi, Check } from "@/components/Icons";

const stats = [
  { label: "miejsc siedzących", value: "48", Icon: Users },
  { label: "gniazdka", value: "24", Icon: Plug },
  { label: "Wi-Fi", value: "300 Mb/s", Icon: Wifi },
  { label: "strefy", value: "3", Icon: Check },
];

const timeCards = [
  {
    title: "Rano",
    text: "Spokojny start dnia z zapachem świeżego chleba i kawy. Idealne na chwilę tylko dla siebie.",
    Icon: SunLow,
  },
  {
    title: "Popołudnie",
    text: "Przerwa na lunch, ciepłe dania i praca przy stoliku. W tle spokojna muzyka.",
    Icon: Sun,
  },
  {
    title: "Wieczór",
    text: "Spotkania ze znajomymi, ciepłe światło i rozmowy przy kieliszku kawy lub herbaty.",
    Icon: Moon,
  },
];

const perks = [
  "dużo stolików i spokojne strefy",
  "stabilne Wi-Fi i gniazdka przy stolikach",
  "łagodna muzyka i przytulne światło",
  "przyjazna obsługa i swoboda pracy",
];

export default function Space() {
  return (
    <Section
      id="przestrzen"
      title="Przestrzeń, w której chce się zostać"
      subtitle="Przestrzeń"
      className="grainy noise-soft"
    >
      <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-lg leading-relaxed text-[color:var(--brown-700)]">
            Duża sala, jasne stoliki i wygodne miejsca do pracy. Płaskurek
            to piekarnia, ale też kawiarnia z prawdziwym klimatem – możesz
            wpaść na chwilę albo zostać na dłużej.
          </p>
          <ul className="mt-8 grid gap-3">
            {perks.map((perk, index) => (
              <motion.li
                key={perk}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.08 }}
                className="flex items-center gap-3 text-sm text-[color:var(--brown-700)]"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[color:var(--accent)]/10 text-[color:var(--accent)]">
                  <Check size={14} strokeWidth={2.4} />
                </span>
                {perk}
              </motion.li>
            ))}
          </ul>
        </motion.div>
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -4 }}
              className="section-card group relative overflow-hidden rounded-2xl p-5 text-center shadow-soft transition-shadow duration-300 hover:shadow-warm"
            >
              <stat.Icon
                size={20}
                className="mx-auto text-[color:var(--accent)] transition-transform duration-300 group-hover:scale-110"
              />
              <p className="font-display mt-3 text-3xl font-bold text-[color:var(--brown-900)]">
                {stat.value}
              </p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[color:var(--green-muted)]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {timeCards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{ y: -6 }}
            className="group relative overflow-hidden rounded-2xl border border-[color:rgba(178,135,73,0.15)] bg-white/85 p-6 shadow-sm transition-all duration-300 hover:border-[color:var(--accent)]/30 hover:shadow-warm"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[color:var(--wheat-100)] text-[color:var(--accent)] transition-transform duration-300 group-hover:rotate-12">
                <card.Icon size={22} />
              </div>
              <h3 className="font-display text-xl font-bold text-[color:var(--brown-900)]">
                {card.title}
              </h3>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-[color:var(--brown-700)]">
              {card.text}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
