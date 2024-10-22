import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,   // This makes Vite listen on all IP addresses (0.0.0.0)
    port: 3000,   // Use any port, like 3000
  },
});
