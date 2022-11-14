import { render, fireEvent, screen } from '@testing-library/react'

import Menu from '.'

describe('<Menu />', () => {
  it('should render menu', () => {
    render(<Menu />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/open shopping cart/i)).toBeInTheDocument()
  })
  it('should render menu', () => {
    render(<Menu />)
    //selecionar o MenuFull
    const fullMenuElement = screen.getByRole('navigation', { hidden: true })
    //verificar se o menu ta escondido
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })

    //clicar no botão de abrir o menu e verificar se ele abriu
    fireEvent.click(screen.getByLabelText(/open menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false')
    expect(fullMenuElement).toHaveStyle({ opacity: 1 })

    //clicar no botão de fechar o menu e verificar se ele fechou
    fireEvent.click(screen.getByLabelText(/close menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })

    //testando os MenuLinks
    expect(screen.getByText(/Colletions/i)).toBeInTheDocument()
    //expect(screen.getByText(/Men/i)).toBeInTheDocument()
    expect(screen.getByText(/Women/i)).toBeInTheDocument()
    expect(screen.getByText(/About/i)).toBeInTheDocument()
    expect(screen.getByText(/Contact/i)).toBeInTheDocument()
  })
})
