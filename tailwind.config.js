/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {

      fontFamily: {
        sans: ['Roboto', 'Irish Grover', 'ui-sans-serif', 'system-ui', '-apple-system'],
        destaque:['Irish Grover'],
      },
      
      colors: {
        'primary-blue': '#156AC7',
        'primary-green': '#0CBB68',
  
    },
  },
  plugins: [],
}
}
