import type { Config } from "tailwindcss";

export default {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          start: '#5A189A',
          middle: '#41116F',
          end: '#1E0834'
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#fca311",
        secondaryYellow: "#FF9100",
        secondaryPink: "#F20089",
        secondaryBlue: "#2D00F7",
        textColorDark: "#EBE0FF",
      },
     
      keyframes: {
        gradientSlide: {
          "0%": { backgroundPosition: "100% 0" },
          "100%": { backgroundPosition: "0% 0" },
        },
        fadeIn: {
          '0%': { opacity : '0' },
          '100%': { opacity : '1' },
        },
      },
      animation: {
        gradientSlide: "gradientSlide 0.5s ease-in-out",
        'spin-slow': 'spin 8s linear infinite',
        'fadeIn': 'fadeIn 0.3s ease-in-out',
      },
     
    },
  },
  plugins: [],
} satisfies Config;