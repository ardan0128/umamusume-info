/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      minWidth: {
        280: '280px',
        360: '360px',
        640: '640px',
        720: '720px',
        800: '800px',
      },
      minHeight: {
        280: '280px',
        360: '360px',
      },
    },
  },
  plugins: [],
};
