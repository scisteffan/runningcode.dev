const colors = require("tailwindcss/colors")
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: ["{pages,app}/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      blue: {
        ...colors.blue,
        mid: "#2B84A3",
      },
      white: colors.white,
    },
    fontFamily: {
      display: ["Knile", defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
}
