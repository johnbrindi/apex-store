import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './features/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          header: '#173436',
          teal:   '#1E3D3F',
          green:  '#315B4C',
          light:  '#F5F5F5',
          red:    '#C0392B',
        },
        border: {
          light:   '#E5E7EB',
          DEFAULT: '#E5E7EB',
        },
        text: {
          primary:   '#111111',
          secondary: '#666666',
          muted:     '#999999',
        },
        button: {
          blue:  '#1E73BE',
          hover: '#185d9b',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          50:      '#F9FAFB',
          100:     '#F3F4F6',
          200:     '#E5E7EB',
          300:     '#D1D5DB',
        },
        // Admin / Dark theme
        dark: {
          DEFAULT: '#0F1923',
          100:     '#162130',
          200:     '#1C2A3B',
        },
      },
      fontFamily: {
        sans: ['var(--font-barlow)', 'system-ui', 'sans-serif'],
        display: ['var(--font-oswald)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0,0,0,0.1)',
        'card-hover': '0 4px 6px rgba(0,0,0,0.1)',
      },
    },
  },
  plugins: [],
}

export default config
