import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary : "#7B2CBF",
        secondaryYellow : "#FF9100",
        secondaryPink : "#F20089",
        secondaryBlue : "#2D00F7",
        textColorDark : "#EBE0FF",

      },
    },
  },
  plugins: [],
} satisfies Config;
