/** @type {import('tailwindcss').Config} */
const theme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./starter-code/dist/**/*.{html,js}"],
  theme: {
    colors: {
      "slate-blue": "#666CA3",
      "dark-blue": "#13183F",
      "cool-gray": "#83869A",
      "deep-pink": "#F74780",
      "cotton-candy": "#FFA7C3",
    },

    screens: {
      mobile: "375px",
      tablet: "768px",
      laptop: "1440px",
    },

    fontSize: {
      "body-s": ["16px", { lineHeight: "28px", fontWeight: 700 }],
      "body-m": ["18px", { lineHeight: "28px", fontWeight: 500 }],
      "heading-s": ["24px", { lineHeight: "28px", fontWeight: 800 }],
      "heading-m": ["32px", { lineHeight: "40px", fontWeight: 800 }],
      "heading-l": ["40px", { lineHeight: "51px", fontWeight: 800 }],
      "heading-xl": ["56px", { lineHeight: "70px", fontWeight: 800 }],
    },

    extend: {
      backgroundImage: {
        "gradient-pink-orange":
          "linear-gradient(to bottom, #FF6F48 0%, #F02AA6 100%)",
        "gradient-blue-pink":
          "linear-gradient(to bottom, #4851FF 0%, #F02AA6 100%)",
      },
      fontFamily: { "plus-jakarta": ["Plus Jakarta Sans", "sans-serif"] },
      fontWeight: { medium: 500, bold: 700, "extra-bold": 800 },
    },
  },
  plugins: [],
};
