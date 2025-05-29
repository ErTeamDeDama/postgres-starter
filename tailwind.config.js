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
      colors: {
        aquaAccent: "#5efc8d",         // Verde menta brillante (accento primario)
        softTeal: "#3fb68b",           // Verde smeraldo soft (accento secondario)
        darkBackground: "#0f0f0f",     // Sfondo scuro neutro
        panelBackground: "#1a2b1e",    // Verde molto scuro, tono "bosco"
        lightText: "#f1e4e8",          // Rosa chiaro/beige, leggibile su sfondi scuri
        borderDefault: "#2e3d31",      // Verde/grigio scuro per bordi neutri
        borderAccent: "#b8405e",       // Rosso lampone, per bordi o elementi attivi
        muted: "rgba(184, 64, 94, 0.3)", // Rosso accentato ma trasparente
        page: "#0f0f0f",               // Sfondo pagina coerente con darkBackground
        panel: "#1a2b1e",              // Identico a panelBackground per consistenza
      },
    }
  }
}

