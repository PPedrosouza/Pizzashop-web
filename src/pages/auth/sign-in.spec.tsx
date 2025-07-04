import { render } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { SignIn } from "./sign-in"
import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from "@/lib/react-query"
import { HelmetProvider, Helmet } from 'react-helmet-async'

describe('NavLink', () => {
    it('should set default email input value if email is present on search params', () => {
        const wrapper = render(<SignIn />, {
            wrapper: ({ children }) => (
                <HelmetProvider>
                    <MemoryRouter initialEntries={['/sign-in?email=johndoe@gmail.com']}>
                        <QueryClientProvider client={queryClient}>
                            {children}
                        </QueryClientProvider>
                    </MemoryRouter>
                </HelmetProvider>
            )
        })

        const emailInput = wrapper.getByLabelText('Seu e-mail') as HTMLInputElement

        expect(emailInput.value).toEqual('johndoe@gmail.com')
    })
})