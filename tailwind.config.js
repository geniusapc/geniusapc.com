/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gray100: '#12172A',
        gray200: '#12172a',
        gray300: '#2d333b',
        gray400: '#768390',
        white100: '#e1e1e6',
        white200: '#bebec2',
        blue100: '#539cf531',
        blue200: '#539bf5',
        blue300: '#306dca',
      },
    },
  },
  plugins: [],
};
