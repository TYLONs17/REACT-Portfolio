import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    external: [
      '@babel/runtime/helpers/extends',
      '@babel/runtime/helpers/objectWithoutPropertiesLoose',
    ],
  },

})
