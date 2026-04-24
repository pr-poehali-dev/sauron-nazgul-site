import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
		"./1777033613259799721.html"
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				cinzel: ['Cinzel', 'serif'],
				'cinzel-decorative': ['Cinzel Decorative', 'serif'],
				crimson: ['Crimson Text', 'serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				mordor: {
					black: '#080305',
					deep: '#0f0508',
					dark: '#1a0810',
					ember: '#8b1a1a',
					fire: '#c0392b',
					blood: '#e74c3c',
					glow: '#ff4444',
					gold: '#c9a84c',
					ash: '#3d2b2b',
					smoke: '#2a1a1a',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'flicker': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.7' },
					'75%': { opacity: '0.9' },
				},
				'pulse-red': {
					'0%, 100%': { boxShadow: '0 0 20px rgba(183, 28, 28, 0.4)' },
					'50%': { boxShadow: '0 0 60px rgba(183, 28, 28, 0.9), 0 0 100px rgba(183, 28, 28, 0.4)' },
				},
				'eye-glow': {
					'0%, 100%': { filter: 'drop-shadow(0 0 8px #c0392b)' },
					'50%': { filter: 'drop-shadow(0 0 30px #ff4444) drop-shadow(0 0 60px #c0392b)' },
				},
				'rise': {
					'0%': { opacity: '0', transform: 'translateY(40px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				'lava-flow': {
					'0%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
					'100%': { backgroundPosition: '0% 50%' },
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'flicker': 'flicker 3s ease-in-out infinite',
				'pulse-red': 'pulse-red 2s ease-in-out infinite',
				'eye-glow': 'eye-glow 2.5s ease-in-out infinite',
				'rise': 'rise 1s ease-out forwards',
				'fade-in': 'fade-in 0.6s ease-out forwards',
				'lava-flow': 'lava-flow 8s ease infinite',
				'float': 'float 4s ease-in-out infinite',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
