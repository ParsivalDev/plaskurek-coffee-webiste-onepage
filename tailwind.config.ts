import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        soft: "0 12px 40px rgba(31, 20, 8, 0.18)",
        warm: "0 18px 60px rgba(51, 32, 12, 0.25)",
      },
      borderRadius: {
        "2xl": "1.25rem",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        ticker: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        ticker: "ticker 18s linear infinite",
        shimmer: "shimmer 10s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
