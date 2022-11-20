import react from '@vitejs/plugin-react';
import path from 'node:path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
    plugins: [
        react(),
        dts({
            insertTypesEntry: true,
            include: ['lib', 'src/ui-kit/'],
        }),
    ],
    build: {
        lib: {
            entry: path.resolve(__dirname, 'lib/index.ts'),
            name: 'DaroUIKit',
            formats: ['es', 'umd'],
            fileName: (format) => `oaky-ui-kit.${format}.js`,
        },
        rollupOptions: {
            external: ['react', 'react-dom', 'styled-components'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                    'styled-components': 'styled'
                },
            },
        },
    },
});
