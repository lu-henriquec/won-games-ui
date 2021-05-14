import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import Auth from '.'

describe('<Auth />', () => {
  it('should render the heading', () => {
    renderWithTheme(
      <Auth title="Sign In">
        <input type="text" />
      </Auth>
    )

    // verifiquem se tem 2 logos
    expect(screen.getAllByRole('img', { name: /won games/i })).toHaveLength(2)

    // verifica se tem o heading principal do banner
    expect(
      screen.getByRole('heading', {
        name: /Seus jogos favoritos em um só lugar/i
      })
    ).toBeInTheDocument()

    // verifica se tem o subtitle
    expect(
      screen.getByRole('heading', {
        name: /A WON é a melhor e mais completa plataforma de games./i
      })
    ).toBeInTheDocument()

    // verifica se tem o title do content
    expect(
      screen.getByRole('heading', { name: /Sign In/i })
    ).toBeInTheDocument()

    // verifica se o children tá sendo renderizado
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })
})
