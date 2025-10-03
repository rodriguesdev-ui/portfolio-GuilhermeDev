import type { Config } from "tailwindcss";

const config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter-sans)"],
      },
      keyframes: {
        "logo-pulse": {
          "0%, 100%": { opacity: "0.8", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.1)" },
        },
      },
      animation: {
        "logo-pulse": "logo-pulse 1.5s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
