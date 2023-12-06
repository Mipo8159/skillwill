import { createContext, useContext, useMemo, useState } from "react"

export const themeOptions = {
    black: 'Current theme is Black',
    white: 'Current theme is White'
}

const ThemeContext = createContext(null)

const ThemeContextProvider = ({children}) => {
    const [dark, setDark] = useState(true)

    const contextValue = useMemo(() => ({
        theme: dark ? 'black' : 'white',
        toggleTheme: () => setDark((prev) => !prev)
    }))

    return <ThemeContext.Provider value={contextValue}>
        {children}
    </ThemeContext.Provider>
}

export const useThemeContext = () => {
    const contextValue = useContext(ThemeContext)
    if(!contextValue) throw new Error('Your component is not inside UserContextProvider')

    return contextValue
}

export default ThemeContextProvider