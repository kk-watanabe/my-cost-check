const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      white: colors.white,
      slate: colors.slate,
      line: colors.line,
      red: colors.red,
      amber: colors.amber,
      sky: colors.sky,
      orange: colors.orange,
      yellow: colors.yellow,
      green: colors.green,
      purple: colors.purple,
      gray: colors.gray,
      teal: colors.teal,
      blue: colors.blue,
      transparent: colors.transparent,
    },
    extend: {},
  },
  plugins: [],
};
