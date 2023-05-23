/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'myfont': ['Work Sans', 'sans-serif'],
        'template': ['Noto Sans Nag Mundari', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

