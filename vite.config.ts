import { defineConfig } from 'vite';

export default defineConfig({
  // Development server configuration
  server: {
    host: true, // Permite acceso desde la red local
    port: 5173,
    open: false, // No abrir automáticamente el navegador
  },

  // Build configuration
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false, // Desactivado para producción, activar si se necesita debugging
    minify: 'esbuild', // Usar esbuild para minificación (más rápido)
    rollupOptions: {
      input: {
        main: './index.html',
        form: './form.html',
        avisoLegal: './aviso-legal.html',
        politicaPrivacidad: './politica-de-privacidad.html',
        terminosCondiciones: './terminos-y-condiciones.html',
      },
      external: ['/_vercel/insights/script.js'],
    },
  },

  // Preview server configuration (para npm run preview)
  preview: {
    port: 4173,
    host: true,
  },
});
