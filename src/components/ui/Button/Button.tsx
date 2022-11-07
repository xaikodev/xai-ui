import styled from 'styled-components'

export type ButtonProps = {
  text: string
}

export const Button = (props: ButtonProps) => {
  const { text } = props
  return <StyledButton>{text}</StyledButton>
}

const StyledButton = styled.button`
  color: #ffffff;
  border-radius: 5px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
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
