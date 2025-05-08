import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Parent } from './components/parent'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Parent />
  </StrictMode>,
)
