import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from './router'
import '@/utils/rem-layout.js'
import '@/styles/index.css'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
)
