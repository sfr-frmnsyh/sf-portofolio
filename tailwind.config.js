/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
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
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "animate-profile-keyframes": {
          "0%": {
            borderRadius: "50% 50% 50% 50% / 50% 50% 50% 50%", // Perfect circle
            transform: "scale(1)",
          },
          "10%": {
            borderRadius: "55% 45% 50% 50% / 50% 50% 45% 55%", // Slightly adjusted shape
            transform: "scale(1)",
          },
          "20%": {
            borderRadius: "60% 40% 50% 50% / 50% 50% 40% 60%", // Slightly oval shape
            transform: "scale(1)",
          },
          "30%": {
            borderRadius: "55% 45% 50% 50% / 50% 50% 45% 55%", // Intermediate shape
            transform: "scale(1)",
          },
          "40%": {
            borderRadius: "50% 60% 50% 40% / 60% 50% 40% 50%", // Vertical stretch
            transform: "scale(1)",
          },
          "50%": {
            borderRadius: "50% 60% 50% 40% / 60% 50% 40% 50%", // Vertical stretch (mid-point)
            transform: "scale(1)",
          },
          "60%": {
            borderRadius: "50% 60% 50% 40% / 60% 50% 40% 50%", // Intermediate shape
            transform: "scale(1)",
          },
          "70%": {
            borderRadius: "45% 55% 55% 45% / 55% 55% 45% 45%", // Stretch horizontally
            transform: "scale(1)",
          },
          "80%": {
            borderRadius: "40% 50% 60% 50% / 50% 60% 50% 40%", // More stretched horizontally
            transform: "scale(1)",
          },
          "90%": {
            borderRadius: "45% 55% 55% 45% / 55% 55% 45% 45%", // Intermediate shape
            transform: "scale(1)",
          },
          "100%": {
            borderRadius: "50% 50% 50% 50% / 50% 50% 50% 50%", // Back to perfect circle
            transform: "scale(1)",
          },
        },
        "wave-hand": {
          "0%": { transform: "rotate(0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-18deg)" },
          "30%": { transform: "rotate(14deg)" },
          "30%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(-10deg)" },
          "60%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        profile: "animate-profile-keyframes 24s infinite",
        "wave-hand": "wave-hand 2.5s infinite",
        "meteor-effect": "meteor 5s linear infinite",
      },
      backgroundImage: {
        dev: "url(/dashboard/dev.jpg)",
        dev2: "url(/dashboard/dev2.jpeg)",
        "logo-light": "url(/logo-light.svg)",
        "logo-dark": "url(/logo-dark.svg)",
        contact: "url(/contact.svg)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
