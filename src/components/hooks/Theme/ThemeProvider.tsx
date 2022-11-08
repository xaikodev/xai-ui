import { createContext, FC, ReactNode, useState } from 'react'

export type ThemeProviderProps = {
  children: ReactNode
}

export type Color = 'light' | 'dark'

export type ThemeContextType = {
  color: Color
  toggle: () => void
}

export const ThemeContext = createContext<Partial<ThemeContextType>>({ color: 'dark' })

export const ThemeHook = () => {
  const [color, setColor] = useState<Color>('light')

  const toggle = () => {
    setColor((prevColor) => (prevColor === 'light' ? 'dark' : 'light'))
  }

  return { color, toggle }
}
export const ThemeProvider: FC<ThemeProviderProps> = (props: ThemeProviderProps) => {
  const value = ThemeHook()
  return <ThemeContext.Provider value={value}>{props.children}</ThemeContext.Provider>
}
