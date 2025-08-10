import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/my-resume': '/',
  server: {
    host: true
  },
  plugins: [tailwindcss(), vue()],
}))
