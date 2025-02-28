import type { Config } from "tailwindcss";

export default {
  darkMode: 'class',
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
        primary: "#7B2CBF",
        secondaryYellow: "#FF9100",
        secondaryPink: "#F20089",
        secondaryBlue: "#2D00F7",
        textColorDark: "#EBE0FF",
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(90deg, #5A189A 0%, #41116F 35%, #1E0834 100%)",
        "custom-gradient-hover": "linear-gradient(90deg, #1E0834 0%, #41116F 65%, #5A189A 100%)",
        "custom-angular-gradient": "conic-gradient(rgba(45, 0, 247, 0.1) 0% 25%, rgba(45, 0, 247, 0.2) 25% 32%, rgba(247, 37, 133, 0.1) 32% 50%, rgba(247, 37, 133, 0.2) 50% 82%, transparent 82% 100%)"
      },
      keyframes: {
        gradientSlide: {
          "0%": { backgroundPosition: "100% 0" },
          "100%": { backgroundPosition: "0% 0" },
        },
      },
      animation: {
        gradientSlide: "gradientSlide 0.5s ease-in-out",
        'spin-slow': 'spin 8s linear infinite',
      },
     
    },
  },
  plugins: [],
} satisfies Config;