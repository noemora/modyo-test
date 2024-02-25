/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '375px',
      sm: '570px',
      md: '780px',
      lg: '932px',
      xl: '1280px',
    },
    extend: {},
  },
  plugins: [animations],
};
