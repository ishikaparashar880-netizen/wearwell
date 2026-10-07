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
        gold: {
          DEFAULT: '#D4AF37',
          light: '#F3E5AB',
          dark: '#AA771C',
          glow: 'rgba(212, 175, 55, 0.25)',
        },
        dark: {
          bg: '#0a0a0a',
          card: '#141414',
          hover: '#1c1c1c',
          border: '#262626',
          muted: '#8e8e93',
          input: '#18181b',
        },
        // Backwards compatibility mappings for custom classes
        "primary": "#D4AF37",
        "on-primary": "#000000",
        "primary-container": "#26200d",
        "on-primary-container": "#f3e5ab",
        "surface": "#0a0a0a",
        "on-surface": "#f5f5f7",
        "surface-variant": "#262626",
        "on-surface-variant": "#a1a1aa",
        "surface-container": "#141414",
        "surface-container-high": "#1c1c1c",
        "surface-container-highest": "#262626",
        "surface-container-low": "#111111",
        "surface-container-lowest": "#0d0d0d",
        "background": "#0a0a0a",
        "on-background": "#f5f5f7",
        "outline": "#3f3f46",
        "outline-variant": "#27272a",
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        headline: ["Playfair Display", "serif"],
        body: ["Inter", "sans-serif"],
        label: ["Inter", "sans-serif"]
      },
      boxShadow: {
        "gold-glow": "0 0 25px rgba(212, 175, 55, 0.2)",
        "gold-glow-lg": "0 0 40px rgba(212, 175, 55, 0.35)",
        "dark-card": "0 10px 30px -10px rgba(0, 0, 0, 0.7)",
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #D4AF37 0%, #F3E5AB 50%, #AA771C 100%)',
        'gold-gradient-hover': 'linear-gradient(135deg, #F3E5AB 0%, #D4AF37 50%, #B8860B 100%)',
        'dark-gradient': 'linear-gradient(180deg, rgba(20, 20, 20, 0.8) 0%, rgba(10, 10, 10, 0.95) 100%)',
        'gold-border-gradient': 'linear-gradient(135deg, rgba(212, 175, 55, 0.6), rgba(212, 175, 55, 0.1))',
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'gold-pulse': 'goldPulse 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        goldPulse: {
          '0%, 100%': { boxShadow: '0 0 15px rgba(212, 175, 55, 0.2)' },
          '50%': { boxShadow: '0 0 30px rgba(212, 175, 55, 0.5)' },
        },
      }
    },
  },
  plugins: [],
}
