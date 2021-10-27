import { createContext, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import color from 'color'

/**
 * AppTheme Context
 * It's beign used to procedually generate theme OK looking theme colors from a single color
 * more documentation coming ....
 */

const DefaultTheme = {
  colors: {
    headerBg: 'transparent',
    headerColor: '#2b2b2b',
    headerShadowColor: '#818181',
    themeColor: '#fc7a6a',
    profileAvaterBorder: 'black',
    profileBg: '#fc7a6a',
    profileColor: 'black',
    profileColorAlt: 'white',
  },
  breakpoints: {
    large: '750px',
  },
}

const AppThemeContext = createContext(DefaultTheme)

export function AppThemeProvider({ children }) {
  const [themeColor, setThemeColor] = useState('#fc7a6a')

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      themeColor,
      headerColor: color(themeColor).isDark() ? '#e0e0e0' : '#484848',
      headerShadowColor: color(themeColor).isDark() ? '#616161' : '#a8a8a8',
      profileAvaterBorder: color(themeColor).isDark()
        ? '#ffffff86'
        : '#00000086',
      profileColor: color(themeColor).isDark() ? '#eeeeee' : '#1a1a1a',
      profileColorAlt: color(themeColor).isDark() ? '#1a1a1a' : '#eeeeee',
      profileBg: `linear-gradient(to bottom right, ${color(themeColor)
        .alpha(0.76)
        .toString()}, ${
        color(themeColor).isLight()
          ? color(themeColor).darken(0.35).alpha(0.76).toString()
          : color(themeColor).lighten(0.35).alpha(0.76).toString()
      })`,
    },
  }

  return (
    <AppThemeContext.Provider
      value={{ appTheme: themeColor, setTheme: setThemeColor }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </AppThemeContext.Provider>
  )
}
