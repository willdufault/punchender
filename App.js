import React from "react";
import { layout } from "./layout/Layout.js";
import { Model } from "./model/Model.js";
import { Boundary } from "./boundary/Boundary.js";
import { Controller } from "./controller/Controller.js";
function App()
{
	return (
		<main className="App" style={layout.App}>
			<header className="header" style={layout.header}>
				<p className="punchender-logo" style={layout.punchender_logo}>Punchender</p>

				{/* comment out either Register or the div to see what it will look like */}
				
				{/* <p>Register</p> */}
				<div className="header-user-wrapper" style={layout.header_user_wrapper}>
					<p>JS: USERNAME</p>
					<p className="header-vertical-divider" style={layout.header_vertical_divider}>|</p>
					<p>Log Out</p>
				</div>
			</header>
			<div className="header-line" style={layout.header_line}></div>

			{/* hide all but current role */}
			<div className="dashboard-wrapper" style={layout.dashboard_wrapper}>
				<div className="admin-dashboard" style={layout.admin_dashboard}>
					<button className="reap-projects-button" style={layout.reap_projects_button}>Reap Projects</button>
				</div>
				<div className="developer-dashboard" style={layout.developer_dashboard}>
					DEVELOPER ONLY STUFF GOES HERE
				</div>
				<div className="supporter-dashboard" style={layout.supporter_dashboard}>
					SUPPORTER ONLY STUFF GOES HERE
				</div>
			</div>
			<div className="search-projects-wrapper" style={layout.search_projects_wrapper}>
				<input className="search-projects-bar" type="text" placeholder="Search Projects..." style={layout.search_projects_bar}></input>
				<div className="projects-list-wrapper" style={layout.projects_list_wrapper}>infinite scroll projects go here</div>
			</div>
		</main>
	);
}

export default App;
