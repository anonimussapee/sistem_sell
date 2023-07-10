/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      'sm':'320px',
      'smMax' :{'max': '400px'},
      'md':'400px',
      'mdMax' :{'max': '600px'},
      'lgMax' :{'max': '1024px'},
  
    },
    extend: {},
  },
  plugins: [],
}

