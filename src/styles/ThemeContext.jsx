// src/ThemeContext.js
import React, { createContext, useContext, useState } from "react"

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState("light")

	const toggleTheme = () => {
		setTheme(curr => (curr === "light" ? "dark" : "light"))
	}

	return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext)
