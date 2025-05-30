import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  server:{allowedHosts:["5173-gunakamaraj-cms-project-7rva265zev.app.codeanywhere.com"]},
  plugins: [react(),tailwindcss()],
})
