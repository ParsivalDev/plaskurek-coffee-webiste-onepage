"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import WheatParticles from "@/components/WheatParticles";

export const BANNER_SRC = "/banner.jpg";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
});

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 400], [0, 60]);

  return (
    <section
      id="start"
      className="relative min-h-screen overflow-hidden text-white"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0"
        aria-hidden="true"
      >
        <Image
          src={BANNER_SRC}
          alt="Płaskurek - piekarnia i kawiarnia"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/45 to-[color:rgba(37,24,16,0.75)]" />
      </motion.div>
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="mx-auto w-full max-w-6xl px-6 py-24 md:px-10 lg:px-14">
          <div className="max-w-2xl">
            <motion.p
              {...fadeUp(0.1)}
              className="text-sm uppercase tracking-[0.4em] text-[color:rgba(255,255,255,0.7)]"
            >
              piekarnia i kawiarnia
            </motion.p>
            <motion.h1
              {...fadeUp(0.25)}
              className="font-display text-shadow mt-4 text-4xl font-bold leading-tight md:text-6xl"
            >
              Płaskurek — świeże wypieki i miejsce spotkań.
            </motion.h1>
            <motion.p
              {...fadeUp(0.45)}
              className="mt-6 text-lg text-[color:rgba(255,255,255,0.85)] md:text-xl"
            >
              Rano pachnie chlebem, w dzień kawą, a wieczorem rozmowami.
              Wpadnij na słodkie, ciepłe i coś do picia.
            </motion.p>
            <motion.div {...fadeUp(0.6)} className="mt-8 flex flex-wrap gap-4">
              <a
                href="#menu"
                className="focus-ring rounded-full bg-[color:var(--accent)] px-6 py-3 text-sm font-semibold text-white shadow-warm transition duration-200 hover:-translate-y-1 hover:bg-[color:var(--accent-hover)] hover:shadow-[0_8px_24px_rgba(45,90,61,0.35)]"
              >
                Zobacz menu
              </a>
              <a
                href="#eventy"
                className="focus-ring rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white/90 transition duration-200 hover:-translate-y-1 hover:border-white hover:bg-white/10"
              >
                Event firmowy
              </a>
            </motion.div>
          </div>
        </div>
      </div>
      <WheatParticles />
    </section>
  );
}
