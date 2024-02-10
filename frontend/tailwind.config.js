/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black1: '#0d0d0d',
        white1: '#f2f2f2'
      },
    },
  },
  plugins: [],
}

