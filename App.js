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
	const register_popup_role_ref = React.useRef(0);
	const register_popup_username_ref = React.useRef(0);
	const register_popup_password_ref = React.useRef(0);
	const login_popup_ref = React.useRef(0);
	const login_popup_username_ref = React.useRef(0);
	const login_popup_password_ref = React.useRef(0);
	const create_project_popup_ref = React.useRef(0);
	const create_project_popup_name_ref = React.useRef(0);
	const create_project_popup_type_ref = React.useRef(0);
	const create_project_popup_story_ref = React.useRef(0);
	const create_project_popup_goal_ref = React.useRef(0);
	const create_project_popup_deadline_ref = React.useRef(0);
	const create_pledge_popup_ref = React.useRef(0);
	const view_project_popup_ref = React.useRef(0);
	const view_pledge_popup_ref = React.useRef(0);
	const add_funds_popup_ref = React.useRef(0);
	const direct_support_popup_ref = React.useRef(0);
 
	// BOUNDARY

	const openPopupHandler = (r) =>
	{
		Boundary.openPopup(r.current);
	}

	const closePopupHandler = (r) =>
	{
		Boundary.closePopup(r.current);
	}

	const renderHeaderHandler = () =>
	{
		return Boundary.renderHeader(model, openPopupHandler, logOutHandler, register_popup_ref, login_popup_ref);
	}

	const renderDashboardHandler = () =>
	{
		return Boundary.renderDashboard(model, openPopupHandler, create_project_popup_ref);
	}

	const renderProjectsHandler = () =>
	{
		return Boundary.renderProjects(model, setModel, openPopupHandler, view_project_popup_ref);
	}

	const renderPledgesHandler = () =>
	{
		return Boundary.renderPledges(model);
	}

	// CONTROLLER

	const logInHandler = (user, pw) =>
	{
		Controller.logIn(model, user.current.value, pw.current.value);	
		setModel(model.clone());
	}

	const logOutHandler = () =>
	{
		Controller.logOut(model);
		setModel(model.clone());
	}

	const registerHandler = (user, pw, role) =>
	{
		Controller.register(model, user.current.value, pw.current.value, role.current.value);
		setModel(model.clone());
	}

	const createProjectHandler = (name, type, story, goal, deadline) =>
	{
		console.log("in here")
		Controller.createProject(model, name.current.value, type.current.value, story.current.value, goal.current.value, deadline.current.value);
		setModel(model.clone());
	}

	// I HATE REACT

	const sup1Handler = () =>
	{
		model.sup1();
		setModel(model.clone());
	}

	const des1Handler = () =>
	{
		model.des1();
		setModel(model.clone());
	}

	const adm1Handler = () =>
	{
		model.adm1();
		setModel(model.clone());
	}

	return (
		<main className="App" style={layout.App}>
			<header className="header" style={layout.header}>
				<a className="punchender-logo" style={layout.punchender_logo} href="">Punchender</a>
				{renderHeaderHandler()}
			</header>
			<div className="header-line" style={layout.header_line}></div>
			<button onClick={() => sup1Handler()}>sup1</button>
			<button onClick={() => des1Handler()}>des1</button>
			<button onClick={() => adm1Handler()}>adm1</button>
			<div className="dashboard-wrapper" style={layout.dashboard_wrapper}>
				{renderDashboardHandler()}
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
						<input ref={login_popup_username_ref} type="text" placeholder="Your username..."></input>
					</div>
					<div>
						<label>Password:&nbsp;</label>
						<input ref={login_popup_password_ref} type="text" placeholder="Your password..."></input>
					</div>
					<button onClick={() => logInHandler(login_popup_username_ref, login_popup_password_ref)}>Log In</button>
				</div>
				<div ref={register_popup_ref} className="register-popup" style={layout.register_popup}>
					<div className="close-button" style={layout.close_button}>
						<button onClick={() => closePopupHandler(register_popup_ref)}>X</button>
					</div>
					<p>Register New User</p>
					<div>
						<label>Select a role:&nbsp;</label>
						<select ref={register_popup_role_ref}>
							<option value="supporter">Supporter</option>
							<option value="designer">Designer</option>
						</select>
					</div>
					<div>
						<label>Username:&nbsp;</label>
						<input ref={register_popup_username_ref} type="text" placeholder="Your username..."></input>
					</div>
					<div>
						<label>Password:&nbsp;</label>
						<input ref={register_popup_password_ref} type="text" placeholder="Your password..."></input>
					</div>
					<button onClick={() => registerHandler(register_popup_username_ref, register_popup_password_ref, register_popup_role_ref)}>Register</button>
				</div>
				<div ref={create_project_popup_ref} className="create-project-popup" style={layout.create_project_popup}>
					<div className="close-button" style={layout.close_button}>
						<button onClick={() => closePopupHandler(create_project_popup_ref)}>X</button>
					</div>
					<p>Create New Project</p>
					<div>
						<label>Name:&nbsp;</label>
						<input ref={create_project_popup_name_ref} type="text" placeholder="Project name..."></input>
					</div>
					<div>
						<label>Type:&nbsp;</label>
						<input ref={create_project_popup_type_ref} type="text" placeholder="Project type..."></input>
					</div>
					<div>
						<label>Story:&nbsp;</label>
						<textarea ref={create_project_popup_story_ref} rows="3" cols="40" maxLength="240" placeholder="Project story..." 
						style={{resize: "none"}}></textarea>
					</div>
					<div>
						<label>Goal ($):&nbsp;</label>
						<input ref={create_project_popup_goal_ref} type="text" placeholder="ex: 100.00"></input>
					</div>
					<div>
						<label>Deadline:&nbsp;</label>
						<input ref={create_project_popup_deadline_ref} type="text" placeholder="MMDDYYYY"></input>
					</div>
					<button onClick={() => createProjectHandler(create_project_popup_name_ref, create_project_popup_type_ref, create_project_popup_story_ref, create_project_popup_goal_ref, create_project_popup_deadline_ref)}>Create</button>
				</div>
				<div ref={create_pledge_popup_ref} className="create-pledge-popup" style={layout.create_pledge_popup}>
					<div className="close-button" style={layout.close_button}>
						<button onClick={() => closePopupHandler(create_pledge_popup_ref)}>X</button>
					</div>
					<p>Create New Pledge</p>
					<div>
						<label>Amount:&nbsp;</label>
						<input type="text" placeholder="ex: $10.00"></input>
					</div>
					<div>
						<label>Reward (Optional):&nbsp;</label>
						<input type="text" placeholder="ex: &quot;3 stickers&quot;"></input>
					</div>
					<div>
						<label>Max Supporters:&nbsp;</label>
						<input type="text" placeholder="ex: 20"></input>
					</div>
					<button>Create</button>
				</div>
				<div ref={view_project_popup_ref} className="view-project-popup" style={layout.view_project_popup}>
					<div className="close-button" style={layout.close_button}>
						<button onClick={() => closePopupHandler(view_project_popup_ref)}>X</button>
					</div>
					<div style={{width: "100%", textAlign: "center"}}>
						<p>{model.proj.name}</p>
					</div>
					<div>
						<label>Story:&nbsp;</label>
						<p>{model.proj.story}</p>
					</div>	
					<div style={{display: "flex", width: "100%"}}>
						<div style={{display: "flex", alignItems: "baseline"}}>
							<label>Type:&nbsp;</label>
							<p>{model.proj.type}</p>
						</div>
						<div style={{textAlign: "right", marginLeft: "auto"}}>
							<label>Pledges:&nbsp;</label>
							{renderPledgesHandler()}
							<button onClick={() => openPopupHandler(create_pledge_popup_ref)}>Add Pledge</button>
						</div>
					</div>
					<div>
						<label>Goal:&nbsp;</label>
						<p>${model.proj.amount} / ${model.proj.goal}</p>
					</div>
					<div style={{width: "100%", textAlign: "right"}}	>
						<p>Deadline: {model.proj.deadline}</p>
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
				{renderProjectsHandler()}
			</div>
		</main>
	);
}

export default App;