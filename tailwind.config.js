/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

module.exports = {
  important: true,
  mode: 'jit',
  content: ["./**/*.html", "./src/**/*.{html,js,jsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        zero: '#ecce7a',
        one: '#d3b561',
        two:'#c0a450',
        three: '#ad923f',
        four: '#99812d',
        five: '#4a2512',
      },
      backgroundImage: {
        'banner-pc': "url('/src/assets/banner/pc.webp')",
      },
      height: {
        '150': '150vh',
        '200': '200vh',
        '220': '220vh',
      },
      zIndex: {
        '1': '1',
        '2': '2',
        '3': '3',
      },
      fontFamily: {
        cinzel: ['Cinzel, serif'],
        afacad: ['Afacad Flux, sans-serif'],
      },
      width: {
        'w-zero': '0', 
      },
      animation: {
        'spin': 'spinbar 1s linear infinite',
        'float': 'floating 1s infinite alternate',
        'hoverfloat': 'hfloat .5s infinite alternate',
        'words': 'words 20s steps(10) infinite',
        'wordstwo': 'wordstwo 20s steps(10) infinite',
        'bar': 'bar .5s infinite',
      },
      keyframes: {
        spinbar: {
          '0%': {transform:'rotate(0deg)'},
          '100%': {transform: 'rotate(360deg)'},
        },
        floating: {
          '0%': {transform:'translateY(3%)'},
          '100%': {transform:'translateY(-3%)'},
        },
        hfloat: {
          '0%': {transform:'translateY(3%)'},
          '100%': {transform:'translateY(-3%)'},
        },
        words: {
          '10%, 15%, 30%, 35%, 50%, 55%, 70%, 75%, 90%, 95%': { width: '0' },
          '5%, 20%, 25%, 40%, 45%, 60%, 65%, 80%, 85%': {width: '11ch'},
        },
        wordstwo: {
          '10%, 15%, 30%, 35%, 50%, 55%, 70%, 75%, 90%, 95%': { width: '0' },
          '5%, 20%, 25%, 40%, 45%, 60%, 65%, 80%, 85%': {width: '8ch'},
        },
        bar: {
          '0%': {borderRight: '#000'},
        },
        textShadow: {
          sm: '1px 3px 3px #000'
        },
    },
    transitionTimingFunction: {
      'custom-ease': 'cubic-bezier(0.5, 1.6, 0.4, 0.7)',
    },
  },
},
  plugins: [
    function({ addComponents }) {
      addComponents({
        '.sections': {
          width: '100%',
          maxWidth: '100%', 
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        },
        '.cards': {
          width: 'auto',
          height: 'auto',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          gap: '10px',
          padding: '10px',
          transition:'.5s',
        },
        '.cards:hover': {
          scale: '1.08',
        },
        '.icons': {
          width: '65px',
        },
        '.flex-box': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        '.flex-box-column': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        },
        '.topico': {
          color:'#d3b561',
          position: 'relative',
        },
        '.topico::before': {
          content: '""',
          position: 'absolute',
          width: '0%',
          height: '1px',
          bottom: '0',
          left: '0',
          background: '#d3b561',
        },
        '.topico:hover::before': {
          width: '100%',
        },
        '.faded': {
          transform: 'translateY(50%)',
          opacity: '0',
          zIndex: '-1',
        },
        '.content-box': {
          width: '35%',
          height: '85%',
          border: '1px solid #d3b561',
          borderRadius: '10px',
          gap: '2px',
          position: 'relative',
          background: 'transparent',
          transition: '.5s',
        },
        '.slide': {
          position: 'relative',
          width: '100%',
          height: '100vh',
          flexShrink: '0',
        },
        '.slide-img': {
          width: '100%',
          height: '75%',
          overflow: 'hidden',
          objectFit: 'cover',
          position: 'absolute',
          top: '0%'
        },
        '.scrollbar': {
          '&::-webkit-scrollbar': {
            width: '100%',
            height: '10px',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#ecce7a',
            cursor: 'pointer',
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: 'transparent',
          },
        },
        '.scrollbar-body': {
          '&::-webkit-scrollbar': {
            width: '10px',
            height: '100%',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#ecce7a',
            cursor: 'pointer',
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: '#000000',
          },
        },
      });
    },
  ],
};