import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import AppLayout from "./layouts/AppLayout"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import ProjectShow from "./pages/ProjectShow"

const Routing = () => {
	return (
		<Router>
			<Routes>
				<Route element={<AppLayout />}>
					<Route path="/" element={<Home />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/projects/:projectId" element={<ProjectShow />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
				</Route>
			</Routes>
		</Router>
	)
}

export default Routing
