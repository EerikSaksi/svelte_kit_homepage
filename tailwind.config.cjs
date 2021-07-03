const config = {
	mode: "jit",
	purge: [
		"./src/**/*.{html,js,svelte,ts}",
	],
	theme: {
		extend: {
          keyframes: {
             'ring-pulse': {
               '0%, 100%': { '--tw-ring-opacity': 1 },
               '50%': { '--tw-ring-opacity': 0.7 },
             }
          },
          animate: {
             'animate-ring-pulse': 'ring-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
          }
        },

	},
	plugins: [],
};

module.exports = config;
