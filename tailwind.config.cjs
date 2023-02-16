/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#25c2a0",
        "dark-primary": "#FFF",
        "dark-background": "#18181b",
        "dark-background-paper": "#242526",
        "dark-background-code": "#292d3e",
        secondary: "#00bcd4",
        accent: "#ffcb6b",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
