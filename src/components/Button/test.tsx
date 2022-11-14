import { render, screen } from '@testing-library/react'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'
import Button from '.'

describe('<Button />', () => {
  it('should render a fullWidth version', () => {
    render(<Button fullWidth>Add to Cart</Button>)
    expect(screen.getByRole('button', { name: /add to cart/i })).toHaveStyle({
      width: '100%'
    })
  })
  it('should render a icon version', () => {
    render(
      <Button icon={<AddShoppingCart data-testid="icon" />}>Add to Cart</Button>
    )
    expect(screen.getByText(/add to cart/i)).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })
})
