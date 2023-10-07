/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    colors: {
      main: "#040e1e",
      second: "#052D56",
      pColor: "#81AFDD",
      white: "#fff",
      btnColor: "#FF4820",
      linColor1: "#AE67FA",
      linColor2: "#F49867",
      trans: "transparent",
      sColor: "#71E5FF",
      s2Color: "#FF8A71",
    },
    container: {
      center: false,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        // xl: "5rem",
        // "2xl": "6rem",
      },
    },
    gridTemplateColumns: { main: "repeat(auto-fit, minmax(260px, 1fr))" },
    extend: {},
  },
  plugins: [],
  darkMode: "class",
};
