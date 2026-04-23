"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type MenuItem = {
  name: string;
  description?: string;
  featured?: boolean;
};

type MenuCategory = {
  id: string;
  label: string;
  items: MenuItem[];
};

const categories: MenuCategory[] = [
  {
    id: "chleb",
    label: "Chleb",
    items: [
      {
        name: "Chleb RZEMIEŚLNICZY WIEJSKI 1,00 kg",
      },
      {
        name: "Chleb ŚLĄSKI 0,70 kg",
      },
      {
        name: "Chleb ŻYTNI z ziarnami 0,70 kg",
      },
      {
        name: "Chleb ŻYTNI naturalny 0,70 kg",
      },
      {
        name: "Chleb HETMAN 0,80 kg",
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
      <div className="mt-4 inline-flex items-center rounded-full border border-[color:rgba(178,135,73,0.25)] bg-[color:var(--wheat-100)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--brown-900)]">
        Słodkości oraz inne produkty wkrótce w ofercie!
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {current?.items.map((item) => (
          <motion.div
            key={item.name}
            whileHover={{ y: -4, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="cursor-default rounded-2xl border border-transparent bg-white/80 p-4 shadow-sm hover:border-[color:rgba(45,90,61,0.2)] hover:shadow-soft"
          >
            <div>
              <h3 className="text-base font-semibold text-[color:var(--brown-900)]">
                {item.name}
              </h3>
              {item.description ? (
                <p className="mt-2 text-sm text-[color:var(--brown-700)]">
                  {item.description}
                </p>
              ) : null}
            </div>
            {item.featured ? (
              <span className="mt-4 inline-flex items-center rounded-full bg-[color:var(--wheat-300)] px-3 py-1 text-xs font-semibold text-[color:var(--brown-900)]">
                Dzis polecamy
              </span>
            ) : null}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
