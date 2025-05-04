import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // docker 上でホットリロードが効かないのでポーリングする
  server: {
    watch: {
      usePolling: true,
      interval: 1000
    }
  }
})
