/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#496989',
        'primary-light': '#58A399',
        'secondary': '#E2F4C5',
        'secondary-light': '#A8CD9F',
        'tertiary': '#98D3BC',
        'danger': '#D97360',
      },
    },
  },
  plugins: [],
}

