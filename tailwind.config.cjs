/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      'red': '#912121',
      'hover-red': '#9b3b3b',
      'dark-red': '#771b1b',
      'grey': '#d2d2d2',
      'blue': '#0e3261',
      'white': '#ffffff',
      'black': '#000000'  
    },
    fontFamily: {
      sans: ['Titillium Web', 'sans-serif']
    },
    extend: {
      height: {
        'screen-half': '50vh'
      },
      margin: {
        '1/5': '20%',
        '2/5': '40%',
        '1/4': '25%',
        '1/10': '10%',
      }
    },
  },
  plugins: [],
}

