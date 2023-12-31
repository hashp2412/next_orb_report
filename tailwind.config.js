/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'navbar': '0px 2px 20px 0px rgba(0, 0, 0, 0.36)',
        'text': '3px 8px 11px rgba(0, 0, 0, 0.12)',
        'summary': '-8px -8px 12px 1px #21252B',
        "s": '-10px -10px 12px #21252B, 10px 10px 12px rgba(0, 0, 0, 0.23);',
      },
      fontSize: {
        '12xl': '12', 
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        poppins: ['Poppins', 'sans'],
        quick: ['Quicksand', 'sans'],
        
      },
      letterSpacing: {
        widest: '0.25rem',
      },
      borderWidth: {
        'custom': '80%',
      },
      spacing: {
        'custom-width': '200px',
        'custom-height': '100px',
        spacing: {
        '20': '5rem', // For small screens
        '50': '10rem',
          'sf': '5rem', // For small screens
          'mf': '10rem', // For large screens
         // For large screens
      },
      },
    },
  },
  plugins: [
    
  ],
}
