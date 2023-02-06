import { Outlet, NavLink } from "react-router-dom";
import avatar from "../img/avatar.png";
import { useEffect, useState } from "react";

function Layout() {

	const [theme, setTheme] = useState('light');
	const toggleTheme = () => {
		if (theme === 'light') {
			setTheme('dark');
		} else {
			setTheme('light');
		}
	};
	useEffect(() => {
		document.body.className = theme;
	}, [theme]);

	return (
		<>
			<div className="toggle-wrapper">
				<div className="sun" />
				<div className="switch-wrapper">
					<input type="checkbox" id="theme-toggle" />
					<label for="theme-toggle" id="switch" onClick={toggleTheme}></label>
				</div>
				<div className="moon" />
			</div>
			<div className="flex-row">
				<div>
					<img src={avatar} alt="Avatar" />
					<div className="sidebar-text">
						<div className="greetings">
							<p className="font-medium">Hi 👋, I'm</p>
							<p className="font-large">Jeff Li</p>
						</div>
						<div className="flex-column links">
							<NavLink to="/" className={({ isActive }) => isActive ? "selected" : undefined }>About</NavLink>
							<NavLink to="/projects" className={({ isActive }) => isActive ? "selected" : undefined }>Projects</NavLink>
							<NavLink to="/contact" className={({ isActive }) => isActive ? "selected" : undefined }>Contact</NavLink>
						</div>
					</div>
				</div>
				<div className="main">
					<Outlet />
				</div>
			</div>
		</>
	)
}

export default Layout;
