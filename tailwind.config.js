/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },

    colors: {
      body: "#f5f5f5",
      white: "#ffffff",
      yellow: "#F0DB64",
    },
    fontFamily: {
      poppins: ["Poppins"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      ring: {
        "5px": "5px",
      },
    },
  },
};
