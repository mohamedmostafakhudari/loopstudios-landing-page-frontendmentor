/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkGray: "hsl(0, 0%, 55%)",
        veryDarkGray: "hsl(0, 0%, 41%)",
      },
    },
    fontFamily: {
      body: ['"Alata"', "sans-serif"],
      header: ['"Josefin Sans"', "sans-serif"],
    },
  },
  plugins: [],
};
