/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans : ['Inter', 'sans-serif'], // Correctly defining the font family
      },
      colors: {
        main: '#1f1f1e',
        navbar: '#252427',
        navbarNotselected: '#2d2c2d',
        header: '#3c3c3c',
        customyellow: '#9e7b31',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
