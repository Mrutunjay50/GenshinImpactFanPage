/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {fontFamily: {
      revolution: ["Protest Revolution", "sans-serif"],
      caveat: ["Caveat", "cursive"],
     },},
  },
  plugins: [],
}