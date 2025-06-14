module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        techno: ['Orbitron', 'ui-monospace', 'monospace'],
      },
      colors: {
        galaxy: '#0a0927',
        neon: '#49eaff',
        blackhole: '#1b1b2f',
        planetGlow: '#7f5af0',
        cracked: '#ff3864',
      },
      boxShadow: {
        neon: '0 0 12px #49eaff, 0 0 40px #49eaff33',
        planet: '0 0 20px 6px #7f5af0aa',
      },
      animation: {
        orbit: 'orbit 12s linear infinite',
        explosion: 'explosion 0.6s cubic-bezier(.36,1.4,.38,1.01) both'
      },
      keyframes: {
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(120px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(120px) rotate(-360deg)' }
        },
        explosion: {
          '0%': { opacity: 1, transform: 'scale(1)' },
          '80%': { opacity: 1, transform: 'scale(1.8)' },
          '100%': { opacity: 0, transform: 'scale(2.2)' }
        }
      }
    }
  },
  plugins: []
}