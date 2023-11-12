/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'background-farmapp': '#f2fcf1',
        'logo-farmapp': '#00b941',
        'colorlet-farmapp' : '#333333',
        'color-input' : '#e3e3e3',
        'fondoblanco' : '#ffffff',
      }
    },
  },
  plugins: [],
}

