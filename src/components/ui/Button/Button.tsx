export type ButtonProps = {
  text: string
}

export const Button = (props: ButtonProps) => {
  const { text } = props
  return <button>{text}</button>
}
