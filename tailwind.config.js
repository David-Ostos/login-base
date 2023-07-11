/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'car-login': "url('./src/assets/sedan-lujo-rojo-carretera.jpg')",
        'cyber': "url('./src/assets/concepto-seguridad.jpg')",
        'social': "url('./src/assets/social.jpg')"
      },
      fontFamily:{
        'mono' : ['']
      },
      gridTemplateColumns: {
        "gallery": 'repeat(auto-fill, minmax(350px, 1fr))',
        "gallery1": 'repeat(auto-fill, minmax(500px, 1fr))'
      }
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('@tailwindcss/forms'),
  ],
}