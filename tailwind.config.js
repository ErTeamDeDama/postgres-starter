/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',      // per Next.js app directory
    './components/**/*.{js,ts,jsx,tsx}',  // se hai componenti separati
         // se usi la cartella pages
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.6s ease forwards',
      },
      zIndex: {
        '60': '60',
        '999': '999',
        'max': '9999',
      },
      colors: {
  aquaAccent: "#22d3ee",         // Azzurro ciano (verifica digitale)
  softTeal: "#38bdf8",           // Blu cielo chiaro
  darkBackground: "#0f172a",     // Blu navy profondo
  panelBackground: "#1e293b",    // Grigio-azzurro scuro
  lightText: "#e2e8f0",          // Grigio perla chiaro
  borderDefault: "#475569",      // Grigio-blu medio
  borderAccent: "#0ea5e9",       // Blu acceso (fiducia)
  muted: "#64748b",              // Grigio-azzurro spento
  page: "#0f172a",               // Sfondo coerente
  panel: "#1e293b",              // Pannello coerente
}

    }
  }
}
