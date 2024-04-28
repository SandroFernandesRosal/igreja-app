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
        primary: '#233876',
        secundary: '#1fb6ff',
        bgdark: '#1C2025',
        bgdarksecundary: '#1C2025',
        textdark: '#EEEEEE',
        bglight: '#e8ffff',
        bglightsecundary: '#e8ffff',
        textlight: '#262626',
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
        dark: '0 0px 4px 0px rgba(255, 255, 255, 0.5), 0 3px 4px 1px rgba(255, 255, 255, 0.1)',
        light:
          '0 0px 4px 0px rgba(000, 000, 000, 0.5), 0 3px 4px 1px rgba(000, 000, 000, 0.1)',
        hover:
          '0 4px 7px 4px rgba(31,182,255, 0.5), 0 4px 4px 2px rgba(31,182,255, 0.1)',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}
