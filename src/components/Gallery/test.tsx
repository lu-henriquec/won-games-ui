import 'match-media-mock'
import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Gallery from '.'

import mockitens from './mock'

describe('<Gallery />', () => {
  it('should render thumbs as buttons', () => {
    renderWithTheme(<Gallery items={mockitens.slice(0, 2)} />)

    expect(
      screen.getByRole('button', { name: /Thumb - Gallery Image 1/i })
    ).toHaveAttribute('src', mockitens[0].src)
    expect(
      screen.getByRole('button', { name: /Thumb - Gallery Image 2/i })
    ).toHaveAttribute('src', mockitens[1].src)
  })

  it('should handle open modal', () => {
    renderWithTheme(<Gallery items={mockitens.slice(0, 2)} />)

    // selecionar o nosso modal
    const modal = screen.getByLabelText('modal')

    // verificar se o modal tá escondido
    expect(modal.getAttribute('aria-hidden')).toBe('true')
    expect(modal).toHaveStyle({ opacity: 0 })

    // clicar no botão/image verificar se o modal abriu
    fireEvent.click(
      screen.getByRole('button', { name: /Thumb - Gallery Image 1/i })
    )
    expect(modal.getAttribute('aria-hidden')).toBe('false')
    expect(modal).toHaveStyle({ opacity: 1 })
  })

  it('should handle close modal', () => {
    renderWithTheme(<Gallery items={mockitens.slice(0, 2)} />)

    // selecionar o nosso modal
    const modal = screen.getByLabelText('modal')

    // clicar no botão/image verificar se o modal abriu
    fireEvent.click(
      screen.getByRole('button', { name: /Thumb - Gallery Image 1/i })
    )

    // clicar no botão de fechar o modal e verificar se ele fechou
    fireEvent.click(screen.getByRole('button', { name: /close modal/i }))
    expect(modal.getAttribute('aria-hidden')).toBe('true')
    expect(modal).toHaveStyle({ opacity: 0 })
  })

  it('should handle close modal on key esc', () => {
    const { container } = renderWithTheme(
      <Gallery items={mockitens.slice(0, 2)} />
    )

    // selecionar o nosso modal
    const modal = screen.getByLabelText('modal')

    // clicar no botão/image verificar se o modal abriu
    fireEvent.click(
      screen.getByRole('button', { name: /Thumb - Gallery Image 1/i })
    )

    // clicar no botão de fechar o modal e verificar se ele fechou
    fireEvent.keyUp(container, { key: 'Escape' })
    expect(modal.getAttribute('aria-hidden')).toBe('true')
    expect(modal).toHaveStyle({ opacity: 0 })
  })

  it('should open modal with selected image', async () => {
    renderWithTheme(<Gallery items={mockitens.slice(0, 2)} />)

    // clicar no thumbnail
    fireEvent.click(
      screen.getByRole('button', { name: /Thumb - Gallery Image 2/i })
    )

    // espero que a imagem do clique esteja aberta
    const img = await screen.findByRole('img', { name: /Gallery Image 2/i })
    expect(img.parentElement?.parentElement).toHaveClass('slick-active')
  })
})
