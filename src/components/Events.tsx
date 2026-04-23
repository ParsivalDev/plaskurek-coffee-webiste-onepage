"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Section from "@/components/Section";

const packages = [
  {
    name: "Basic",
    features: [
      "Strefa na 2h",
      "Napoje i kawa",
      "Zestaw slodkosci",
    ],
  },
  {
    name: "Standard",
    features: [
      "Rezerwacja na 3h",
      "Cieple danie dnia",
      "Slodki stol",
      "Opieka baristy",
    ],
  },
  {
    name: "Premium",
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
  const [isPopupOpen, setIsPopupOpen] = useState(true);

  return (
    <>
      {isPopupOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[color:rgba(43,30,20,0.45)] px-4">
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="opening-title"
            className="w-full max-w-md rounded-2xl bg-white p-6 text-center shadow-soft"
          >
            <h2
              id="opening-title"
              className="text-2xl font-semibold text-[color:var(--brown-900)]"
            >
              Wkrótce otwieramy!
            </h2>
            <p className="mt-3 text-sm text-[color:var(--brown-700)]">
              Dziękujemy, że jesteś z nami. Już dopinamy ostatnie szczegóły i
              nie możemy się doczekać Twojej pierwszej kawy.
            </p>
            <p className="mt-3 text-sm text-[color:var(--brown-700)]">
              Zajrzyj na nasz fanpage na Facebooku, żeby być na bieżąco:
              <a
                href="https://www.facebook.com/profile.php?id=61586080679602"
                target="_blank"
                rel="noreferrer"
                className="ml-2 inline-flex items-center rounded-full bg-[color:var(--wheat-100)] px-3 py-1 text-sm font-semibold text-[color:var(--brown-900)] shadow-soft transition hover:-translate-y-0.5 hover:bg-[color:var(--wheat-300)]"
              >
                facebook.com/plaskurek
              </a>
            </p>
            <button
              type="button"
              onClick={() => setIsPopupOpen(false)}
              className="focus-ring mt-5 inline-flex items-center justify-center rounded-full bg-[color:var(--brown-900)] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[color:var(--brown-700)]"
            >
              Super, dzięki!
            </button>
          </div>
        </div>
      )}
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
                  <ul className="mt-4 space-y-2 text-sm text-[color:var(--brown-700)]">
                    {pkg.features.map((feature) => (
                      <li key={feature}>• {feature}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-[color:rgba(178,135,73,0.18)] bg-white/80 p-6 shadow-soft flex flex-col justify-center">
            <h3 className="text-lg font-semibold text-[color:var(--brown-900)]">
              Zapytaj o termin
            </h3>
            <p className="mt-3 text-sm text-[color:var(--brown-700)]">
              Chcesz zarezerwować strefę, zorganizować spotkanie firmowe lub uroczystość? Napisz do nas — chętnie dobierzemy ofertę do Twoich potrzeb.
            </p>
            <a
              href="mailto:plaskurekcoffee@o2.pl"
              className="focus-ring mt-6 inline-flex items-center justify-center rounded-full bg-[color:var(--brown-900)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[color:var(--brown-700)]"
            >
              plaskurekcoffee@o2.pl
            </a>
            <p className="mt-4 text-center text-xs text-[color:var(--brown-700)]">
              Odpowiadamy w ciągu 24 godzin
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
