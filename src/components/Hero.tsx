"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import WheatParticles from "@/components/WheatParticles";
import { ArrowRight, ChevronDown, Wheat } from "@/components/Icons";

export const BANNER_SRC = "/banner.jpg";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
});

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 400], [0, 60]);
  const indicatorOpacity = useTransform(scrollY, [0, 200], [1, 0]);

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
            <motion.div
              {...fadeUp(0.1)}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-sm"
            >
              <Wheat size={14} className="text-[color:var(--wheat-300)]" />
              <span className="text-xs uppercase tracking-[0.3em] text-white/85">
                piekarnia i kawiarnia
              </span>
            </motion.div>
            <motion.h1
              {...fadeUp(0.25)}
              className="font-display text-shadow mt-6 text-4xl font-bold leading-[1.05] md:text-6xl lg:text-7xl"
            >
              Płaskurek — świeże wypieki i miejsce spotkań.
            </motion.h1>
            <motion.p
              {...fadeUp(0.45)}
              className="mt-6 max-w-xl text-lg leading-relaxed text-[color:rgba(255,255,255,0.85)] md:text-xl"
            >
              Rano pachnie chlebem, w dzień kawą, a wieczorem rozmowami.
              Wpadnij na słodkie, ciepłe i coś do picia.
            </motion.p>
            <motion.div {...fadeUp(0.6)} className="mt-10 flex flex-wrap gap-4">
              <a
                href="#menu"
                className="focus-ring group inline-flex items-center gap-2 rounded-full bg-[color:var(--accent)] px-6 py-3.5 text-sm font-semibold text-white shadow-warm transition duration-300 hover:-translate-y-1 hover:bg-[color:var(--accent-hover)] hover:shadow-[0_12px_32px_rgba(45,90,61,0.4)]"
              >
                Zobacz menu
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
              <a
                href="#eventy"
                className="focus-ring group inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white/90 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-white hover:bg-white/15"
              >
                Event firmowy
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
      <WheatParticles />
      <motion.div
        style={{ opacity: indicatorOpacity }}
        className="pointer-events-none absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-white/60"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">scroll</span>
          <ChevronDown size={20} strokeWidth={1.4} />
        </motion.div>
      </motion.div>
    </section>
  );
}
