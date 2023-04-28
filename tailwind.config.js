/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    // colors:{
    //   'heyfeedback':'#181818',
    //   'heyfeedback-hover':"#151515",
    //   'MVP':'#090909',
    //   'form':'#0f0f0f'
    // }
  },
  plugins: [require("daisyui")],
}
