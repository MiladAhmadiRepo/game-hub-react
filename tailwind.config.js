/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class', // Enable dark mode using the 'class' strategy
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#ffffff',
                    dark: '#000000', // Dark mode variant
                },
            },
        },
    },
    plugins: [],
}