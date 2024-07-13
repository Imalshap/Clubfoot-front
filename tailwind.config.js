/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        potta_one: ['Potta One', 'system-ui'],
        be_vietnam_pro: ['Be Vietnam Pro', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        crimson_text: ['Crimson Text', 'sans-serif'],
        poppins_google: ['Poppins', 'sans-serif'],
        mplus_1p: ['M PLUS 1p', 'sans-serif'],
        monda: ['Monda', 'sans-serif'],
      },
      boxShadow: {
        'custom-light': '0 2px 4px rgba(0, 0, 0, 0.1)',
        'custom-medium': '0 4px 8px rgba(0, 0, 0, 0.2)',
        'custom-heavy': '0 8px 16px rgba(0, 0, 0, 0.4)',
        'custom-intense': '0 16px 32px rgba(0, 0, 0, 0.4)',
      },
      colors: {
        lightGreyText: '#393939',
        buttonBlue:'#0056B3',
      },
    },
  },
  plugins: [],
}