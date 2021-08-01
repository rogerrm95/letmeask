import { ReactElement, createContext, useEffect, useState} from 'react'

type ThemeContextData = {
    themes: string,
    toggleThemes: () => void
}

type ThemeContextProviderProps = {
    children: ReactElement,
}

export const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData)

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {

    const [themes, setThemes] = useState<string>(() => {

        const themeSaved = localStorage.getItem('themes')
    
        if (themeSaved) {
          return themeSaved;
        }
    
        return 'light'
      })

    useEffect(() => {
        const themeSaved = localStorage.getItem('themes')

        if (themeSaved) {
            setThemes(themes)

        } else {
            localStorage.setItem('themes', themes)
        }
    }, [themes])

    function toggleThemes() {
        if (themes === 'light') {
            setThemes('dark')
            localStorage.setItem('themes', 'dark')
        }
        else {
            setThemes('light')
            localStorage.setItem('themes', 'light')
        }
    }

    return (
        <ThemeContext.Provider value={{ themes, toggleThemes }}>
            {children}
        </ThemeContext.Provider>
    )
}
