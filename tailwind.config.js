/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      mono: "Fira Code",
    },
    extend: {
      colors: {
        aqua: "#59ffd5",
        gray: "#c5d0f5",
        gray2: "#7d87a7",
      },
    },
  },
  plugins: [],
};
