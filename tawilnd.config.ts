import type { Config } from "tailwindcss";

const config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter-sans)"],
      },
    },
  },
  
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;