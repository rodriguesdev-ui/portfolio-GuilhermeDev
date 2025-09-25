import type { Config } from "tailwindcss";

const config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter-sans)"],
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
