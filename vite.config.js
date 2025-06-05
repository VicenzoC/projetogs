import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import WindiCSS from 'vite-plugin-windicss'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    WindiCSS()
  ],
})