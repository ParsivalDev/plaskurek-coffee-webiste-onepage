"use client";

import { motion } from "framer-motion";

const particles = [
  { x: "10%", y: "12%", size: 26, delay: 0.2, duration: 18 },
  { x: "18%", y: "62%", size: 20, delay: 1.5, duration: 22 },
  { x: "25%", y: "30%", size: 18, delay: 0.8, duration: 20 },
  { x: "35%", y: "16%", size: 24, delay: 2.2, duration: 19 },
  { x: "42%", y: "52%", size: 16, delay: 1.2, duration: 21 },
  { x: "52%", y: "20%", size: 22, delay: 0.4, duration: 23 },
  { x: "60%", y: "65%", size: 14, delay: 2.8, duration: 24 },
  { x: "68%", y: "32%", size: 20, delay: 1.9, duration: 18 },
  { x: "74%", y: "12%", size: 26, delay: 0.6, duration: 20 },
  { x: "80%", y: "50%", size: 18, delay: 1.1, duration: 21 },
  { x: "86%", y: "24%", size: 24, delay: 0.9, duration: 23 },
  { x: "90%", y: "70%", size: 16, delay: 2.3, duration: 19 },
  { x: "6%", y: "40%", size: 14, delay: 0.3, duration: 22 },
  { x: "30%", y: "78%", size: 18, delay: 1.7, duration: 24 },
  { x: "55%", y: "82%", size: 20, delay: 1.4, duration: 19 },
  { x: "72%", y: "84%", size: 16, delay: 2.6, duration: 22 },
];

export default function WheatParticles() {
  return (
    <div className="pointer-events-none absolute inset-0">
      {particles.map((particle, index) => (
        <motion.span
          key={index}
          className="absolute block rounded-full bg-[color:rgba(216,183,118,0.35)] blur-[0.5px]"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size / 2,
          }}
          animate={{
            y: [0, -18, 0],
            rotate: [-6, 6, -6],
            opacity: [0.25, 0.5, 0.25],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
