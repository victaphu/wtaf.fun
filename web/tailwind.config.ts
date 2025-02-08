import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
    	extend: {
    		colors: {
    			main: 'var(--main)',
    			overlay: 'var(--overlay)',
    			bg: 'var(--bg)',
    			bw: 'var(--bw)',
    			blank: 'var(--blank)',
    			text: 'var(--text)',
    			mtext: 'var(--mtext)',
    			border: 'var(--border)',
    			ring: 'var(--ring)',
    			ringOffset: 'var(--ring-offset)',
    			secondaryBlack: '#212121'
    		},
    		borderRadius: {
    			base: '5px'
    		},
    		boxShadow: {
    			shadow: 'var(--shadow)'
    		},
    		translate: {
    			boxShadowX: '3px',
    			boxShadowY: '2px',
    			reverseBoxShadowX: '-3px',
    			reverseBoxShadowY: '-2px'
    		},
    		fontWeight: {
    			base: '500',
    			heading: '700'
    		},
    		keyframes: {
    			'accordion-down': {
    				from: {
    					height: '0'
    				},
    				to: {
    					height: 'var(--radix-accordion-content-height)'
    				}
    			},
    			'accordion-up': {
    				from: {
    					height: 'var(--radix-accordion-content-height)'
    				},
    				to: {
    					height: '0'
    				}
    			},
    			marquee: {
    				'0%': {
    					transform: 'translateX(0%)'
    				},
    				'100%': {
    					transform: 'translateX(-100%)'
    				}
    			},
    			marquee2: {
    				'0%': {
    					transform: 'translateX(100%)'
    				},
    				'100%': {
    					transform: 'translateX(0%)'
    				}
    			}
    		},
    		animation: {
    			'accordion-down': 'accordion-down 0.2s ease-out',
    			'accordion-up': 'accordion-up 0.2s ease-out',
    			marquee: 'marquee 5s linear infinite',
    			marquee2: 'marquee2 5s linear infinite'
    		}
    	}
    },
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
