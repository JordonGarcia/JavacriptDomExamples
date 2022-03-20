const { resolve } = require('path');
const { defineConfig } = require('vite');

module.exports = defineConfig({
	build: {
		outDir: 'build',
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html'),
				projectA: resolve(__dirname, 'src/projects/projectA.html'),
				projectB: resolve(__dirname, 'src/projects/projectB.html'),
				projectC: resolve(__dirname, 'src/projects/projectC.html'),
				projectD: resolve(__dirname, 'src/projects/projectD.html'),
				projectE: resolve(__dirname, 'src/projects/projectE.html'),
			},
		},
	},
});
