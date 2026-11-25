import vituum from 'vituum';
import pug from '@vituum/vite-plugin-pug';
import path from 'path';

export default {
  base: '/landing-keepsake-vite/',
  plugins: [
    vituum({
      imports: {
        filenamePattern: {
          '+.css': [],
          '+.scss': [],
        },
      },
    }),
    pug({ root: './src' }),
    {
      name: 'rename-pug-html',
      enforce: 'post',
      generateBundle(_, bundle) {
        if (bundle['index.pug.html']) {
          bundle['index.pug.html'].fileName = 'index.html';
        }
      },
    },
  ],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, 'src'),
      '@assets': path.resolve(import.meta.dirname, 'src/assets'),
    },
  },
};