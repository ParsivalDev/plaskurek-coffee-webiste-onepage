"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Section from "@/components/Section";

const packages = [
  {
    name: "Basic",
    price: "od 900 zl",
    features: [
      "Strefa na 2h",
      "Napoje i kawa",
      "Zestaw slodkosci",
    ],
  },
  {
    name: "Standard",
    price: "od 1800 zl",
    features: [
      "Rezerwacja na 3h",
      "Cieple danie dnia",
      "Slodki stol",
      "Opieka baristy",
    ],
  },
  {
    name: "Premium",
    price: "od 3200 zl",
    features: [
      "Prywatna sala",
      "Menu degustacyjne",
      "Open bar kawowy",
      "Dedykowana obsluga",
      "Personalizowane wypieki",
    ],
  },
];

export default function Events() {
  const [sent, setSent] = useState(false);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
    const form = event.currentTarget;
    form.reset();
    setTimeout(() => setSent(false), 2400);
  };

  return (
    <Section
      id="eventy"
      title="Eventy, spotkania, rezerwacje"
      subtitle="Eventy"
      className="bg-[color:rgba(239,228,209,0.6)]"
    >
      <div className="grid gap-8 lg:grid-cols-[1.2fr,0.8fr]">
        <div>
          <p className="text-lg text-[color:var(--brown-700)]">
            Organizujemy sniadania firmowe, kameralne spotkania i rezerwacje
            strefy na wieczorne rozmowy. Zadbamy o wypieki, cieple dania i
            spokojna, elegancka oprawe.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {packages.map((pkg) => (
              <motion.div
                key={pkg.name}
                whileHover={{ y: -6 }}
                className="rounded-2xl border border-[color:rgba(178,135,73,0.2)] bg-white/80 p-5 shadow-soft"
              >
                <h3 className="text-lg font-semibold text-[color:var(--brown-900)]">
                  {pkg.name}
                </h3>
                <p className="mt-2 text-sm font-semibold text-[color:var(--wheat-500)]">
                  {pkg.price}
                </p>
                <ul className="mt-4 space-y-2 text-sm text-[color:var(--brown-700)]">
                  {pkg.features.map((feature) => (
                    <li key={feature}>• {feature}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-[color:rgba(178,135,73,0.18)] bg-white/80 p-6 shadow-soft">
          <h3 className="text-lg font-semibold text-[color:var(--brown-900)]">
            Zapytaj o termin
          </h3>
          <form onSubmit={onSubmit} className="mt-4 space-y-3">
            <input
              required
              type="text"
              name="name"
              placeholder="Imie"
              aria-label="Imie"
              className="focus-ring w-full rounded-xl border border-[color:rgba(178,135,73,0.2)] bg-white px-4 py-3 text-sm"
            />
            <input
              required
              type="email"
              name="email"
              placeholder="Email"
              aria-label="Email"
              className="focus-ring w-full rounded-xl border border-[color:rgba(178,135,73,0.2)] bg-white px-4 py-3 text-sm"
            />
            <input
              required
              type="date"
              name="date"
              aria-label="Data"
              className="focus-ring w-full rounded-xl border border-[color:rgba(178,135,73,0.2)] bg-white px-4 py-3 text-sm"
            />
            <input
              required
              type="number"
              name="people"
              min={1}
              placeholder="Liczba osob"
              aria-label="Liczba osob"
              className="focus-ring w-full rounded-xl border border-[color:rgba(178,135,73,0.2)] bg-white px-4 py-3 text-sm"
            />
            <textarea
              required
              name="message"
              placeholder="Wiadomosc"
              aria-label="Wiadomosc"
              rows={4}
              className="focus-ring w-full rounded-xl border border-[color:rgba(178,135,73,0.2)] bg-white px-4 py-3 text-sm"
            />
            <button
              type="submit"
              className="focus-ring w-full rounded-full bg-[color:var(--brown-900)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[color:var(--brown-700)]"
            >
              Wyslij zapytanie
            </button>
          </form>
          {sent && (
            <div
              role="status"
              className="mt-4 rounded-xl bg-[color:var(--wheat-100)] px-4 py-3 text-sm text-[color:var(--brown-900)]"
            >
              Wyslano (demo)
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
