// import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default ({
	plugins: [svelte()],
	// build: {
	// 	outDir: 'dist',
	// 	assetsDir: 'build',
	// 	rollupOptions: {
	// 		output: {
	// 			entryFileNames: 'build/bundle.js',
	// 			assetFileNames: 'build/bundle.css'
	// 		}
	// 	}
	// },
	server: {
		port: 5000
  }
})