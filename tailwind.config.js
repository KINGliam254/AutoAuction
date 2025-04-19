/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primary colors
        primary: {
          50: '#e6e8ed',
          100: '#c1c8d3',
          200: '#9aa5b7',
          300: '#73829a',
          400: '#566685',
          500: '#384971',
          600: '#2d3a5a',
          700: '#232c44',
          800: '#1a2238', // Primary dark blue
          900: '#111627',
        },
        // Secondary colors (crimson)
        secondary: {
          50: '#ffe6ea',
          100: '#ffc1c9',
          200: '#ff9aa6',
          300: '#ff7383',
          400: '#ff5266',
          500: '#ff304f', // Secondary crimson
          600: '#cc2640',
          700: '#991d30',
          800: '#661320',
          900: '#330a10',
        },
        // Accent colors (gold)
        accent: {
          50: '#fff9e6',
          100: '#fff0c1',
          200: '#ffe799',
          300: '#ffdd70',
          400: '#ffd54c',
          500: '#ffce63', // Accent gold
          600: '#cca32f',
          700: '#997a23',
          800: '#665218',
          900: '#33290c',
        },
        // Success, warning, error colors
        success: {
          500: '#10B981',
        },
        warning: {
          500: '#F59E0B',
        },
        error: {
          500: '#EF4444',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      spacing: {
        18: '4.5rem',
        88: '22rem',
        128: '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};