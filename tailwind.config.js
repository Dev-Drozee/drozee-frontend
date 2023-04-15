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
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/layout/**/*.{js,ts,jsx,tsx}',
		'./src/sections/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}'
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
				'border-light': withOpacity('--clr-border-light'),
				'muted-primary': withOpacity('--clr-text-muted-primary'),
				'dashboard-light': withOpacity('--clr-dashboard-light')
			},
			textColor: {
				primary: withOpacity('--clr-text-primary'),
				secondary: withOpacity('--clr-text-secondary'),
				'muted-primary': withOpacity('--clr-text-muted-primary')
			},
			fontFamily: {
				sans: ['Poppins', ...defaultTheme.fontFamily.sans],
				serif: ['DM Serif Display', ...defaultTheme.fontFamily.serif]
			},
			transitionProperty: {
				right: 'right'
			},
			gridTemplateColumns: {
				'dashboard-layout': '210px auto 384px'
			}
		}
	},
	plugins: [
		'tailwindcss',
		'postcss-preset-env',
		require('prettier-plugin-tailwindcss')
	]
};
