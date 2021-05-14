import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import FormSignIn from '.'

describe('<FormSignIn />', () => {
  it('should render the form', () => {
    const { container } = renderWithTheme(<FormSignIn />)

    //verifica input email
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument()
    //verifica input password
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument()
    //verifica botao
    expect(
      screen.getByRole('button', { name: /sign in now/i })
    ).toBeInTheDocument()

    expect(container.parentElement).toMatchSnapshot()
  })

  it('should render the forgot password link', () => {
    renderWithTheme(<FormSignIn />)

    //verifica link de forgot
    expect(
      screen.getByRole('link', { name: /forgot your password\?/i })
    ).toBeInTheDocument()
  })

  it('should render text to sign up if already have an account', () => {
    renderWithTheme(<FormSignIn />)

    //verifica link para criar conta
    expect(screen.getByRole('link', { name: /sign up/i })).toBeInTheDocument()
    //verifica texto
    expect(screen.getByText(/don’t have an account\?/i)).toBeInTheDocument()
  })
})
