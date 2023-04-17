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
        gray: "#8892B0",
        gray3: "#CCD6F6",
        gray4: "#A8B2D1",
      },
    },
  },
  plugins: [],
};
