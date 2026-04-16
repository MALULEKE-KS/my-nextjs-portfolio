/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        obsm: {
          warm:         "#FAF8F5",
          dark:         "#1A1814",
          muted:        "#6B645A",
          accent:       "#C8102E",
          amber:        "#D4A017",
          border:       "rgba(26,24,20,0.10)",
          "border-hov":  "rgba(26,24,20,0.22)",
          surface:      "rgba(26,24,20,0.04)",
          "surf-hover":  "rgba(26,24,20,0.08)",
          "warm-50":     "#FAF8F5",
          "warm-100":    "#F4F1EC",
          "warm-200":    "#EDE9E2",
          "warm-300":    "#E4E0D9",
        }
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "ui-sans-serif", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"]
      },
      boxShadow: {
        glow:        "0 0 48px -12px rgba(200,16,46,0.35)",
        "glow-sm":   "0 0 28px -10px rgba(200,16,46,0.25)",
        card:        "0 2px 16px -4px rgba(26,24,20,0.08)",
        "card-hov":  "0 8px 32px -8px rgba(26,24,20,0.14)",
        inner:       "inset 0 0 0 1px rgba(26,24,20,0.08)",
      },
      backgroundImage: {
        "grid-subtle":
          "linear-gradient(to right, rgba(107,100,90,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(107,100,90,0.07) 1px, transparent 1px)"
      },
      transitionDuration: { 180: "180ms", 240: "240ms" }
    }
  },
  plugins: []
};
