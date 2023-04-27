/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  important: true,
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
        social: {
          github: "#171515",
          linkedin: "#0072b1",
          twitter: "#00acee",
          telegram: "#0088cc",
          facebook: "#3b5998",
        },
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
    plugins: [],
  },
};
