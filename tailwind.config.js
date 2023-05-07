/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    fontFamily: {
      primary: 'Orbitron',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich'
    },
    container: {
      padding: {
        DEFAULT: '15px'
      }
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '960px',
      xl: '1200px'
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: '#1d6320',
        palette1: '#F6FFDE',
        palette2: '#E3F2C1',
        palette3: '#C9DBB2',
        palette4: '#AAC8A7'
      },
      backgroundImage: {
        site: "url('/site-bg2.jpg')",
        about: "url('/about.png')",
        services: "url('/services.png')"
      }
    }
  },
  plugins: []
};
