/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-green': '#157A6E',
        'light-violet': '#9381FF',
        violet: '#3D3B8E',
        success: '#90BE6D',
        warn: '#D95D39',
        brown: '#582630',
        'blue-message': '#1890ff',
        'pastel-green': '#90be6d',
        'light-pastel-green': '#abda88',
      },
    },
  },
  plugins: [],
}