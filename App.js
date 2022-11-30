import React from "react";
import { layout } from "./layout/Layout.js";
import { Model } from "./model/Model.js";
import { Boundary } from "./boundary/Boundary.js";
import { Controller } from "./controller/Controller.js";
function App()
{
	const [model, setModel] = React.useState(new Model());
	// TODO: whenever model is updated, have a list of functions that also need to be updated

	React.useEffect(() =>
	{
		console.log("redraw")
	}, [model]);

	const register_popup_ref = React.useRef(0);
	const login_popup_ref = React.useRef(0);
	const create_project_popup_ref = React.useRef(0);
	const create_pledge_popup_ref = React.useRef(0);
	const view_project_popup_ref = React.useRef(0);
	const view_pledge_popup_ref = React.useRef(0);
	const add_funds_popup_ref = React.useRef(0);
	const direct_support_popup_ref = React.useRef(0);
 
	const openPopupHandler = (r) =>
	{
		Boundary.openPopup(r.current);
	}

	const closePopupHandler = (r) =>
	{
		Boundary.closePopup(r.current);
	}

	const logInHandler = (user, pw) =>
	{
		Controller.logIn(model, user, pw);
		setModel(model.clone());
	}

	const logOutHandler = () =>
	{
		model.user = null;
		setModel(model.clone());
	}

	const samHandler = () =>
	{
		model.sam();
		setModel(model.clone());
	}
	const daveHandler = () =>
	{
		model.dave();
		setModel(model.clone());
	}
	const amyHandler = () =>
	{
		model.amy();
		setModel(model.clone());
	}

	const renderHeader = () =>
	{
		if(model.user)
		{
			return (
				<div className="header-user-wrapper" style={layout.header_user_wrapper}>
					<p>{model.user.username}</p>
					<p className="header-vertical-divider" style={layout.header_vertical_divider}>|</p>
					<p onClick={() => logOutHandler()} style={layout.pointer}>Log Out</p>
				</div>
			)
		}
		return (
			<div className="login-register-wrapper" style={layout.header_user_wrapper}>
				<p onClick={() => openPopupHandler(register_popup_ref)} style={layout.pointer}>Register</p>
				<p className="header-vertical-divider" style={layout.header_vertical_divider}>|</p>
				<p onClick={() => openPopupHandler(login_popup_ref)} style={layout.pointer}>Log In</p>
			</div>
		)
	}

	const renderDashboard = () =>
	{
		if(model.user)
		{
			const role = model.user.constructor.name;
			if(role === "Admin")
			{
				return (
					<div className="admin-dashboard" style={layout.admin_dashboard}>
						<p className="dashboard-title" style={layout.dashboard_title}>Admin Dashboard</p>
						<button className="reap-projects-button" style={layout.reap_projects_button}>Reap Projects</button>
					</div>
				)
			}
			else if(role === "Designer")
			{
				return (
					<div className="designer-dashboard" style={layout.designer_dashboard}>
						<p>Designer Dashboard</p>
						<button onClick={() => openPopupHandler(create_project_popup_ref)}>Create Project</button>
					</div>
				)
			}
			return (
				<div className="supporter-dashboard" style={layout.supporter_dashboard}>
					<p>Supporter Dashboard</p>
					<div style={{width: "90%"}}>
						<p>{model.user.username}'s Activity:</p>
						{renderSupporterActivity()}
					</div>
				</div>
			)
		}
	}

	const renderSupporterActivity = () =>
	{
		let ans = []
		let i = 0;
		let activity = sample_supporter_activity.map((act) =>
			<li key={i++}>
				<div className="supporter-activity-entry" style={layout.supporter_activity_entry}>
				<p>Supported {act.project.name} ${act.amount}</p>
				<p>Date: {act.date}</p>
				</div>
			</li>
		);
		return (
			<ul>{activity}</ul>
		);
	}

	const renderProjects = () =>
	{
		// TODO: figure out how to get this project to show the correct project info in popup when clicked
		let ans = []
		let i = 0;
		let projects = sample_projects.map((proj) =>
			<div key={i++} onClick={() => openPopupHandler(view_project_popup_ref)} 
			className="project-result" style={layout.search_result}>
				<p>Name: {proj.name}</p>
				<p>Type: {proj.type}</p>
				<p>Goal: ${proj.amount} / ${proj.goal}</p>
				<p>Deadline: {proj.deadline}</p>
			</div>
		);
		return projects;
	}

	const testKey = (e) =>
	{
		console.log(e)
	}

	const sample_supporter_activity = [
		{"amount": 50, "project": {"name": "pot hockets"}, "date": "01011990"},
		{"amount": 5660, "project": {"name": "react 2"}, "date": "12252005"},
		{"amount": 16460, "project": {"name": "ninja-se game"}, "date": "05172015"}
	];

	const sample_projects = [
		{"name": "pot hockets", "type": "food", "amount": 40.35, "goal": 100.00, "deadline": "02232011"},
		{"name": "react 2", "type": "software", "amount": 121.35, "goal": 200.00, "deadline": "02232011"},
		{"name": "pimp my razor", "type": "gamer", "amount": 256.51, "goal": 300.00, "deadline": "02232011"},
		{"name": "soccer hoop", "type": "sports", "amount": 10.65, "goal": 250.00, "deadline": "02232011"},
		{"name": "smiley panda bear plush", "type": "toy", "amount": 44.30, "goal": 536.94, "deadline": "02232011"},
		{"name": "python 4", "type": "programming language", "amount": 20.22, "goal": 90.03, "deadline": "02232011"},
	]

	return (
		<main className="App" style={layout.App}>
			<header className="header" style={layout.header}>
				<a className="punchender-logo" style={layout.punchender_logo} href="">Punchender</a>
				{renderHeader()}
			</header>
			<div className="header-line" style={layout.header_line}></div>
			<button onClick={() => samHandler()}>sup sam</button>
			<button onClick={() => daveHandler()}>des dave</button>
			<button onClick={() => amyHandler()}>admin amy</button>
			
			<div className="dashboard-wrapper" style={layout.dashboard_wrapper}>
				{renderDashboard()}
			</div>

			{/* just a div to store all of our popups, not really sure where to store these */}
			<div className="popups">
				<div ref={login_popup_ref} className="login-popup" style={layout.login_popup}>
				<div className="close-button" style={layout.close_button}>
					<button onClick={() => closePopupHandler(login_popup_ref)}>X</button>
				</div>
					<p>Log In</p>
					<div>
						<label>Username:&nbsp;</label>
						<input type="text" placeholder="Your username..."></input>
					</div>
					<div>
						<label>Password:&nbsp;</label>
						<input type="text" placeholder="Your password..."></input>
					</div>
					<button>Log In</button>
				</div>
				<div ref={register_popup_ref} className="register-popup" style={layout.register_popup}>
					<div className="close-button" style={layout.close_button}>
						<button onClick={() => closePopupHandler(register_popup_ref)}>X</button>
					</div>
					<p>Register New User</p>
					<div>
						<label>Select a role:&nbsp;</label>
						<select>
							<option value="supporter">Supporter</option>
							<option value="designer">Designer</option>
						</select>
					</div>
					<div>
						<label>Username:&nbsp;</label>
						<input type="text" placeholder="Your username..."></input>
					</div>
					<div>
						<label>Password:&nbsp;</label>
						<input type="text" placeholder="Your password..."></input>
					</div>
					<button>Register</button>
				</div>
				<div ref={create_project_popup_ref} className="create-project-popup" style={layout.create_project_popup}>
					<div className="close-button" style={layout.close_button}>
						<button onClick={() => closePopupHandler(create_project_popup_ref)}>X</button>
					</div>
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
						<textarea rows="3" cols="40" maxLength="240" placeholder="Project story..." 
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
				<div ref={create_pledge_popup_ref} className="create-pledge-popup" style={layout.create_pledge_popup}>
					<div className="close-button" style={layout.close_button}>
						<button onClick={() => closePopupHandler(create_pledge_popup_ref)}>X</button>
					</div>
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
				<div ref={view_project_popup_ref} className="view-project-popup" style={layout.view_project_popup}>
					<div className="close-button" style={layout.close_button}>
						<button onClick={() => closePopupHandler(view_project_popup_ref)}>X</button>
					</div>
					<p>PROJECT NAME</p>
					<div>
						<label>Story:&nbsp;</label>
						<p>STORY STORY STORY STORY STORY STORY STORY STORY! STORY STORY STORY STORY 
						STORY STORY STORY STORY STORY STORY! STORY! STORY STORY STORY STORY STORY 
						STORY? STORY STORY STORY STORY STORY STORY STORY STORY STORY STORY STORY!!1!
						</p>
					</div>	
					<div style={{display: "flex", width: "100%"}}>
						<div style={{display: "flex", alignItems: "baseline"}}>
							<label>Type:&nbsp;</label>
							<p>TYPE TYPE</p>
						</div>
						<div style={{textAlign: "right", marginLeft: "auto"}}>
							<label>Pledges:&nbsp;</label>
							<ul style={{listStyle: "none"}}>
								<li>(#SUPP) <button>O</button> I am a pledge for money</li>
								<li>(#SUPP) <button>O</button> I am a pledge for money</li>
								<li>(#SUPP) <button>O</button> I am a pledge for money</li>
								<li>(#SUPP) <button>O</button> I am a pledge for money</li>
							</ul>
							<button onClick={() => openPopupHandler(create_pledge_popup_ref)}>Add Pledge</button>
						</div>
					</div>
					<div>
						<label>Goal:&nbsp;</label>
						<p>$AMOUNT / $GOAL</p>
					</div>
					<div style={{width: "100%", textAlign: "right"}}	>
						<p>Deadline: MMDDYYYY</p>
						<div style={{alignItems: "flex-end"}}>
							<button>Delete Project</button>
							<button onClick={() => openPopupHandler(direct_support_popup_ref)}>Direct Support</button>
						</div>
					</div>
				</div>
				<div ref={view_pledge_popup_ref} className="view-pledge-popup" style={layout.view_pledge_popup}>
					<div className="close-button" style={layout.close_button}>
						<button onClick={() => closePopupHandler(view_pledge_popup_ref)}>X</button>
					</div>
					<p>PLEDGE NAME</p>	
					<div style={{display: "flex", alignItems: "center"}}>
						<label>Reward:&nbsp;</label>
						<p>REWARD REWARD 3 STICKERS 🥵</p>
					</div>
					<div style={{display: "flex", alignItems: "center"}}>
						<label>Max Supporters:&nbsp;</label>
						<p>MAX # OF SUPPORTERS</p>
					</div>
				</div>
				<div ref={add_funds_popup_ref} className="add-funds-popup" style={layout.add_funds_popup}>
					<div className="close-button" style={layout.close_button}>
						<button onClick={() => closePopupHandler(add_funds_popup_ref)}>X</button>
					</div>
					<p>Add Funds</p>
					<div style={{display: "flex", alignItems: "flex-start"}}>
						<label>Balance ($):&nbsp;</label>
						<p style={{margin: 0}}>$BALANCE</p>
					</div>
					<div>
						<label>Amount to add ($):&nbsp;</label>
						<input type="text" placeholder="ex: $100.00"></input>
					</div>
					<button>Add</button>
				</div>
				<div ref={direct_support_popup_ref} className="direct-support-popup" style={layout.direct_support_popup}>
					<div className="close-button" style={layout.close_button}>
						<button onClick={() => closePopupHandler(direct_support_popup_ref)}>X</button>
					</div>
					<p>Direct Support</p>
					<div style={{display: "flex", alignItems: "flex-start"}}>
						<label>Goal ($):&nbsp;</label>
						<p style={{margin: 0}}>$AMOUNT / $GOAL</p>
					</div>
					<div>
						<label>Amount to add ($):&nbsp;</label>
						<input type="text" placeholder="ex: $100.00"></input>
					</div>
					<button>Add</button>
				</div>
			</div>
			<div className="search-projects-wrapper" style={layout.search_projects_wrapper}>
				<input className="search-projects-bar" type="text" placeholder="Search Projects..." style={layout.search_projects_bar}></input>
				{renderProjects()}
			</div>
		</main>
	);
}

export default App;