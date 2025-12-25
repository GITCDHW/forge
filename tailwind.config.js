/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        // You can define custom colors here if needed for brand consistency
        // primary: '#yourPrimaryColor',
        // secondary: '#yourSecondaryColor',
      },
      keyframes: {
        fadeInDown: {
          'from': { opacity: '0', transform: 'translateY(-20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInUp: {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        'fade-in-down': 'fadeInDown 1s ease-out forwards',
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
      },
    },
  },
  plugins: [],
};
