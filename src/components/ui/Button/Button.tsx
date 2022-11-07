import styled from 'styled-components'

export type ButtonProps = {
  text: string
  color: string
  background: string

  size: 'xs' | 'sm' | 'm' | 'lg' | 'xlg' | 'full'
}

export const Button = (props: ButtonProps) => {
  const { text } = props
  return <StyledButton>{text}</StyledButton>
}

const StyledButton = styled.button`
  min-width: 200px;
  min-height: 40px;
  color: linear-gradient(24deg, rgb(2, 0, 36) 0%, rgb(9, 121, 10) 35%, rgb(0, 255, 79) 100%);
  border-radius: 8px;
  border: 1px solid
    linear-gradient(24deg, rgba(2, 0, 36, 1) 0%, rgba(9, 121, 10, 1) 35%, rgba(0, 255, 79, 1) 100%);
  font-size: 1rem;
  font-weight: 800;
  font-family: inherit;
  background-color: #46464693;
  cursor: pointer;
  transition: border-color 0.25s;
  &:hover {
    border-color: #646cff;
  }
  &:focus {
    outline: 4px auto -webkit-focus-ring-color;
  }
  &:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
`
