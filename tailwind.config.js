/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'Irish Grover', 'ui-sans-serif', 'system-ui', '-apple-system'],
        destaque:['Irish Grover'],
      },
      colors: {
        'primary-blue': '#156AC7',
        'primary-green': '#087f45', // contraste 5,08:1 com branco (WCAG 1.4.3); o antigo #0CBB68 dava 2,5:1
        'greenheader': '#D1FAE5', // contraste 4,73:1 sobre o azul primario; o antigo #86EFAC dava 3,8:1
    },
  },
  plugins: [],
}
}
