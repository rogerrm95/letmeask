import { ReactElement, createContext, useEffect, useState } from 'react'
import LightMode from '../styles/themes/light'
import DarkMode from '../styles/themes/dark'

type ThemeContextData = {
    themeMode: string,
    theme: {},
    toggleThemes: () => void
}

type ThemeContextProviderProps = {
    children: ReactElement,
}

export const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData)

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {

    const [theme, setTheme] = useState(LightMode)
    const [themeMode, setThemeMode] = useState<string>(() => {
        const themeInLocalStorage = localStorage.getItem('@letmeask-themes')

        if (themeInLocalStorage) {
            return themeInLocalStorage;
        }

        return 'light'
    })

    useEffect(() => {
        const themeInLocalStorage = localStorage.getItem('@letmeask-themes')

        if (themeInLocalStorage) {
            setThemeMode(themeMode)
            setTheme(themeInLocalStorage === 'light' ? LightMode : DarkMode)
        } else {
            localStorage.setItem('@letmeask-themes', themeMode)
            setTheme(themeInLocalStorage === 'light' ? LightMode : DarkMode)
        }
    }, [themeMode])

    function toggleThemes() {
        if (themeMode === 'light') {
            setThemeMode('dark')
            setTheme(DarkMode)
            localStorage.setItem('@letmeask-themes', 'dark')
        }
        else {
            setThemeMode('light')
            setTheme(LightMode)
            localStorage.setItem('@letmeask-themes', 'light')
        }
    }

    console.log(theme, themeMode)

    return (
        <ThemeContext.Provider value={{ theme, themeMode, toggleThemes }}>
            {children}
        </ThemeContext.Provider>
    )
}
