import laravel from 'laravel-vite-plugin'
import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ command, mode }) => {
    const env = loadEnv(mode, process.cwd(), '')
    return {
        plugins: [
            laravel({
                // refresh: true,
                input: [
                    'resources/js/site.js',
                    // Vanilla CSS from =JFG.
                    'public/css/style.css',
                    // 'public/css/something-else.css',
                    // JS
                    // 'public/js/something-else.js',
                ]
            })
        ],
        server: {
            open: env.APP_URL
        }
    }
});
