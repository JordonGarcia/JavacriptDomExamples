const { resolve } = require('path');
const { defineConfig } = require('vite');

const P = ['A', 'B', 'C', 'D', 'E'];

module.exports = defineConfig({
	build: {
		outDir: 'build',
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html'),

				...Object.fromEntries(P.map((projects) => [projects, resolve(__dirname, `src/projects/project${P}.html`)])),
			},
		},
	},
});