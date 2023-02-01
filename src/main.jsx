import React from 'react'
import ReactDOM from 'react-dom/client'
import { Normalize } from 'styled-normalize'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Normalize />
    <App />
  </React.StrictMode>,
)
