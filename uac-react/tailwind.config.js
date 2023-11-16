/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      minWidth: {
        280: '280px',
        640: '640px',
      },
      minHeight: {
        280: '280px',
      },
    },
  },
  plugins: [],
};
