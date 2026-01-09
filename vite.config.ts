import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: true, // Permite acceso desde la red local
    port: 5173,
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: './index.html',
        form: './form.html',
        avisoLegal: './aviso-legal.html',
        politicaPrivacidad: './politica-de-privacidad.html',
        terminosCondiciones: './terminos-y-condiciones.html',
      },
    },
  },
});
