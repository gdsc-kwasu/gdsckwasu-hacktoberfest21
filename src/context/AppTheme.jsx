import { createContext, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import color from 'color'

/**
 * AppTheme Context
 * the purpose of this context is to provide an easy way of globally setting the app theme from any child component
 *
 * It's being used in profile to set the theme of the app when a profile slide is active
 * this might not come cheap though but so far no noticable performace hit
 */

// default theme config, not sure if this is neccesary to set other than null
// keeping here for documentation and ssr reason
const DefaultTheme = {
  colors: {
    headerBg: 'transparent',
    headerColor: '#2b2b2b',
    progressbarColor: '#6a79fc',
    headerShadowColor: '#818181',
    themeColor: '#fc7a6a',
    profileAvatarBorder: 'black',
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
  const [themeColor, setThemeColor] = useState('#fc7a6a') // global app theme state

  // this is main theme colors, generated from the app theme color
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      // theme color
      themeColor,
      // a light/dark color for the header color depending on how dark the global theme color is
      headerColor: color(themeColor).isDark() ? '#e0e0e0' : '#484848',
      // a light/dark color for the header text shadow color depending on how dark the global theme color is
      headerShadowColor: color(themeColor).isDark() ? '#616161' : '#a8a8a8',
      // the inverse/negative/opposite color of the global theme color used as the progessbar color
      progressbarColor: color(themeColor).negate().toString(),
      // a light/dark color for the profile avatar border color depending on how dark the global theme color is
      profileAvatarBorder: color(themeColor).isDark()
        ? '#ffffff86'
        : '#00000086',
      // a light/dark color for the profile color depending on how dark the global theme color is
      profileColor: color(themeColor).isDark() ? '#eeeeee' : '#1a1a1a',
      // a light/dark color for the profile color (alternative) depending on how dark the global theme color is
      profileColorAlt: color(themeColor).isDark() ? '#1a1a1a' : '#eeeeee',
      // a slightly opaque gradient color for profile background color generated from global theme color
      profileBg: `linear-gradient(to bottom right, ${color(themeColor)
        .alpha(0.76)
        .toString()}, ${
        color(themeColor).isLight()
          ? color(themeColor).darken(0.25).alpha(0.76).toString()
          : color(themeColor).lighten(0.25).alpha(0.76).toString()
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

export { AppThemeContext }
