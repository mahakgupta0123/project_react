import React from 'react'

const ThemeContext = React.createContext({
    themeMode:"light",
    darkMode: ()=>{},
    lightMode: ()=>{},
})

export default ThemeContext
