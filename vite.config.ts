import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
	resolve: {
		alias: {
			'@': path.join(__dirname, 'src/'),
		},
	},
	define: {
		'process.env': { ...process.env, ...loadEnv(mode, process.cwd()) },
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
