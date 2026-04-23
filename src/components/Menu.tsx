"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Wheat, Sparkle } from "@/components/Icons";

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
      { name: "Chleb RZEMIEŚLNICZY WIEJSKI 1,00 kg" },
      { name: "Chleb ŚLĄSKI 0,70 kg" },
      { name: "Chleb ŻYTNI z ziarnami 0,70 kg" },
      { name: "Chleb ŻYTNI naturalny 0,70 kg" },
      { name: "Chleb HETMAN 0,80 kg" },
    ],
  },
];

export default function Menu() {
  const [active, setActive] = useState(categories[0].id);
  const current = categories.find((category) => category.id === active);

  return (
    <div className="relative overflow-hidden rounded-[28px] border border-[color:rgba(178,135,73,0.2)] bg-white/70 p-6 shadow-soft backdrop-blur md:p-10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 text-[color:rgba(178,135,73,0.08)]"
      >
        <Wheat size={220} strokeWidth={1.2} />
      </div>
      <div className="relative flex flex-wrap items-center gap-3">
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
                className="absolute inset-0 -z-10 rounded-full bg-[color:var(--wheat-100)] shadow-sm"
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
              />
            )}
            {category.label}
          </button>
        ))}
      </div>
      <div className="relative mt-5 inline-flex items-center gap-2 rounded-full border border-[color:rgba(178,135,73,0.3)] bg-[color:var(--wheat-100)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--brown-900)]">
        <Sparkle size={14} className="text-[color:var(--accent)]" />
        Słodkości oraz inne produkty wkrótce w ofercie!
      </div>
      <div className="relative mt-10 grid gap-6 md:grid-cols-3">
        {current?.items.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.5,
              delay: index * 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{ y: -6 }}
            className="group relative cursor-default overflow-hidden rounded-2xl border border-[color:rgba(178,135,73,0.15)] bg-white/85 p-5 shadow-sm transition-all duration-300 hover:border-[color:var(--accent)]/40 hover:shadow-warm"
          >
            <span
              aria-hidden="true"
              className="absolute left-0 top-0 h-1 w-0 bg-gradient-to-r from-[color:var(--accent)] to-[color:var(--wheat-500)] transition-all duration-500 group-hover:w-full"
            />
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[color:var(--wheat-100)] text-[color:var(--wheat-500)] transition-transform duration-300 group-hover:-rotate-12">
                <Wheat size={18} />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-semibold leading-snug text-[color:var(--brown-900)]">
                  {item.name}
                </h3>
                {item.description ? (
                  <p className="mt-2 text-sm text-[color:var(--brown-700)]">
                    {item.description}
                  </p>
                ) : null}
              </div>
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
