'use client'

import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('dark')

    useEffect(() => {
        // Check localStorage for saved theme
        const savedTheme = localStorage.getItem('techodite-theme')
        if (savedTheme) {
            setTheme(savedTheme)
            document.documentElement.classList.toggle('light', savedTheme === 'light')
        } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
            setTheme('light')
            document.documentElement.classList.add('light')
        }
    }, [])

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark'
        setTheme(newTheme)
        localStorage.setItem('techodite-theme', newTheme)
        document.documentElement.classList.toggle('light', newTheme === 'light')
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext)