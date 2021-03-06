const { resolve } = require('path');
const { defineConfig } = require('vite');

const projects = ['projectA', 'projectB', 'projectC', 'projectD', 'projectE'];

module.exports = defineConfig({
	build: {
		outDir: 'build',
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html'),

				...Object.fromEntries(projects.map((project) => [project, resolve(__dirname, `src/projects/${project}.html`)])),
			},
		},
	},
});