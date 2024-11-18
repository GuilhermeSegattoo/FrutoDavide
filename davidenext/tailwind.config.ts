import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins'], // Define 'Poppins' como fonte padrão para o Tailwind
      },
      colors: {
        background: "var(--white-color)",
        primary: "#334031",  
        secondary:"#F0EEDC", 
        button: " #0FEC29",    
        black: " #000000",
        white:" #ffffff"
        
      },
    },
  },
  plugins: [],
} satisfies Config;

