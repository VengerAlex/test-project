import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import MainProvider from '@components/Providers'
import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
  .render(<MainProvider><App /></MainProvider>)
