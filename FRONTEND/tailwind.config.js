/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#77E4C8',
        secondary:'#36C2CE',
        third:'#478CCF',
        fourth:'#4535C1'
      }
    },
  },
  plugins: [],
}