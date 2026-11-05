/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Instrument Serif', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      colors: {
        ink: '#f4f4f5',
        muted: '#a1a1aa',
        dim: '#71717a',
        line: 'rgba(255,255,255,0.08)',
        accent: '#c8ff4d',
      },
      maxWidth: {
        shell: '1200px',
      },
    },
  },
  plugins: [],
}
