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
        'primary-green': '#0CBB68',
        'greenheader': '#86EFAC',
    },
  },
  plugins: [],
}
}
