/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './node_modules/flowbite-react/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1fb6ff',
        bgdark: '#000000',
        bgdarksecundary: '#202020',
        textdark: '#EEEEEE',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animate: {
        fadeIn: 'fadeOut 2s ease-in-out',
      },
      keyframes: {
        fadeOut: {
          from: {
            opacity: '0',
          },
          to: {
            opacity: '1',
          },
        },
      },
      boxShadow: {
        dark: '0 3px 10px 3px rgba(255, 255, 255, 0.1), 0 3px 6px 1px rgba(255, 255, 255, 0.05)',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}
