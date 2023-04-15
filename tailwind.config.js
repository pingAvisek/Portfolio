/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f9ff",
          100: "#dff2ff",
          200: "#b9e6fe",
          300: "#7bd4fe",
          400: "#34befc",
          500: "#0aa7ed",
          600: "#0085cb",
          700: "#0072b1", // default
          800: "#055a87",
          900: "#0a4a70",
          950: "#072f4a",
        },
        secondary: {
          50: "#fcf5f4",
          100: "#faebe9",
          200: "#f5d7d6",
          300: "#ecb7b5",
          400: "#e18e8b",
          500: "#d26161",
          600: "#bd4248",
          700: "#9e323a", // default
          800: "#852c36",
          900: "#722933",
          950: "#3f1217",
        },
        tertiary: {
          50: "#f0fdf3",
          100: "#dcfce5",
          200: "#bbf7cd",
          300: "#86efa7",
          400: "#49df78",
          500: "#21c656",
          600: "#15a443",
          700: "#147d36", // default
          800: "#166530",
          900: "#14532a",
          950: "#052e14",
        },
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
    plugins: [],
  },
};
