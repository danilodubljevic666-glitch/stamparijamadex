import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',      // dozvoljava pristup sa ngrok URL
    port: 5173,
    cors: true,           // dozvoljava zahteve sa drugih hostova
    allowedHosts: [
      'unapposite-affectionately-silas.ngrok-free.dev'
    ]

  },
  base:"/stamparijamadex",
})
