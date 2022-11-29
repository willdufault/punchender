import React from "react";
import { layout } from "./layout/Layout.js";
import { Model } from "./model/Model.js";
import { Boundary } from "./boundary/Boundary.js";
import { Controller } from "./controller/Controller.js";
function App()
{
	let model = new Model();
	return (
		<main className="App" style={layout.App}>
			<header className="header" style={layout.header}>
				<p className="punchender-logo" style={layout.punchender_logo}>Punchender</p>

				{/* comment out either Register or the div to see what it will look like */}
				
				<p>Register</p>
				{/* <div className="header-user-wrapper" style={layout.header_user_wrapper}>
					<p>JS: USERNAME</p>
					<p className="header-vertical-divider" style={layout.header_vertical_divider}>|</p>
					<p>Log Out</p>
				</div> */}
			</header>
			<div className="header-line" style={layout.header_line}></div>

			{/* hide all but current role */}
			<div className="dashboard-wrapper" style={layout.dashboard_wrapper}>
				{/* <div className="admin-dashboard" style={layout.admin_dashboard}>
					<p className="dashboard-title" style={layout.dashboard_title}>Admin Dashboard</p>
					<button className="reap-projects-button" style={layout.reap_projects_button}>Reap Projects</button>
				</div> */}
				<div className="developer-dashboard" style={layout.developer_dashboard}>
					DEVELOPER ONLY STUFF GOES HERE
				</div>
				<div className="supporter-dashboard" style={layout.supporter_dashboard}>
					SUPPORTER ONLY STUFF GOES HERE
				</div>
			</div>

			{/* just a div to store all of our popups, not really sure where to store these */}
			<div className="popups">
				<div className="register-popup" style={layout.register_popup}>
					<p>Register New User</p>
					<div>
						<label>Select a role:&nbsp;</label>
						<select>
							<option value="supporter">Supporter</option>
							<option value="designer">Designer</option>
						</select>
					</div>
					<div>
						<label>Email:&nbsp;</label>
						<input type="text" placeholder="Your email..."></input>
					</div>
					<div>
						<label>Password:&nbsp;</label>
						<input type="text" placeholder="Your password..."></input>
					</div>
					<button>Register</button>
				</div>
				<div className="create-project-popup" style={layout.create_project_popup}>
					<p>Create New Project</p>
					<div>
						<label>Name:&nbsp;</label>
						<input type="text" placeholder="Project name..."></input>
					</div>
					<div>
						<label>Type:&nbsp;</label>
						<input type="text" placeholder="Project type..."></input>
					</div>
					<div>
						<label>Story:&nbsp;</label>
						<textarea rows="3" cols="40" maxlength="240" placeholder="Project story..." 
						style={{resize: "none"}}></textarea>
					</div>
					<div>
						<label>Goal ($):&nbsp;</label>
						<input type="text" placeholder="ex: 100.00"></input>
					</div>
					<div>
						<label>Deadline:&nbsp;</label>
						<input type="text" placeholder="MMDDYYYY"></input>
					</div>
					<button>Create</button>
				</div>
				<div className="create-pledge-popup" style={layout.create_pledge_popup}>
					<p>Create New Pledge</p>
					<div>
						<label>Name:&nbsp;</label>
						<input type="text" placeholder="Pledge name..."></input>
					</div>
					<div>
						<label>Amount:&nbsp;</label>
						<input type="text" placeholder="ex: $10.00"></input>
					</div>
					<div>
						<label>Reward (Optional):&nbsp;</label>
						<input type="text" placeholder="ex: &quot;3 stickers&quot;"></input>
					</div>
					<button>Create</button>
				</div>
				<div className="view-project-popup" style={layout.view_project_popup}>
					<p>PROJECT NAME</p>
					<div>
						<label>Story:&nbsp;</label>
						<p>STORY STORY STORY STORY STORY STORY STORY STORY! STORY STORY STORY STORY 
						STORY STORY STORY STORY STORY STORY! STORY! STORY STORY STORY STORY STORY 
						STORY? STORY STORY STORY STORY STORY STORY STORY STORY STORY STORY STORY!!1!
						</p>
					</div>	
					<div style={{display: "flex", width: "100%"}}>
						<div>
							<label>Type:&nbsp;</label>
							<p>TYPE TYPE TYPE</p>
						</div>
						<div style={{textAlign: "right", width: "100%"}}>
							<label>Pledges:&nbsp;</label>
							<ul style={{listStyle: "none"}}>
								<li><button>O</button> I am a pledge for money</li>
								<li><button>O</button> I am a pledge for money</li>
								<li><button>O</button> I am a pledge for money</li>
								<li><button>O</button> I am a pledge for money</li>
							</ul>
							<button>Add Pledge</button>
						</div>
					</div>
					<div>
						<label>Goal:&nbsp;</label>
						<p>$AMOUNT / $GOAL</p>
						<p>Deadline: MMDDYYYY</p>
					</div>
					<button>Delete Project</button>
					<button>Direct Support</button>
				</div>
				<div className="add-funds-popup" style={layout.add_funds_popup}>
					<p>Add Funds</p>
					<div>
						<label>Amount to add ($):&nbsp;</label>
						<input type="text" placeholder="ex: $100.00"></input>
					</div>
					<button>Add</button>
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
