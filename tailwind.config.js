/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        tabGray: "#6c6c6c",
        tabGreen: "#31a063",
        yomBlack: "#181818",
        yomGray: "#626262",
        yomRed: "#fe555d",
        yomGreen: "#32a079",
        yomDarkGreen: "#298665",
        yomWhite: "#f9f8f4",
        yomLightGray: "#f1f1f1",
      },
    },
  },
  plugins: [],
};
