module.exports = {
  purge: ['./index.html', './src/css/styles.css'],
  darkMode: false,
  theme: {
    extend: {
      backgroundColor: {
        'primary': '#1E90FF',
        'secondary': '#FFD700',
      },
      textColor: {
        'primary': '#1E90FF',
        'secondary': '#FFD700',
      },
      animation: {
        'typing': 'typing 3s steps(40, end)',
        'fadeIn': 'fadeIn 1s ease-in',
        'buttonClick': 'buttonClick 0.1s ease-in-out',
      },
      keyframes: {
        typing: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        buttonClick: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.95)' },
          '100%': { transform: 'scale(1)' },
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['hover', 'focus'],
      textColor: ['hover', 'focus'],
      animation: ['hover', 'focus'],
    },
  },
  plugins: [],
}
