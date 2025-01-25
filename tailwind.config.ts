import type { Config } from "tailwindcss";

export default {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        theme_red: {
          light: "#DA0046",
          dark: "#DA0046",
        },
        theme_black: {
          light: "#E7E7E7",
          dark: "#1F1F1F",
        }
      },
      keyframes: {
        jump: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-50px)' },
        },
      },
      animation: {
        jump: 'jump 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
