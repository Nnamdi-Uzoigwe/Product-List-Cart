/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customRed: "hsl(14, 86%, 42%)",
        deepRed: "hsl(12, 20%, 44%"
      },
      screens: {
        medium: "1120px",
        large: "1350px",
        extraLarge: "1440px",
      },
    },
  },
  plugins: [],
}

