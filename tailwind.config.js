/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cream: '#FAF8F4',
        forest: {
          DEFAULT: '#1B4332',
          50: '#F2F7F4',
          100: '#DDE9E1',
          200: '#B8D0C0',
          400: '#3F6E58',
          500: '#1B4332',
          600: '#163A2B',
          700: '#102D21',
          900: '#081912',
        },
        accent: {
          DEFAULT: '#D4821A',
          50: '#FBEFD8',
          100: '#F5DBA4',
          400: '#E59A3B',
          500: '#D4821A',
          600: '#B86F12',
          700: '#92580E',
        },
        sage: {
          DEFAULT: '#8FAF8F',
          100: '#E2EBE2',
          200: '#C6D8C6',
          400: '#A0BEA0',
          500: '#8FAF8F',
          600: '#6E956E',
        },
        ink: '#222222',
        muted: '#5A5A5A',
        line: '#E6E1D7',
      },
      fontFamily: {
        display: ['Lora', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        prose: '68ch',
        container: '1200px',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(27,67,50,0.04), 0 8px 24px rgba(27,67,50,0.06)',
        lift: '0 4px 12px rgba(27,67,50,0.08), 0 16px 40px rgba(27,67,50,0.10)',
      },
      keyframes: {
        'fade-up': { '0%': { opacity: 0, transform: 'translateY(12px)' }, '100%': { opacity: 1, transform: 'translateY(0)' } },
        'pulse-soft': { '0%,100%': { opacity: 0.6 }, '50%': { opacity: 1 } },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
        'pulse-soft': 'pulse-soft 2.4s ease-in-out infinite',
      },
    }
  },
  plugins: []
}
