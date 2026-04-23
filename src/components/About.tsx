"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";

const cards = [
  {
    title: "Wypiek na miejscu codziennie",
    text: "Chleb wypiekamy rano, a slodkosci jeszcze pachna piecem.",
  },
  {
    title: "Kawa, sniadania i slodkosci",
    text: "Specjalne mieszanki, sniadania na cieplo i klasyki cukierni.",
  },
  {
    title: "Cieple dania: pierogi i zupy",
    text: "Sezonowe menu, domowe smaki i sycace porcje.",
  },
];

export default function About() {
  return (
    <Section id="onas" title="Rzemioslo i kawiarniany vibe" subtitle="O nas">
      <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg text-[color:var(--brown-700)]">
            Rzemioslo wypieku + kawiarniana przestrzen. W Płaskurku mozesz
            wpasc po chleb, ale tez zostac na kawe i cieply posilek.
          </p>
          <p className="mt-4 text-sm text-[color:var(--brown-700)]">
            To miejsce spotkan, pracy i spokojnego poranka. Robimy prosto,
            uczciwie i z mila atmosfera.
          </p>
        </motion.div>
        <div className="grid gap-4">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="section-card cursor-default rounded-2xl p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-warm"
            whileHover={{ scale: 1.01 }}
            >
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[color:var(--wheat-100)]">
                  <span className="text-[color:var(--accent)] font-bold">✦</span>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-[color:var(--brown-900)]">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm text-[color:var(--brown-700)]">
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
