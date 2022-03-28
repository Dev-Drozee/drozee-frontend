const defaultTheme = require('tailwindcss/defaultTheme');

const withOpacity = (colorVariable) => {
	return ({ opacityValue }) => {
		if (opacityValue !== undefined) {
			return `rgba(var(${colorVariable}), ${opacityValue})`;
		}
		return `rgb(var(${colorVariable}))`;
	};
};

module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./sections/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		extend: {
			colors: {
				primary: withOpacity('--clr-primary'),
				'primary-light': withOpacity('--clr-primary-light'),
				'primary-dark': withOpacity('--clr-primary-dark'),
				secondary: withOpacity('--clr-secondary'),
				'support-1': withOpacity('--clr-support-1'),
				'support-2': withOpacity('--clr-support-2'),
				'support-3': withOpacity('--clr-support-3'),
				'border-light': withOpacity('--clr-border-light')
			},
			textColor: {
				primary: withOpacity('--clr-text-primary'),
				secondary: withOpacity('--clr-text-secondary')
			},
			fontFamily: {
				sans: ['Poppins', ...defaultTheme.fontFamily.sans],
				serif: ['DM Serif Display', ...defaultTheme.fontFamily.serif]
			},
			transitionProperty: {
				right: 'right'
			}
		}
	},
	plugins: []
};
