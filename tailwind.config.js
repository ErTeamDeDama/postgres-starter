module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      color:{
        'default-text': '#fff',
        'default-bg': '#0e0e0e',
      },
    },
  },
  plugins: [],
};