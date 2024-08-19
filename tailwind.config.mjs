/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Benzin: ['Benzin', 'sans-serif'],
        Ftra: ['Ftra'],
        Archive: ['Archivo'],
        monospace: ['monospace'],
      },
      backgroundSize: {
        logo: '116%',
      },
      backgroundPosition: {
        logo: 'center 120%',
      },
      colors: {
        beige: '#F3F3F0',
        olive: '#696c69',
      },
      maxWidth: {
        mobileLayout: '600px',
      },
    },
  },
  darkMode: 'false',
  plugins: [daisyui],
};
