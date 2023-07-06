import react from '@vitejs/plugin-react-swc';
import * as path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
	resolve: {
		alias: {
			'@': path.join(__dirname, 'src/'),
			'@app': path.join(__dirname, 'src/app/'),
			'@assets': path.join(__dirname, 'src/assets/'),
			'@components': path.join(__dirname, 'src/components/'),
			'@lib': path.join(__dirname, 'src/lib/'),
			'@styles': path.join(__dirname, 'src/styles/'),
			'@types': path.join(__dirname, 'src/types/'),
		},
	},
	plugins: [react()],
	server: {
		watch: {
			usePolling: true,
		},
		host: true,
		strictPort: true,
		port: 8080,
	},
}));
