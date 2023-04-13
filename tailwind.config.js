/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      mono: "Fira Code",
      sans: "Inter",
    },
    extend: {
      colors: {
        aqua: "#59ffd5",
        gray2: "#c5d0f5",
        gray: "#7d87a7",
        gray3: "#8792b0",
      },
    },
  },
  plugins: [],
};
