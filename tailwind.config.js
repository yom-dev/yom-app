/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        tabGray: "#6C6C6C",
        tabGreen: "#31A063",
        yomBlack: "#181818",
        yomGray: "#626262",
        yomRed: "#FE555D",
        yomGreen: "#32A079",
        yomDarkGreen: "#298665",
        yomWhite: "#F9F8F4",
        yomLightGray: "#F1F1F1",
      },
    },
  },
  plugins: [],
};
