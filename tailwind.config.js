module.exports = {
  important: true,
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          sm: "900px",
          // md: "708px",
          lg: '943px',
          xl: "1200px",
        '2xl': '14700px' 
        }
      },
     screens: {
       md:'800px',
       lgg: '1100'
     },
     fontFamily: {
       'Montserrat-Bold': ['Montserrat-Bold'],
       'Montserrat-Medium': ['Montserrat-Medium'],
       'Montserrat-normal': ['Montserrat-normal'],
       'Montserrat-Light': ['Montserrat-Light']
     } 
    },
  },
  
  plugins: [],
}