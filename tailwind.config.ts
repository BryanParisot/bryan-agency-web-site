module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: '#064e3b',
      secondary: '#059669',
      light: '#ecfdf5',
      sombre: '#022c22',
      middle: '#34d399',
    },
  },
  plugins: ['prettier-plugin-tailwindcss'],
};
