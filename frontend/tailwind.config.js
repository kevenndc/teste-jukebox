module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        "-1": "-1",
      },
      transformOrigin: {
        "0": "0%",
      },
    },
  },
  variants: {
    borderColor: ['responsive', 'hover', 'focus', 'focus-within'],
    extend: {},
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    function ({ addComponents }) {
      addComponents(
        {
          '.container': {
            maxWidth: '85%',
            marginLeft: 'auto',
            marginRight: 'auto',
            '@screen sm': {
              maxWidth: '85%',
            },
            '@screen md': {
              maxWidth: '85%',
            },
            '@screen lg': {
              maxWidth: '90%',
            },
            '@screen xl': {
              maxWidth: '1080px',
            },
          },
        }
      )
    }
  ],
}
