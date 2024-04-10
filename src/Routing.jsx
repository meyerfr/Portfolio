import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Home from "./features/home/Home"
import AppLayout from "./layouts/AppLayout"

const Routing = () => {
	return (
		<Router>
			<Routes>
				<Route element={<AppLayout />}>
					<Route path="/" element={<Home />} />
				</Route>
			</Routes>
		</Router>
	)
}

export default Routing
