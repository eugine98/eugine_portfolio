/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}",],
    theme: {
      screens: {
          tablet: "1150px",
          small: "100px"
      },
      extend: {
        boxShadow: {
          custom: 'rgba(111,0,255)  0px 2px 5px, rgba(200, 0, 0) 0px 2px 5px;',
          // custom2: 'rgba(200, 0, 0) 0px 0px 1px, rgb(200, 0, 0) 0px 0px 0px 0.5px',
          custom2: ' rgba(0, 0, 0, 0.16) 0px 1px 1px, rgb(51, 51, 51) 0px 0px 0px 1px',
          custom3: ' rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px',
          custom4: ' rgba(200, 0, 0) 0px 1px 1px, rgba(200, 0, 0) 0px 0px 0px 1px',
        },
      },
    },
    plugins: [
        require('flowbite/plugin')
    ],
  }
// module.exports = {
//     content: [
//       './src/**/*.{js,jsx,ts,tsx}',
//       // 'node_modules/flowbite-react/lib/esm/**/*.js'
//     ],
//     theme: {
//       extend: {},
//     },
//     plugins: [  
//         require('flowbite/plugin')
//     ],
//   }