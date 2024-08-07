/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      fontFamily: {
        vazirmatn: ['Vazirmatn', 'sans-serif'],
      },
      backgroundSize: {
        logo: '116%',
      },
      backgroundPosition: {
        logo: 'center 120%',
      },
    },
  },
  plugins: [daisyui],
};
