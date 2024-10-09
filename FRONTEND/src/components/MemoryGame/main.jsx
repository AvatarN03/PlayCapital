import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Memory_Game from './Memory_Game'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Memory_Game />
  </StrictMode>,
)
