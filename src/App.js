import React from "react"
import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { ThemeProvider } from "styled-components"

import GlobalStyle from "./styles/globalStyles"
import theme from "./styles/theme"
import Routing from "./Routing"

// import logo from './logo.svg';
import "./App.css"

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<Routing />
			</LocalizationProvider>
		</ThemeProvider>
	)
}

export default App
