/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{tsx,jsx,js,ts}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        sprout: "#8cae3e",
      },
      fontFamily: {
        sans: ["Nunito", "sans-serif"],
      },
      keyframes: {
        rotate: {
          "0%, 20%": { transform: "translateY(0)" },
          "25%, 45%": { transform: "translateY(-75px)" },
          "50%, 70%": { transform: "translateY(-150px)" },
          "75%, 95%": { transform: "translateY(-225px)" },
          "100%": { transform: "translateY(-300px)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
