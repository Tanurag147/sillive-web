module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        teal: { 400: '#5DCAA5', 500: '#1D9E75', 600: '#0F766E', 700: '#085041', 900: '#04342C' },
        slate: { 800: '#1E293B', 900: '#0F172A', 950: '#020617' }
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['Plus Jakarta Sans', 'sans-serif'],
      }
    }
  },
  plugins: []
}
