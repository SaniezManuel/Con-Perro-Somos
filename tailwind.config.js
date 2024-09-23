/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#582770',
        'main-light': '#A8539C',
        'detail-light': '#FF930A',
        'detail-dark': '#F24B04',
        'main-lightpink': '#D1105A',
      },
    },
  },
  plugins: [],
};
