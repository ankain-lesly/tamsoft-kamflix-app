/** @type {import('tailwindcss').Config} */

import plugin from "tailwindcss/plugin";
import twAnimate from "tailwindcss-animate";

const generateColorClass = (variable: string) => {
  return ({ opacityValue }: any) => {
    return opacityValue
      ? `hsla(var(--hsl-clr-${variable}), ${opacityValue})`
      : `hsl(var(--hsl-clr-${variable}))`;
  };
};

module.exports = {
  darkMode: ["class", "class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "16px",
      },
    },
    fontSize: {
      xs: "12px",
      sm: "14px",
      base: "16px",
      lg: "18px",
      xl: ["22px"],
      "2xl": ["26px"],
      "3xl": ["32px", "1"],
      "4xl": ["48px", "1"],
      "6xl": ["65px", "1"],
      "8xl": ["96px", "1"],
    },
    extend: {
      fontFamily: {
        krona: ["Krona One", "sans-serif"],
        sands: ["quicksand", "Quicksand"],
      },
      colors: {
        warning: generateColorClass("warning"),
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        danger: generateColorClass("danger"),
        success: generateColorClass("success"),
        dark: generateColorClass("dark"),
        "dark-l": generateColorClass("dark-l"),
        "dark-ll": generateColorClass("dark-ll"),
        light: generateColorClass("light"),
        "light-l": generateColorClass("light-l"),
        "light-d": generateColorClass("light-d"),
        "light-dd": generateColorClass("light-dd"),
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        "dark-main": generateColorClass("dark-main"),
        "light-main": generateColorClass("light-main"),
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },

        // primary: "#423F71",
        header: "#292841",
        body: "#1C1B29",
        bg: "#1f2937",
        main: "#f20",
      },
      boxShadow: {
        "3xl": "0 10px 40px rgba(0, 0, 0, 0.1)",
        bs: "0.25em 0.25em 0.75em hsla(0, 0%, 0%, 0.25), 0.125em 0.125em 0.25em hsla(0, 0%, 0%, 0.15)",
        "bs-2":
          "0 0 0.75em hsla(0, 0%, 0%, 0.25), 0 0 0.25em hsla(0, 0%, 0%, 0.15)",
        "bs-pri":
          "0.25em 0.25em 1.5em hsla(0, 0%, 0%, 0.3), 0em 0em 0.5em hsla(0, 0%, 0%, 0.35)",
        "bs-sec": "0.3rem 0.1rem 2rem hsla(0, 0%, 0%, 0.3)",
      },
      backgroundImage: {
        "hero-driven": "url('/images/hero-bg-oil-filter.jpg')",
        "mobile-concept": "url('/images/habitatlearn-mobile-concept.jpg')",
      },
      screens: {
        wide: "1440px",
        xs: "370px",
      },
      backgroundColor: {},
      keyframes: {
        inOpacity: {
          from: {
            opacity: "0",
          },
          to: {
            opacity: "1",
          },
        },
      },
      animation: {
        inOpacity: "inOpacity 300ms ease-in-out 150ms forwards",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },

  plugins: [
    plugin(({ addBase, theme, addUtilities }) => {
      // CODE:
      addBase({
        /* Details Illustration */
        button: {
          backgroundColor: "transparent",
        },
      });

      // CODE:
      const customUtilities: any = {};
      const colors = theme("colors");
      // Buttons
      for (const color in colors) {
        let color1;
        if (typeof colors[color] === "object") {
          color1 = colors[color]["600"];
        } else if (typeof colors[color] === "function") {
          color1 = colors[color](color);
        } else {
          continue;
        }
        customUtilities[`.btn-${color}`] = {
          backgroundColor: color1,
          borderColor: color1,
          // color: colors["light"]("light"),
        };
      }

      // Details
      for (const color in colors) {
        if (typeof colors[color] === "function") {
          const color2 = colors[color](color);
          customUtilities[`.detail-${color}`] = {
            backgroundColor: `hsla(var(--hsl-clr-${color}), ${0.15})`,
            color: color2,
          };
        }
      }

      addUtilities({
        ...customUtilities,
        ".flex-center": {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },

        ".detail": {
          padding: "5px 10px",
          fontSize: "smaller",
          borderRadius: "5px",
        },
        ".section-p": {
          paddingBlock: "60px",
          overflow: "hidden",
        },
      });
    }),
    twAnimate,
  ],
};
