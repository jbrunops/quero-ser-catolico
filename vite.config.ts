import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { Plugin as importToCDN } from 'vite-plugin-cdn-import';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
    // Carregar algumas dependências via CDN em produção para otimizar performance
    mode === 'production' &&
    importToCDN({
      modules: [
        {
          name: 'react',
          var: 'React',
          path: `https://unpkg.com/react@18/umd/react.production.min.js`,
        },
        {
          name: 'react-dom',
          var: 'ReactDOM',
          path: `https://unpkg.com/react-dom@18/umd/react-dom.production.min.js`,
        },
      ],
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Minimizar o tamanho do bundle
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    // Dividir chunks para melhor cache
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
    // Gerar sourcemaps apenas em desenvolvimento
    sourcemap: mode !== 'production',
  },
}));
