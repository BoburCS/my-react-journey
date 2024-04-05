/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                hero: "url('/src/assets/images/hero.png')",
                logo: "url('/src/assets/icons/icon-logo.svg')",
            },
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
                montserrat: ['Montserrat', 'sans-serif'],
            },
            borderRadius: {
                '4xl': '2rem',
            },
            colors: {
                'red': '#EF4234',
                'grey': 'rgba(151, 151, 151, 1)',
                'light-dark': 'rgba(26, 26, 26, 1)',
            },
            fontSize: {
                '4xl': '2.5rem',
            }
        },
    },
    plugins: [],
};
