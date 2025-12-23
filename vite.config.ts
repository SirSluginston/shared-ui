import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import dts from 'vite-plugin-dts';
import path from 'path';

const __dirname = path.resolve();

export default defineConfig({
  plugins: [
    react(),
    // Type generation handled separately via build:types script
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'SharedUI',
      fileName: 'shared-ui',
      formats: ['es'],
    },
    rollupOptions: {
      input: path.resolve(__dirname, 'src/index.ts'),
      external: (id) => /^react($|\/)/.test(id), // Externalize react, react-dom, and react/jsx-runtime
      output: {
        preserveModules: true,
        preserveModulesRoot: 'src',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
