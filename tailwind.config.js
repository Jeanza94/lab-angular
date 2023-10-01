/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        common: {
          light: "theme(colors.neutral.100)",
          base: "theme(colors.neutral.600)",
          dark: "theme(colors.neutral.900)",
        },
        primary: {
          light: "theme(colors.blue.100)",
          base: "theme(colors.blue.600)",
          dark: "theme(colors.blue.900)",
        },
        secondary: {
          light: "theme(colors.yellow.100)",
          base: "theme(colors.yellow.500)",
          dark: "theme(colors.yellow.900)",
        },
        terciary: {
          light: "theme(colors.red.100)",
          base: "theme(colors.red.600)",
          dark: "theme(colors.red.900)",
        },
      },
      boxShadow: {
        "primary-light": "0 0 4px 2px theme(colors.blue.900)"
      }
    },
  },
  plugins: [],
}

