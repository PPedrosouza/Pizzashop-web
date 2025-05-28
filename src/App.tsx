import { RouterProvider } from 'react-router-dom'
import './global.css'
import { router } from './pages/routes'
import { Toaster } from 'sonner'

import { HelmetProvider, Helmet } from 'react-helmet-async'

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate='%s | pizza.shop' />
      <Toaster richColors closeButton  />
      <RouterProvider router={router} />
    </HelmetProvider>
  )
}