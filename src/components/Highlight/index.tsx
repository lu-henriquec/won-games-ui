import Button from 'components/Button'
import * as S from './styles'

export type AlignmentProps = 'left' | 'right'

export type HighlightProps = {
  title: string
  subtitle: string
  backgroundImage: string
  buttonLabel: string
  buttonLink: string
  floatImage?: string
  alignment?: AlignmentProps
}

const Highlight = ({
  title,
  subtitle,
  backgroundImage,
  buttonLabel,
  buttonLink,
  floatImage,
  alignment = 'right'
}: HighlightProps) => (
  <S.Wrapper alignment={alignment} backgroundImage={backgroundImage}>
    {!!floatImage && <S.FloatImage alt={title} src={floatImage} />}
    <S.Content>
      <S.Title>{title}</S.Title>
      <S.SubTitle>{subtitle}</S.SubTitle>
      <Button as="a" href={buttonLink}>
        {buttonLabel}
      </Button>
    </S.Content>
  </S.Wrapper>
)

export default Highlight
