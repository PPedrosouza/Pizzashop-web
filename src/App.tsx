import { RouterProvider } from 'react-router-dom'
import './global.css'
import { router } from './pages/routes'
import { Toaster } from 'sonner'
import { ThemeProvider } from "@/components/theme/theme-provider"
import { HelmetProvider, Helmet } from 'react-helmet-async'

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider storageKey="pizza-shop-theme" defaultTheme='dark'>
        <Helmet titleTemplate='%s | pizza.shop' />
        <Toaster richColors closeButton />
        <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
  )
}