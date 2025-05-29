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
        aquaAccent: "#6fffb0",
        softTeal: "#3a8f7d",
        darkBackground: "#0a0a0a",
        panelBackground: "#121417",
        lightText: "#e2e2e2",
        borderDefault: "#252a2f",
        borderAccent: "#ff5e5e",
        muted: "rgba(255, 94, 94, 0.2)",
        page: "#0a0a0a",
        panel: "#121417",
      }
    }
  }
}
