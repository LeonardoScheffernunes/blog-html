import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const rootElement = document.body.firstElementChild

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
