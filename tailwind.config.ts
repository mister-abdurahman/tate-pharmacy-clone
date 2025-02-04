import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			primary: {
  				'50': '#E1E8EF',
  				'100': '#D4DEE7',
  				'200': '#B7C7D7',
  				'300': '#99B0C7',
  				'400': '#7C99B6',
  				'500': '#5E82A6',
  				'600': '#4C6B8A',
  				'700': '#3C546C',
  				'800': '#2C3D4F',
  				'900': '#1B2631',
  				'950': '#141C24'
  			},
  			accent: {
  				'50': '#FAF5FB',
  				'100': '#F4EAF8',
  				'200': '#E8D1F1',
  				'300': '#DDB6EB',
  				'400': '#D29CE5',
  				'500': '#CB6CE6',
  				'600': '#B553C8',
  				'700': '#8D3EA0',
  				'800': '#672D78',
  				'900': '#4A1F55'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		backgroundImage: {
  			heroImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("/images/figmadoc.png")'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
