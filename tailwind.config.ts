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
      keyframes: {
        ccrm: {
          "0%": { opacity: "0", top: "-1000px" },
          "100%": { opacity: "1", top: "0" },
        },
        ccra: {
          "0%": { transform: "scale(1.1)" },
          "25%": { transform: "scale(1)" },
          "50%": { transform: "scale(0.9)" },
          "75%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.1)" },
        },
        ccrb: {
          "0%": { bottom: "5px" },
          "25%": { bottom: "0px" },
          "50%": { bottom: "3px" },
          "75%": { bottom: "2px" },
          "100%": { bottom: "0px" },
        },
        pulse: {
          "0%": {
            boxShadow: "0 0 0 0 rgba(139, 92, 246, 0.9)",
            borderRadius: "50%",
            transform: "scale(1.1)",
          },
          "100%": {
            boxShadow: "0 0 0 45px rgba(139, 92, 246, 0)",
            borderRadius: "50%",
            transform: "scale(1.1)",
          },
        },
      },
      animation: {
        "fade-in": "ccrm 0.9s ease-in-out",
        "pulse-odd": "ccra 4s linear infinite",
        "pulse-even": "ccrb 3s ease-in-out infinite",
        pulse: "pulse 1.25s infinite cubic-bezier(0.66, 0, 0, 1)",
      },
      spacing: {
        bubble: "150px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

// tailwind.config.js
