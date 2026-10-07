import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";
import typography from "@tailwindcss/typography";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Manetho palette (design tokens)
        obsidian: "#171512",
        papyrus: "#F4EFE5",
        sandstone: "#D7C19A",
        gold: {
          50: "#F7F0DF",
          100: "#EFE3C2",
          200: "#E3CD9C",
          300: "#D5B471",
          400: "#C69E4E",
          500: "#B08A3C",
          600: "#96722E",
          700: "#7A5827",
          800: "#5E421F",
          900: "#422E17",
        },
        nile: {
          50: "#EEF5F6",
          100: "#D5E6E9",
          200: "#AECFD6",
          300: "#7FB0BC",
          400: "#4E8898",
          500: "#245B67",
          600: "#1D4852",
          700: "#16353D",
          800: "#0F2329",
          900: "#081114",
        },
        terracotta: {
          50: "#F7EFE9",
          100: "#EDD9CC",
          200: "#DDB7A0",
          300: "#C98F6D",
          400: "#B46F47",
          500: "#9A5A3A",
          600: "#7F482E",
          700: "#633724",
          800: "#472719",
          900: "#2C170F",
        },
        ink: "#28231E",
        // Semantic tokens
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        serif: [
          "Cormorant Garamond",
          "Libre Baskerville",
          "Georgia",
          "serif",
        ],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [tailwindcssAnimate, typography],
} satisfies Config;
