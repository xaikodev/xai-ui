import styled from 'styled-components'

export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xlg' | 'full'

export type Roundness = 'clean' | 'pro' | 'rounded'

export type ButtonProps = {
  text: string
  color: string
  background: string
  size: Size
  round: Roundness
}

type StyledButtonProps = {
  color: string
  background: string
  size: Size
  round: Roundness
}

const convertSize = (s: Size): number => {
  switch (s) {
    case 'xs':
      return 10

    case 'sm':
      return 16

    case 'md':
      return 20

    case 'lg':
      return 28

    case 'xlg':
      return 36

    case 'full':
      return 100

    default:
      return 16
  }
}

const convertRoundness = (r: Roundness): number => {
  switch (r) {
    case 'clean':
      return 0
    case 'pro':
      return 4
    case 'rounded':
      return 100

    default:
      return 4
  }
}

const StyledButton = styled.button<StyledButtonProps>`
  border-radius: ${({ round }) => `${convertRoundness(round)}vmin`};
  color: ${({ color }) => color};
  background-color: ${({ background }) => background};
  width: ${({ size }) => `${convertSize(size) * 2.2}vmin`};
  height: ${({ size }) => `${convertSize(size) / 1.4}vmin`};
  font-size: ${({ size }) => `${convertSize(size) / 12}rem`};
`

export const Button = (props: ButtonProps) => {
  const {
    text = 'button',
    color = '#00ff00',
    background = `#1f201fcf`,
    size = 'sm',
    round = 'pro',
  } = props

  return (
    <StyledButton color={color} background={background} size={size} round={round}>
      {text}
    </StyledButton>
  )
}
