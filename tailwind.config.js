/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js}'],
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px',
		},
		colors: {
			black: '#000',
			white: '#FFF',
			dark: '#1A202C',
			blue: '#1fb6ff',
			purple: '#7e5bef',
			pink: '#ff49db',
			orange: '#ff7849',
			green: '#13ce66',
			yellow: '#ffc82c',
			'gray-dark': '#273444',
			gray: '#8492a6',
			'gray-light': '#d3dce6',
			'gray-primary': '#edf2f6',
			'green-500': '#48BB78',
			'red-500': '#F56565',
			'yellow-500': '#F6E05E',
		},
		fontFamily: {
			sans: ['Graphik', 'sans-serif'],
			serif: ['Merriweather', 'serif'],
		},
		extend: {
			spacing: {
				'8xl': '96rem',
				'9xl': '128rem',
			},
			borderRadius: {
				'4xl': '2rem',
			},
		},
	},
};
