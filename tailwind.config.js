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
        aquaAccent: "#66fcf1",
        softTeal: "#45a29e",
        darkBackground: "#0b0c10",
        panelBackground: "#1f2833",
        lightText: "#c5c6c7",
        borderDefault: "#1f2833",
        borderAccent: "#45a29e",
        muted: "rgba(197,198,199,0.3)",
        page: "#0b0c10",
        panel: "#1f2833",
      },
    }
  }
}

