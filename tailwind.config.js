/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      width: {
        '112': '28rem',
      },
      height: {
        '112': '28rem',
      },
      fontFamily: {
        'orbitron': ['Orbitron', 'monospace'],
        'exo': ['Exo 2', 'sans-serif'],
      },
      colors: {
        'cosmic-black': '#0f172a',
        'deep-space': '#1e293b',
        'void-gray': '#475569',
        'astral-cyan': '#06b6d4',
        'galactic-purple': '#8b5cf6',
        'electric-blue': '#0ea5e9',
        'magenta-nebula': '#ec4899',
        'plasma-violet': '#a855f7',
        'space-white': '#f1f5f9',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
      backgroundImage: {
        'space-gradient': 'linear-gradient(135deg, #0f172a, #1e293b)',
        'nebula-gradient': 'radial-gradient(circle, #06b6d4 0%, #1e293b 100%)',
      },
    },
  },
  plugins: [],
};