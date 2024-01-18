/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        'unahur-green': '#5fa92c',
        'unahur-green-dark': '#40711e',
        'unahur-blue': '#3aa4cc',
        'unahur-blue-dark': '#25647c',
        'gray-title': 'rgb(55 65 81)',
        'gray-text': 'rgb(75 85 99)',
        'gray-subtext': 'rgb(156 163 175)'


      },
      backgroundImage: {'banner-unahur': './assets/images/banner.jpg'}
    },
  },
  plugins: [],
}

