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
};

