module.exports = {
	content: [
		"./index.html",
		"./src/**/*.{vue,js,ts,jsx,tsx}",
	  ],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {}
	},
	variants: {
		extend: {},
		fontFamily: {
			sans: ['Inter', 'ui-sans-serif', 'system-ui']
		}
	},
	plugins: []
};
