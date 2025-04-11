import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' //importe do tailwindcss

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()], //adicionando o tailwindcss
})
