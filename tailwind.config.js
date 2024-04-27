/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        'outer':'0px 0px 20px 1px #041eaf98'
      }
    },
  },
  plugins: [],
}