/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      blur: {
        xs: '2px',
      },
      height: {
        '340': '340px',
      },
      margin: {
        '25px': '25px',
      },
      colors: {
        'light-purple': '#a893ba',
        'snow': '#fff'
      },
    },
  },
  plugins: [],
}
