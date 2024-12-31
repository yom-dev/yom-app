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
        yomPurple: "#403277",
        bibleBrown: "#BC6619",
        bibleIvory: "#FFECCF",
        bibleLightBrown: "#F0B775",
      },
    },
  },
  plugins: [
    // function ({ addUtilities }) {
    //   addUtilities({
    //     ".bg-gradient-45": {
    //       background: "linear-gradient(45deg, var(--tw-gradient-stops))",
    //     },
    //     ".bg-gradient-90": {
    //       background: "linear-gradient(90deg, var(--tw-gradient-stops))",
    //     },
    //     ".bg-gradient-135": {
    //       background: "linear-gradient(135deg, var(--tw-gradient-stops))",
    //     },
    //     // 추가적인 각도를 원하면 여기에 추가할 수 있습니다.
    //   });
    // },
  ],
};
