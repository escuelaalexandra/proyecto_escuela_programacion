import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        hielo: {
          DEFAULT: '#F0F4F8',
          100: '#E1E9F0',
          200: '#C3D3E1',
        },
        vino: {
          DEFAULT: '#2A0813',
          dark: '#1C050D',
        },
        rubi: {
          DEFAULT: '#7A1C31',
          light: '#A32642',
          accent: '#D32F2F',
        },
        titanio: {
          900: '#0F1115',
          800: '#1A1D24',
          700: '#2A2E39',
          300: '#9CA3AF',
        }
      },
    },
  },
  plugins: [],
};
export default config;
