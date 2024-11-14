import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

import { blue, green, slate, sky, red, yellow } from "tailwindcss/colors";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: slate[950],
        primary: {
          ...blue,
          DEFAULT: blue[500],
        },
        secondary: {
          ...blue,
          DEFAULT: slate[500],
        },
        info: {
          ...blue,
          DEFAULT: sky[500],
        },
        success: {
          ...blue,
          DEFAULT: green[500],
        },
        warning: {
          ...blue,
          DEFAULT: yellow[500],
        },
        danger: {
          ...blue,
          DEFAULT: red[500],
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
