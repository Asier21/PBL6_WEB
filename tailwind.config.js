const options = require('./config'); //options from config.js

const allPlugins = {
  typography: require('@tailwindcss/typography'),
  forms: require('@tailwindcss/forms'),
  containerQueries: require('@tailwindcss/container-queries'),
};

const plugins = Object.keys(allPlugins)
  .filter((k) => options.plugins[k])
  .map((k) => {
    if (k in options.plugins && options.plugins[k]) {
      return allPlugins[k];
    }
  });

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        c1: 'var(--c-1)',
        c2: 'var(--c-2)',
        c3: 'var(--c-3)',
        c4: 'var(--c-4)',
        c5: 'var(--c-5)',
        dc1: 'var(--dc-1)',
        dc2: 'var(--dc-2)',
        dc3: 'var(--dc-3)',
        dc4: 'var(--dc-4)',
        dc5: 'var(--dc-5)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
  safelist: [
    // aquí las clases que generas dinámicamente en JS
    'text-yellow-500',
    'bg-yellow-100',
    'text-yellow-800',
    'text-red-500',
    'bg-red-100',
    'bg-red-400',
    'text-red-800',
    'text-green-300',
    'text-blue-500',
    'bg-gray-200',
    'text-black',
    'bg-yellow-400',
    'dark:hover:bg-cyan-900',
    'dark:bg-cyan-800',
  ],
};

