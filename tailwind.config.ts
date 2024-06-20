import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'transparent-white': 'rgba(255, 255, 255, 0.03)',
        "primary":"#050828",
        "aqua":"#02c5f7"
      },
       
    },
    fontFamily: {
      mich:[ 'Michroma', 'sans-serif'],
      mont:[ 'Montserrat', 'sans-serif']


  },
  },
  plugins: [],
};
export default config;
