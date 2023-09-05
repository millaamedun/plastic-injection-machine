/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {      
      animation: {
      'spin-slow': 'spin 6s linear(0 0%, 0.44 26.19%, 0.2 58.06%, 1 100%) infinite',
      'spin-slow-reverse': 'spin 6s ease-in infinite',
    }},
  },
  plugins: [],
}

