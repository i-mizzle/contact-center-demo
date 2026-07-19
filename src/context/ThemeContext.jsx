import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'

const THEME_STORAGE_KEY = 'app-theme'
const SYSTEM_THEME = 'system'
const LIGHT_THEME = 'light'
const DARK_THEME = 'dark'

const ThemeContext = createContext(null)

const getInitialTheme = () => {
  if (typeof window === 'undefined') {
    return SYSTEM_THEME
  }

  const savedTheme = localStorage.getItem(THEME_STORAGE_KEY)
  if (savedTheme === LIGHT_THEME || savedTheme === DARK_THEME || savedTheme === SYSTEM_THEME) {
    return savedTheme
  }

  return SYSTEM_THEME
}

const getSystemTheme = () => (
  window.matchMedia('(prefers-color-scheme: dark)').matches ? DARK_THEME : LIGHT_THEME
)

const resolveTheme = (themePreference) => {
  if (themePreference === SYSTEM_THEME) {
    return getSystemTheme()
  }

  return themePreference
}

const applyThemeToDom = (themePreference) => {
  const root = document.documentElement
  root.classList.toggle('dark', resolveTheme(themePreference) === DARK_THEME)
}

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getInitialTheme)
  const resolvedTheme = theme === SYSTEM_THEME ? getSystemTheme() : theme

  useEffect(() => {
    applyThemeToDom(theme)
    localStorage.setItem(THEME_STORAGE_KEY, theme)
  }, [theme])

  useEffect(() => {
    if (theme !== SYSTEM_THEME) {
      return undefined
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = () => {
      applyThemeToDom(SYSTEM_THEME)
    }

    mediaQuery.addEventListener('change', handleChange)

    return () => {
      mediaQuery.removeEventListener('change', handleChange)
    }
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme((previousTheme) => {
      const currentResolvedTheme = previousTheme === SYSTEM_THEME ? getSystemTheme() : previousTheme

      return currentResolvedTheme === DARK_THEME ? LIGHT_THEME : DARK_THEME
    })
  }, [])

  const useSystemTheme = useCallback(() => {
    setTheme(SYSTEM_THEME)
  }, [])

  const value = useMemo(
    () => ({
      theme: resolvedTheme,
      themePreference: theme,
      isDarkMode: resolvedTheme === DARK_THEME,
      setTheme,
      toggleTheme,
      useSystemTheme,
    }),
    [theme, resolvedTheme, toggleTheme, useSystemTheme],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }

  return context
}
