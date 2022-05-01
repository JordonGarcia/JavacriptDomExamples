module.exports = {
	content: ['./index.html', './src/projects/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				dosis: ['Dosis'],
			},
			screens: {
				tablet: '640px',
				// => @media (min-width: 640px) { ... }

				laptop: '1024px',
				// => @media (min-width: 1024px) { ... }

				desktop: '1280px',
				// => @media (min-width: 1280px) { ... }
			},
		},
	},
	plugins: [],
};