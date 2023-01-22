import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://AgredaLuis.github.io/React-rickAndMorty-api/",
  plugins: [react()]
})
