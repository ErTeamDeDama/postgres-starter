/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        aquaAccent: "#66fcf1",                   // primary - AquaAccent - Per elementi interattivi: pulsanti primari, link attivi, call-to-action
        softTeal: "#45a29e",                     // secondary - SoftTeal - Per hover, bordi interattivi, pulsanti secondari
        darkBackground: "#0b0c10",               // background - DarkBackground - Sfondo principale del sito (dark mode)
        panelBackground: "#1f2833",              // surface - PanelBackground - Sfondo per card, modali, sezioni evidenziate
        lightText: "#c5c6c7",                    // text - LightText - Colore del testo principale sul dark background
        
        borderDefault: "#1f2833",                // border for panels, cards
        borderAccent: "#45a29e",                 // border on hover/focus
      },
      textColor: {
        DEFAULT: "#c5c6c7", // override default text color if needed
      },
      borderColor: {
        DEFAULT: "#1f2833", // default border
        accent: "#45a29e",
        muted: "rgba(197,198,199,0.3)",
      },
      backgroundColor: {
        page: "#0b0c10",
        panel: "#1f2833",
      }
    }
  }
}
