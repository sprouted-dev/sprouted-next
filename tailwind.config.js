/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{tsx,jsx,js,ts,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Keep existing sprout color for compatibility
        sprout: "#8cae3e",
        
        // Add new Sprouted ecosystem colors
        sprouted: '#82B366',
        'weather-sunny': '#FFD54F',
        'weather-rainy': '#64B5F6', 
        'weather-stormy': '#5C6BC0',
        'weather-drought': '#EF5350',
        'nature-daylight': '#F8FAFC',
        'nature-night': '#1E293B',
        'nature-mist': '#64748B',
        'nature-fog': '#CBD5E1',
        'nature-twilight': '#334155',
        'growth-sapling': '#66BB6A',
        'growth-mature': '#43A047',
        'sprouted-accent': '#60A5FA',
        'garden-stone': '#9E9E9E'
      },
      fontFamily: {
        sans: ["Nunito", "sans-serif"],
      },
      keyframes: {
        // Keep existing rotate animation
        rotate: {
          "0%, 20%": { transform: "translateY(0)" },
          "25%, 45%": { transform: "translateY(-75px)" },
          "50%, 70%": { transform: "translateY(-150px)" },
          "75%, 95%": { transform: "translateY(-225px)" },
          "100%": { transform: "translateY(-300px)" },
        },
        // Add new fade animation for weather content
        fadeInOut: {
          "0%, 20%": { opacity: "1" },
          "25%, 95%": { opacity: "0" },
          "100%": { opacity: "0" }
        }
      },
      animation: {
        'fade-in-out': 'fadeInOut 4s infinite',
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    
    // Add our Sprouted theme system
    function({ addBase, theme }) {
      addBase({
        // Light theme variables (default)
        ':root': {
          '--color-primary': theme('colors.sprouted'),
          '--color-secondary': theme('colors.growth-sapling'),
          '--color-accent': theme('colors.sprouted-accent'),
          '--color-success': theme('colors.weather-sunny'),
          '--color-info': theme('colors.weather-rainy'),
          '--color-warning': theme('colors.weather-stormy'),
          '--color-error': theme('colors.weather-drought'),
          '--color-background': theme('colors.nature-daylight'),
          '--color-surface': '#FFFFFF',
          '--color-border': theme('colors.nature-fog'),
          '--color-text-primary': theme('colors.nature-night'),
          '--color-text-secondary': theme('colors.nature-mist'),
        },
        
        // Dark theme variables
        '.dark': {
          '--color-primary': theme('colors.sprouted'),
          '--color-secondary': theme('colors.growth-mature'),
          '--color-accent': theme('colors.sprouted-accent'),
          '--color-success': theme('colors.weather-sunny'),
          '--color-info': theme('colors.weather-rainy'),
          '--color-warning': '#7C4DFF',
          '--color-error': '#FF5252',
          '--color-background': theme('colors.nature-night'),
          '--color-surface': theme('colors.nature-twilight'),
          '--color-border': '#475569',
          '--color-text-primary': theme('colors.nature-daylight'),
          '--color-text-secondary': theme('colors.nature-fog'),
        }
      });
    },
    
    // Add component classes
    function({ addComponents, theme }) {
      const components = {
        '.sprouted-btn': {
          backgroundColor: 'var(--color-primary)',
          color: 'white',
          padding: '0.75rem 1.5rem',
          borderRadius: '0.5rem',
          fontWeight: '600',
          transition: 'all 0.2s',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          '&:hover': {
            opacity: '0.9',
            transform: 'translateY(-1px)',
          },
        },
        '.sprouted-card': {
          backgroundColor: 'var(--color-surface)',
          borderRadius: '0.75rem',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          border: '1px solid var(--color-border)',
          overflow: 'hidden',
          transition: 'all 0.3s',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 10px 25px -3px rgba(0, 0, 0, 0.1)',
          },
        },
        '.weather-badge': {
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.375rem',
          padding: '0.25rem 0.75rem',
          borderRadius: '9999px',
          fontSize: '0.875rem',
          fontWeight: '500',
        },
        '.weather-sunny': { 
          backgroundColor: 'var(--color-success)', 
          color: theme('colors.nature-night') 
        },
        '.weather-rainy': { 
          backgroundColor: 'var(--color-info)', 
          color: 'white' 
        },
        '.weather-stormy': { 
          backgroundColor: 'var(--color-warning)', 
          color: 'white' 
        },
        '.weather-drought': { 
          backgroundColor: 'var(--color-error)', 
          color: 'white' 
        },
      };
      
      addComponents(components);
    }
  ],
};
