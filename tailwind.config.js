/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#4C4842',
        'secondary': '#F2C99E',
        'tertiary': '#98D3BC',
        'danger': '#D97360',
      },
    },
  },
  plugins: [],
}

