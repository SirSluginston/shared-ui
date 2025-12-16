import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// This is the modern way to handle paths in Vite/ESM
const __dirname = path.resolve();

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'SharedUI',
      fileName: 'shared-ui',
      formats: ['es', 'umd'],
    },
    rollupOptions: {
      // This is the magic line that stops the index.html error
      input: path.resolve(__dirname, 'src/index.ts'), 
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});