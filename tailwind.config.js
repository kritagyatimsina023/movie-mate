module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        other: { min: "466px", max: "1300px" },
        other_1: { min: "200px", max: "1300px" },
      },
    },
  },
  plugins: [],
};
