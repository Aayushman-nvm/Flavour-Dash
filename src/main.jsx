import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import GlobalStates from './context/index'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <GlobalStates>
        <App />
      </GlobalStates>
    </StrictMode>
  </BrowserRouter>
)