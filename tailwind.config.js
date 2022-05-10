module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true
      },
     screens: {
       md:'800px',
       lgg: '1100'
     },
     fontFamily: {
       'Montserrat-Bold': ['Montserrat-Bold'],
       'Montserrat-Medium': ['Montserrat-Medium']
     } 
    },
  },
  plugins: [],
}