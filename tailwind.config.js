/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        space: {
          black: '#0B0F19',
          navy: '#111827',
          panel: '#0F1525',
        },
        accent: {
          blue: '#3B82F6',
          cyan: '#22D3EE',
          electric: '#5EE7FF',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(rgba(94,231,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(94,231,255,0.06) 1px, transparent 1px)',
        'radial-glow':
          'radial-gradient(circle at 50% 50%, rgba(59,130,246,0.18), transparent 70%)',
      },
      backgroundSize: {
        grid: '48px 48px',
      },
      boxShadow: {
        glow: '0 0 24px rgba(94,231,255,0.25)',
        'glow-blue': '0 0 30px rgba(59,130,246,0.35)',
        panel: '0 8px 32px rgba(0,0,0,0.45)',
      },
      animation: {
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        float: 'float 8s ease-in-out infinite',
        'float-delay': 'float 10s ease-in-out infinite 2s',
        'spin-slow': 'spin 18s linear infinite',
        blink: 'blink 1s step-end infinite',
        scan: 'scan 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '50%': { transform: 'translateY(-24px) translateX(12px)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        scan: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
