/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}', require('path').join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],
	theme: {
		extend: {
			gridTemplateColumns: {
				// Simple 16 column grid
				'13': 'repeat(13, minmax(0, 1fr))',
				'14': 'repeat(14, minmax(0, 1fr))',
				'15': 'repeat(15, minmax(0, 1fr))',
				'16': 'repeat(16, minmax(0, 1fr))',
				'17': 'repeat(17, minmax(0, 1fr))',
				'18': 'repeat(18, minmax(0, 1fr))',
				'19': 'repeat(19, minmax(0, 1fr))',
				'20': 'repeat(20, minmax(0, 1fr))',
			  }
		},
	},
	plugins: [require('@tailwindcss/forms'),require('@tailwindcss/typography'),...require('@skeletonlabs/skeleton/tailwind/skeleton.cjs')(),
		plugin(function ({ addUtilities }) {
			addUtilities({
			'.arrow-hide':{
				'&::-webkit-inner-spin-button':{
				'-webkit-appearance': 'none',
				'margin': 0
				},
				'&::-webkit-outer-spin-button':{
				'-webkit-appearance': 'none',
				'margin': 0
				},
			}
			}
			)
		})
	],
		
}
