"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const categories = [
  {
    id: "wypieki",
    label: "Wypieki",
    items: [
      {
        name: "Chleb pszenny na zakwasie",
        description: "Chrupiaca skorka, miekki srodek.",
        price: "14 zł",
      },
      {
        name: "Bagietka z ziarnami",
        description: "Delikatna, z sezamem i siemieniem.",
        price: "9 zł",
      },
      {
        name: "Focaccia rozmarynowa",
        description: "Oliwa, sol morska, swiezy rozmaryn.",
        price: "18 zł",
        featured: true,
      },
    ],
  },
  {
    id: "slodkosci",
    label: "Slodkosci",
    items: [
      {
        name: "Croissant maslany",
        description: "Laminowane ciasto, czyste maslo.",
        price: "11 zł",
      },
      {
        name: "Tarta pistacjowa",
        description: "Krem pistacjowy, kruche ciasto.",
        price: "19 zł",
        featured: true,
      },
      {
        name: "Cynamonki",
        description: "Cieple, z lukrem waniliowym.",
        price: "12 zł",
      },
    ],
  },
  {
    id: "kawa",
    label: "Kawa i napoje",
    items: [
      {
        name: "Flat white",
        description: "Doble espresso, mleko z mikropiana.",
        price: "15 zł",
      },
      {
        name: "Cold brew z cytrusem",
        description: "Orzezwiajace, lekko cytrusowe.",
        price: "17 zł",
      },
      {
        name: "Kakao na mleku owsianym",
        description: "Kremowe, delikatnie slodzone.",
        price: "14 zł",
      },
    ],
  },
  {
    id: "cieple",
    label: "Cieple dania",
    items: [
      {
        name: "Pierogi z serem i mieta",
        description: "Podawane z maslem ziolowym.",
        price: "26 zł",
      },
      {
        name: "Zupa dnia",
        description: "Sezonowe warzywa, chrupka grzanka.",
        price: "19 zł",
      },
      {
        name: "Krem z pieczonej dyni",
        description: "Z olejem ziolowym i pestkami.",
        price: "22 zł",
      },
    ],
  },
];

export default function Menu() {
  const [active, setActive] = useState(categories[0].id);
  const current = categories.find((category) => category.id === active);

  return (
    <div className="rounded-[28px] border border-[color:rgba(178,135,73,0.18)] bg-white/70 p-6 shadow-soft backdrop-blur md:p-10">
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category.id}
            type="button"
            onClick={() => setActive(category.id)}
            className={cn(
              "focus-ring relative rounded-full px-5 py-2 text-sm font-semibold transition",
              active === category.id
                ? "text-[color:var(--brown-900)]"
                : "text-[color:var(--brown-700)] hover:text-[color:var(--brown-900)]"
            )}
          >
            {active === category.id && (
              <motion.span
                layoutId="menu-pill"
                className="absolute inset-0 -z-10 rounded-full bg-[color:var(--wheat-100)]"
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
              />
            )}
            {category.label}
          </button>
        ))}
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {current?.items.map((item) => (
          <div
            key={item.name}
            className="rounded-2xl border border-transparent bg-white/80 p-4 shadow-sm transition hover:border-[color:rgba(178,135,73,0.2)]"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-base font-semibold text-[color:var(--brown-900)]">
                  {item.name}
                </h3>
                <p className="mt-2 text-sm text-[color:var(--brown-700)]">
                  {item.description}
                </p>
              </div>
              <span className="text-sm font-semibold text-[color:var(--wheat-500)]">
                {item.price}
              </span>
            </div>
            {item.featured ? (
              <span className="mt-4 inline-flex items-center rounded-full bg-[color:var(--wheat-300)] px-3 py-1 text-xs font-semibold text-[color:var(--brown-900)]">
                Dzis polecamy
              </span>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
