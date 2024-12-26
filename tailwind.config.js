/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        body: "rgb(0 12 36)",
        primary: "#ff008c",
        secondary: "#636363",
      },
      fontFamily: {
        sans: ["Arial", "sans-serif"], // Default font family
      },
      boxShadow: {
        "custom-light": "0px 4px 6px rgba(0, 0, 0, 0.1)",
        "custom-dark": "0px 4px 10px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};
