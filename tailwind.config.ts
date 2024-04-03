import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: {
          light: "hsl(var(--border))",
          dark: "hsl(var(--border-dark))",
        },
        input: {
          light: "hsl(var(--input))",
          dark: "hsl(var(--input-dark))",
        },
        ring: {
          light: "hsl(var(--ring))",
          dark: "hsl(var(--ring-dark))",
        },
        background: {
          light: "hsl(var(--background))",
          dark: "hsl(var(--background-dark))",
        },
        foreground: {
          light: "hsl(var(--foreground))",
          dark: "hsl(var(--foreground-dark))",
        },
        primary: {
          light: {
            DEFAULT: "hsl(var(--primary))",
            foreground: "hsl(var(--primary-foreground))",
          },
          dark: {
            DEFAULT: "hsl(var(--primary-dark))",
            foreground: "hsl(var(--primary-foreground-dark))",
          },
        },
        secondary: {
          light: {
            DEFAULT: "hsl(var(--secondary))",
            foreground: "hsl(var(--secondary-foreground))",
          },
          dark: {
            DEFAULT: "hsl(var(--secondary-dark))",
            foreground: "hsl(var(--secondary-foreground-dark))",
          },
        },
        destructive: {
          light: {
            DEFAULT: "hsl(var(--destructive))",
            foreground: "hsl(var(--destructive-foreground))",
          },
          dark: {
            DEFAULT: "hsl(var(--destructive-dark))",
            foreground: "hsl(var(--destructive-foreground-dark))",
          },
        },
        muted: {
          light: {
            DEFAULT: "hsl(var(--muted))",
            foreground: "hsl(var(--muted-foreground))",
          },
          dark: {
            DEFAULT: "hsl(var(--muted-dark))",
            foreground: "hsl(var(--muted-foreground-dark))",
          },
        },
        accent: {
          light: {
            DEFAULT: "hsl(var(--accent))",
            foreground: "hsl(var(--accent-foreground))",
          },
          dark: {
            DEFAULT: "hsl(var(--accent-dark))",
            foreground: "hsl(var(--accent-foreground-dark))",
          },
        },
        popover: {
          light: {
            DEFAULT: "hsl(var(--popover))",
            foreground: "hsl(var(--popover-foreground))",
          },
          dark: {
            DEFAULT: "hsl(var(--popover-dark))",
            foreground: "hsl(var(--popover-foreground-dark))",
          },
        },
        card: {
          light: {
            DEFAULT: "hsl(var(--card))",
            foreground: "hsl(var(--card-foreground))",
          },
          dark: {
            DEFAULT: "hsl(var(--card-dark))",
            foreground: "hsl(var(--card-foreground-dark))",
          },
        },
      },

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
  plugins: [require("tailwindcss-animate")],
};

export default config;
