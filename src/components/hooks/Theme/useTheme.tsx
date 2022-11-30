import { atom, useAtom } from 'jotai'

export type Color = 'light' | 'dark'
export type UseTheme = () => [Color, () => void]

const ThemeAtom = atom<Color>('dark')
const Theme = atom(
  (get) => get(ThemeAtom),
  (get, set) => {
    const currentTheme = get(ThemeAtom)
    currentTheme === 'dark' ? set(ThemeAtom, 'light') : set(ThemeAtom, 'dark')
  },
)
export const useTheme: UseTheme = () => useAtom(Theme)
