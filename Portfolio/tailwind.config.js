/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-bg": "#121212",
      },
      transitionProperty: {
        all: "all",
        colors: "background-color, color, border-color, fill, stroke",
      },
      transitionDuration: {
        500: "500ms",
      },
      transitionTimingFunction: {
        "ease-in-out": "ease-in-out",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
