import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameInfo from '.'

const props = {
  title: 'My Game title',
  description: 'Game description',
  price: '210,00'
}

describe('<GameInfo />', () => {
  it('should render the gameinfo', () => {
    const { container } = renderWithTheme(<GameInfo {...props} />)

    // verificar heading(title)
    expect(
      screen.getByRole('heading', { name: /my game title/i })
    ).toBeInTheDocument()
    // verificar preco
    expect(screen.getByText(/\$210,00/)).toBeInTheDocument()
    // verificar description
    expect(screen.getByText(/game description/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render buttons', () => {
    renderWithTheme(<GameInfo {...props} />)

    // verificar button add to cart
    expect(
      screen.getByRole('button', { name: /add to cart/i })
    ).toBeInTheDocument()
    // verificar button wishlist
    expect(
      screen.getByRole('button', { name: /wishlist/i })
    ).toBeInTheDocument()
  })
})
