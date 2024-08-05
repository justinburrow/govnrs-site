import { join } from 'path';
import type { Config } from 'tailwindcss';

import { skeleton } from '@skeletonlabs/tw-plugin';

export default {
  darkMode: 'class',
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    join(
      require.resolve('@skeletonlabs/skeleton'),
      '../**/*.{html,js,svelte,ts}'
    ),
  ],
  theme: {
    extend: {},
    fontFamily: {
      vazirmatn: ['Vazirmatn', 'sans-serif'],
    },
  },
  plugins: [
    skeleton({
      themes: { preset: ['crimson'] },
    }),
  ],
} satisfies Config;
