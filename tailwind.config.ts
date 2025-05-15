
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
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
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// New romantic theme colors
				"deep-blush": "var(--deep-blush)",
				"velvet-purple": "var(--velvet-purple)",
				"amber-gold": "var(--amber-gold)",
				"pearl-silver": "var(--pearl-silver)",
				"midnight-blue": "var(--midnight-blue)",
				"rich-burgundy": "var(--rich-burgundy)",
				"charcoal-black": "var(--charcoal-black)",
				"rose-petal": "var(--rose-petal)",
				"lavender-mist": "var(--lavender-mist)",
				"sky-blue": "var(--sky-blue)",
				"wisteria": "var(--wisteria)",
				"cream-parchment": "#FFF9E3"
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				serif: ['Cormorant Garamond', 'serif'],
				cursive: ['Dancing Script', 'cursive'],
				playfair: ['Playfair Display', 'serif'],
				parisienne: ['Parisienne', 'cursive']
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				'shimmer': {
					'0%': { backgroundPosition: '-200% 0' },
					'100%': { backgroundPosition: '200% 0' },
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				'pulse-glow': {
					'0%, 100%': { opacity: '0.6' },
					'50%': { opacity: '1' },
				},
				'pulse-slow': {
					'0%, 100%': { opacity: '0.8', textShadow: '0 0 5px rgba(212, 175, 55, 0.5)' },
					'50%': { opacity: '1', textShadow: '0 0 15px rgba(212, 175, 55, 0.8)' },
				},
				'twinkle': {
					'0%, 100%': { opacity: '0.3' },
					'50%': { opacity: '1' },
				},
				'rotate-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' },
				},
				'unfurl': {
					'0%': { transform: 'scale(0.9)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' },
				},
				'sparkle': {
					'0%': { transform: 'scale(0)', opacity: '0' },
					'50%': { transform: 'scale(1)', opacity: '1' },
					'100%': { transform: 'scale(0)', opacity: '0' },
				},
				'fall': {
					'0%': { transform: 'translateY(-10px) rotate(0deg)', opacity: '0' },
					'10%': { opacity: '1' },
					'100%': { transform: 'translateY(100vh) rotate(360deg)', opacity: '0' },
				},
				'ribbon-unfurl': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(0)' },
				},
				'ripple': {
					'0%': { transform: 'scale(0.95)', opacity: '1' },
					'50%': { opacity: '0.5' },
					'100%': { transform: 'scale(1.5)', opacity: '0' },
				},
				'card-flip': {
					'0%, 100%': { transform: 'rotateY(0deg)' },
					'50%': { transform: 'rotateY(180deg)' },
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.7s ease-out forwards',
				'shimmer': 'shimmer 3s infinite linear',
				'float': 'float 6s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
				'pulse-slow': 'pulse-slow 2.5s ease-in-out infinite',
				'twinkle': 'twinkle 1.5s ease-in-out infinite',
				'rotate-slow': 'rotate-slow 120s linear infinite',
				'unfurl': 'unfurl 1.2s ease-out forwards',
				'sparkle': 'sparkle 2s ease-in-out infinite',
				'fall': 'fall 10s linear forwards',
				'ribbon-unfurl': 'ribbon-unfurl 1.5s ease-out forwards',
				'ripple': 'ripple 2s ease-out infinite',
				'card-flip': 'card-flip 0.6s ease-out'
			},
			backgroundImage: {
				'starry-gradient': 'linear-gradient(to bottom right, var(--twilight-purple), var(--dawn-peach))',
				'gold-shimmer': 'linear-gradient(90deg, rgba(212,175,55,0.1) 0%, rgba(255,250,242,0.3) 50%, rgba(212,175,55,0.1) 100%)',
				'romantic-gradient': 'linear-gradient(to bottom, #432C51, #D93861, #800020)',
				'cream-parchment': 'url("data:image/svg+xml,%3Csvg width=\'100%25\' height=\'100%25\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cdefs%3E%3Cpattern id=\'smallGrid\' width=\'8\' height=\'8\' patternUnits=\'userSpaceOnUse\'%3E%3Cpath d=\'M 8 0 L 0 0 0 8\' fill=\'none\' stroke=\'%23D4AF3720\' stroke-width=\'0.5\'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=\'100%25\' height=\'100%25\' fill=\'url(%23smallGrid)\'/%3E%3C/svg%3E")',
				'lace-pattern': 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M25 50C25 25 75 25 75 50C75 75 25 75 25 50Z\' stroke=\'%23D4AF3750\' stroke-width=\'1.5\' fill=\'none\' /%3E%3C/svg%3E")'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
