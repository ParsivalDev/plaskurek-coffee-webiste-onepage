"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";
import { Check, Mail, ArrowRight, Sparkle } from "@/components/Icons";

const packages = [
  {
    name: "Basic",
    features: ["Strefa na 2h", "Napoje i kawa", "Zestaw słodkości"],
  },
  {
    name: "Standard",
    features: [
      "Rezerwacja na 3h",
      "Ciepłe danie dnia",
      "Słodki stół",
      "Opieka baristy",
    ],
    highlighted: true,
  },
  {
    name: "Premium",
    features: [
      "Prywatna sala",
      "Menu degustacyjne",
      "Open bar kawowy",
      "Dedykowana obsługa",
      "Personalizowane wypieki",
    ],
  },
];

export default function Events() {
  return (
    <Section
      id="eventy"
      title="Eventy, spotkania, rezerwacje"
      subtitle="Eventy"
      className="bg-[color:rgba(239,228,209,0.6)]"
    >
      <div className="grid gap-8 lg:grid-cols-[1.2fr,0.8fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-xl text-lg leading-relaxed text-[color:var(--brown-700)]"
          >
            Organizujemy śniadania firmowe, kameralne spotkania i rezerwacje
            strefy na wieczorne rozmowy. Zadbamy o wypieki, ciepłe dania i
            spokojną, elegancką oprawę.
          </motion.p>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -6 }}
                className={
                  pkg.highlighted
                    ? "group relative overflow-hidden rounded-2xl border-2 border-[color:var(--accent)]/40 bg-white p-6 shadow-warm"
                    : "group relative overflow-hidden rounded-2xl border border-[color:rgba(178,135,73,0.2)] bg-white/80 p-6 shadow-soft transition-shadow duration-300 hover:shadow-warm"
                }
              >
                {pkg.highlighted && (
                  <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-[color:var(--accent)] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                    <Sparkle size={10} /> popularne
                  </span>
                )}
                <div className="flex items-center gap-2">
                  <span className="font-display text-xs font-semibold text-[color:var(--wheat-500)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px flex-1 bg-[color:rgba(178,135,73,0.25)]" />
                </div>
                <h3 className="font-display mt-3 text-2xl font-bold text-[color:var(--brown-900)]">
                  {pkg.name}
                </h3>
                <ul className="mt-5 space-y-3 text-sm text-[color:var(--brown-700)]">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[color:var(--accent)]/10 text-[color:var(--accent)]">
                        <Check size={12} strokeWidth={2.6} />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex flex-col justify-center overflow-hidden rounded-2xl border border-[color:rgba(178,135,73,0.2)] bg-gradient-to-br from-white/95 to-[color:var(--wheat-100)]/50 p-8 shadow-soft"
        >
          <div
            aria-hidden="true"
            className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[color:var(--accent)]/10"
          />
          <div className="relative">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[color:var(--accent)]/10 text-[color:var(--accent)]">
              <Mail size={22} />
            </div>
            <h3 className="font-display mt-4 text-2xl font-bold text-[color:var(--brown-900)]">
              Zapytaj o termin
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[color:var(--brown-700)]">
              Chcesz zarezerwować strefę, zorganizować spotkanie firmowe lub
              uroczystość? Napisz do nas — chętnie dobierzemy ofertę do Twoich
              potrzeb.
            </p>
            <a
              href="mailto:plaskurekcoffee@o2.pl"
              className="focus-ring group mt-6 inline-flex items-center gap-2 rounded-full bg-[color:var(--accent)] px-5 py-3 text-sm font-semibold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-[color:var(--accent-hover)] hover:shadow-[0_10px_28px_rgba(45,90,61,0.35)]"
            >
              plaskurekcoffee@o2.pl
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
            <p className="mt-4 text-xs text-[color:var(--brown-700)]/80">
              Odpowiadamy w ciągu 24 godzin
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
