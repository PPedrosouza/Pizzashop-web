import { render } from '@testing-library/react'
import { OrderStatus } from './order-status'

describe('Order Status', () => {
  it('should display the right text based on order status is pending', () => {
    const wrapper = render(<OrderStatus status="pending" />)

    wrapper.debug()

    const statusText = wrapper.getByText('Pendente')
    const badgElement = wrapper.getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(badgElement).toHaveClass('bg-slate-400')
  })
  it('should display the right text based on order status is canceled', () => {
    const wrapper = render(<OrderStatus status="canceled" />)

    wrapper.debug()

    const statusText = wrapper.getByText('Cancelado')
    const badgElement = wrapper.getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(badgElement).toHaveClass('bg-rose-500')
  })
  it('should display the right text based on order status is delivering', () => {
    const wrapper = render(<OrderStatus status="delivering" />)

    wrapper.debug()

    const statusText = wrapper.getByText('Em entrega')
    const badgElement = wrapper.getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(badgElement).toHaveClass('bg-amber-500')
  })
  it('should display the right text based on order status is processing', () => {
    const wrapper = render(<OrderStatus status="processing" />)

    wrapper.debug()

    const statusText = wrapper.getByText('Em preparo')
    const badgElement = wrapper.getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(badgElement).toHaveClass('bg-amber-500')
  })
  it('should display the right text based on order status is delivered', () => {
    const wrapper = render(<OrderStatus status="delivered" />)

    wrapper.debug()

    const statusText = wrapper.getByText('Entregue')
    const badgElement = wrapper.getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(badgElement).toHaveClass('bg-emerald-500')
  })
})