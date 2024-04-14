import React from "react"
import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { ThemeProvider } from "styled-components"

import GlobalStyle from "./styles/globalStyles"
import { darkTheme, lightTheme } from "./styles/theme"
import { useTheme } from "./styles/ThemeContext"
import Routing from "./Routing"

// import logo from './logo.svg';
import "./App.css"

const App = () => {
	const { theme } = useTheme()
	return (
		<ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
			<GlobalStyle />
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<Routing />
			</LocalizationProvider>
		</ThemeProvider>
	)
}

export default App
