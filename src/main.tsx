import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import { enableMWS } from './api/mocks'

enableMWS().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )

})