/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#431830",
        "on-primary": "#ffffff",
        "primary-container": "#5d2e46",
        "on-primary-container": "#d596b3",
        "primary-fixed": "#ffd8e7",
        "primary-fixed-dim": "#f6b4d1",
        "on-primary-fixed": "#350c23",
        "on-primary-fixed-variant": "#68374f",
        "secondary": "#645e50",
        "on-secondary": "#ffffff",
        "secondary-container": "#eae2d0",
        "on-secondary-container": "#6a6456",
        "secondary-fixed": "#eae2d0",
        "secondary-fixed-dim": "#cec6b5",
        "on-secondary-fixed": "#1f1b10",
        "on-secondary-fixed-variant": "#4b4639",
        "tertiary": "#1d2b1f",
        "on-tertiary": "#ffffff",
        "tertiary-container": "#334134",
        "on-tertiary-container": "#9dad9c",
        "tertiary-fixed": "#d7e7d5",
        "tertiary-fixed-dim": "#bbcbba",
        "on-tertiary-fixed": "#111f14",
        "on-tertiary-fixed-variant": "#3c4a3d",
        "surface": "#fcf9f4",
        "on-surface": "#1c1c19",
        "surface-variant": "#e5e2dd",
        "on-surface-variant": "#504348",
        "surface-dim": "#dcdad5",
        "surface-bright": "#fcf9f4",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f6f3ee",
        "surface-container": "#f0ede9",
        "surface-container-high": "#ebe8e3",
        "surface-container-highest": "#e5e2dd",
        "surface-tint": "#834e68",
        "background": "#fcf9f4",
        "on-background": "#1c1c19",
        "outline": "#827378",
        "outline-variant": "#d4c2c8",
        "inverse-surface": "#31302d",
        "inverse-on-surface": "#f3f0eb",
        "inverse-primary": "#f6b4d1",
        "error": "#ba1a1a",
        "on-error": "#ffffff",
        "error-container": "#ffdad6",
        "on-error-container": "#93000a"
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        headline: ["Playfair Display", "serif"],
        body: ["Inter", "sans-serif"],
        label: ["Inter", "sans-serif"]
      },
      spacing: {
        "stack-lg": "48px",
        "container-max": "1280px",
        "section-gap": "80px",
        "stack-md": "24px",
        "base": "8px",
        "gutter": "24px",
        "margin-mobile": "16px",
        "stack-sm": "12px"
      },
      borderRadius: {
        "card": "24px"
      },
      boxShadow: {
        "soft": "0 4px 30px rgba(67, 24, 48, 0.04)",
        "soft-hover": "0 10px 40px rgba(67, 24, 48, 0.08)"
      }
    },
  },
  plugins: [],
}
