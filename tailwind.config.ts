import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Source Sans 3', 'Arial', 'Helvetica', 'sans-serif'], // Add custom font
      },
    },
  },
  plugins: [],
} satisfies Config;