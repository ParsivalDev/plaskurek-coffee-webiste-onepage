"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";
import { Bread, Coffee, Bowl } from "@/components/Icons";

const cards = [
  {
    title: "Wypiek na miejscu codziennie",
    text: "Chleb wypiekamy rano, a słodkości jeszcze pachną piecem.",
    Icon: Bread,
  },
  {
    title: "Kawa, śniadania i słodkości",
    text: "Specjalne mieszanki, śniadania na ciepło i klasyki cukierni.",
    Icon: Coffee,
  },
  {
    title: "Ciepłe dania: pierogi i zupy",
    text: "Sezonowe menu, domowe smaki i sycące porcje.",
    Icon: Bowl,
  },
];

export default function About() {
  return (
    <Section id="onas" title="Rzemiosło i kawiarniany vibe" subtitle="O nas">
      <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-display text-2xl leading-snug text-[color:var(--brown-900)] md:text-3xl">
            Rzemiosło wypieku + kawiarniana przestrzeń.
          </p>
          <p className="mt-5 text-base leading-relaxed text-[color:var(--brown-700)]">
            W Płaskurku możesz wpaść po chleb, ale też zostać na kawę i ciepły posiłek.
            To miejsce spotkań, pracy i spokojnego poranka. Robimy prosto, uczciwie
            i z miłą atmosferą.
          </p>
          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-[color:rgba(178,135,73,0.3)] bg-white/60 px-4 py-2 text-sm text-[color:var(--brown-700)] backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-[color:var(--accent)]" />
            Otwieramy wkrótce w Staszowie
          </div>
        </motion.div>
        <div className="grid gap-4">
          {cards.map((card, index) => (
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
              whileHover={{ y: -4 }}
              className="section-card group relative overflow-hidden rounded-2xl p-5 shadow-soft transition-shadow duration-300 hover:shadow-warm"
            >
              <div
                aria-hidden="true"
                className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[color:var(--accent)]/5 transition-all duration-500 group-hover:scale-150 group-hover:bg-[color:var(--accent)]/10"
              />
              <div className="relative flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[color:var(--wheat-100)] text-[color:var(--accent)] transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
                  <card.Icon size={22} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-display text-xs font-semibold text-[color:var(--wheat-500)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="h-px flex-1 bg-[color:rgba(178,135,73,0.2)]" />
                  </div>
                  <h3 className="mt-2 text-base font-semibold text-[color:var(--brown-900)]">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[color:var(--brown-700)]">
                    {card.text}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
