/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'jost': ['Jost', 'sans-serif'],
      'cormorant': ['Cormorant Garamond', 'serif'],
    },
    extend: {
      colors:{
        background: '#5e5e5e',
        primaryText: '#bf9444',
      }
    },
  },
  plugins: [],
}

