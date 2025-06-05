import { RouterProvider } from 'react-router-dom'
import './global.css'
import { router } from './pages/routes'
import { Toaster } from 'sonner'
import { ThemeProvider } from "@/components/theme/theme-provider"
import { HelmetProvider, Helmet } from 'react-helmet-async'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './lib/react-query'

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider storageKey="pizza-shop-theme" defaultTheme='dark'>
        <Helmet titleTemplate='%s | pizza.shop' />
        <Toaster richColors closeButton />
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </ThemeProvider>
    </HelmetProvider>
  )
}