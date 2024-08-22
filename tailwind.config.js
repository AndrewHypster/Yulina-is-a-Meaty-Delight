/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bodily: "#F7E8C2",
        mustard: "#E8D888",
        "my-white": "#FFF",
        "my-gray": "#5C5C5C",
        "my-black": "#413636",
        "dark-red": "#8B0000",
        "my-green": "#228B22",
        "dark-brown": "#654321",
        "light-brown": "#D2B48C",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        ubuntu: ["Ubuntu", "sans-serif"],
        "long-cang": ["Long Cang", "cursive"],
        "marck-script": ["Marck Script", "cursive"],
        "pt-sans-narrow": ["PT Sans Narrow", "sans-serif"],
        "roboto-condensed": ["Roboto Condensed", "sans-serif"],
      },
    },
    screens: {
      '4sm': '370px',
      '3sm': '420px',
      '2sm': '560px',
      'sm': '640px',
      'md': '768px',
      'ml': '960px',
      'lg': '1041px',
      'xl0': '1150px',
      'xl': '1280px',
      'xl1': '1290px',
      '2xl': '1401px',
      '3xl': '1495px',
    },
  },
  plugins: [
    function ({ addBase }) { // Забирає стрілки в інпут нумбер
      addBase({
        'input[type="number"]::-webkit-outer-spin-button': {
          '-webkit-appearance': 'none',
          'margin': 0,
        },
        'input[type="number"]::-webkit-inner-spin-button': {
          '-webkit-appearance': 'none',
          'margin': 0,
        },
        'input[type="number"]': {
          '-moz-appearance': 'textfield',
        },
      });
    },
  ],
};
