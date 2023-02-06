import './css/App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from './pages/Layout'
import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import ErrorPage from './pages/ErrorPage'

export default function App() {

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />} >
					<Route index element={<About />} />
          <Route path="projects" element={<Projects />} />
					<Route path="contact" element={<Contact />} />
					<Route path="*" element={<ErrorPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}