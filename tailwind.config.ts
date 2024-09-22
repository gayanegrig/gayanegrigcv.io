import colors from "tailwindcss/colors";

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary-light": "#F7F8FC",
        "secondary-light": "#FFFFFF",
        "ternary-light": "#f6f7f8",
        "primary-dark": "#0D2438",
        "secondary-dark": "#102D44",
        "ternary-dark": "#1E3851",
        gray: colors.neutral,
      },
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "5rem",
          xl: "6rem",
          "2xl": "8rem",
        },
      },
      // animation: {
      //   run: "run 0.675s steps(6) infinite",
      // },
      // keyframes: {
      //   run: {
      //     to: { backgroundPosition: "-1536px 0" },
      //   },
      // },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
