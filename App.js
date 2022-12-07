import React from "react";
import { layout } from "./layout/Layout.js";
import { Model } from "./model/Model.js";
import { Boundary } from "./boundary/Boundary.js";
import { Controller } from "./controller/Controller.js";

function App()
{
	let [model] = React.useState(new Model());
	let [redraw, forceRedraw] = React.useState(1);

	React.useEffect(() =>
	{
		console.log("redraw");
	}, [model,redraw]);

	const redrawPage = () =>
	{
		forceRedraw(-redraw);
	}

	// REFS

	let register_popup_ref = React.useRef(0);
	let register_popup_role_ref = React.useRef(0);
	let register_popup_username_ref = React.useRef(0);
	let login_popup_ref = React.useRef(0);
	let login_popup_username_ref = React.useRef(0);
	let create_project_popup_ref = React.useRef(0);
	let create_project_popup_name_ref = React.useRef(0);
	let create_project_popup_type_ref = React.useRef(0);
	let create_project_popup_story_ref = React.useRef(0);
	let create_project_popup_goal_ref = React.useRef(0);
	let create_project_popup_deadline_ref = React.useRef(0);
	let create_pledge_popup_ref = React.useRef(0);
	let view_project_popup_ref = React.useRef(0);
	let view_pledge_popup_ref = React.useRef(0);
	let add_funds_popup_ref = React.useRef(0);
	let direct_support_popup_ref = React.useRef(0);
	let search_projects_input_ref = React.useRef(0);
	let search_projects_field_ref = React.useRef(0);
	let direct_support_popup_amount_ref = React.useRef(0);
	let create_pledge_popup_amount_ref = React.useRef(0);
	let create_pledge_popup_reward_ref = React.useRef(0);
	let create_pledge_popup_max_ref = React.useRef(0);
	let view_pledge_popup_amount_ref = React.useRef(0);

	// BOUNDARY

	const openPopupHandler = (r) =>
	{
		Boundary.openPopup(r.current);
		redrawPage();
	}

	const closePopupHandler = (r) =>
	{
		Boundary.closePopup(r.current);
		redrawPage();
	}

	const renderHeaderHandler = () =>
	{
		return Boundary.renderHeader(model, openPopupHandler, logOutHandler, register_popup_ref, login_popup_ref);
	}

	const renderDashboardHandler = () =>
	{
		return Boundary.renderDashboard(model, openPopupHandler, create_project_popup_ref, redrawPage);
	}

	const renderProjectsHandler = () =>
	{
		return Boundary.renderProjects(model, openPopupHandler, view_project_popup_ref, redrawPage);
	}

	const renderPledgesHandler = () =>
	{
		// console.log("re-rendering pledges")
		return Boundary.renderPledges(model, openPopupHandler, view_pledge_popup_ref, redrawPage);
	}

	// CONTROLLER

	const logInHandler = async (user) =>
	{
		await Controller.logIn(model, user.current.value);
		redrawPage();
	}

	const logOutHandler = () =>
	{
		Controller.logOut(model, redrawPage);
		redrawPage();
	}

	const registerHandler = async (user, role) =>
	{
		await Controller.register(user.current.value, role.current.value);
	}

	const createProjectHandler = async (name, type, story, goal, deadline) =>
	{
		await Controller.createProject(model, name.current.value, type.current.value, 
			story.current.value, goal.current.value, deadline.current.value);
		await searchProjectHandler(model);
		redrawPage();
	}

	const createPledgeHandler = async (amt, reward, max) =>
	{
		await Controller.createPledge(model, amt.current.value, reward.current.value, max.current.value);
		redrawPage();
	}

	const searchProjectHandler = async () =>
	{
		await Controller.searchProjects(model);
		redrawPage();
	}

	const updateSearchHandler = async (e, search_bar, field) =>
	{
		// enter pressed
		if(e.keyCode === 13)
		{
			model.updateSearch(search_bar.current.value);
			model.by = field.current.value
			await searchProjectHandler(model);
		}
	}

	const deleteProjectHandler = async (r) =>
	{
		await Controller.deleteProject(model);
		closePopupHandler(r);
		await searchProjectHandler(model);
		redrawPage();
	}

	const directSupportHandler = async (amt) =>
	{
		await Controller.directSupport(model, amt.current.value);
		redrawPage();
	}

	// TODO: could have a function that updates cur_proj in model by search for that prid
	const claimPledgeHandler = async (amt) =>
	{
		await Controller.claimPledge(model, amt.current.value);
		redrawPage();
		model.updateCurProj();
		model.updateCurPl();
		redrawPage();
	}

	// OTHER

	const parseDeadline = (dl) =>
	{
		return (dl ? (dl.substring(5,7) + '/' + dl.substring(8, 10) + '/' + dl.substring(0, 4)) : dl);
	}

	return (
		<main className="App" style={layout.App}>
			<header className="header" style={layout.header}>
				<a className="punchender-logo" style={layout.punchender_logo} href="">Punchender</a>
				{renderHeaderHandler()}
			</header>



			<div className="header-line" style={layout.header_line}></div>
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
					<button onClick={() => logInHandler(login_popup_username_ref)}>Log In</button>
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
					<button onClick={() => registerHandler(register_popup_username_ref, register_popup_role_ref)}>Register</button>
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
							style={{ resize: "none" }}></textarea>
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
						<input ref={create_pledge_popup_amount_ref} type="text" placeholder="ex: 10.00"></input>
					</div>
					<div>
						<label>Reward (Optional):&nbsp;</label>
						<input ref={create_pledge_popup_reward_ref} type="text" placeholder="ex: &quot;3 stickers&quot;"></input>
					</div>
					<div>
						<label>Max Supporters:&nbsp;</label>
						<input ref={create_pledge_popup_max_ref} type="text" placeholder="ex: 20"></input>
					</div>
					<button onClick={() => createPledgeHandler(create_pledge_popup_amount_ref, create_pledge_popup_reward_ref, create_pledge_popup_max_ref)}>Create</button>
				</div>



				<div ref={view_project_popup_ref} className="view-project-popup" style={layout.view_project_popup}>
					<div className="close-button" style={layout.close_button}>
						<button onClick={() => closePopupHandler(view_project_popup_ref)}>X</button>
					</div>
					<div style={{ width: "100%", textAlign: "center" }}>
						<p>{model.cur_proj.name}</p>
						<p>Creator: {model.cur_proj.creator}</p>
					</div>
					<div>
						<label>Story:&nbsp;</label>
						<p>{model.cur_proj.story}</p>
					</div>
					<div style={{ display: "flex", width: "100%" }}>
						<div style={{ display: "flex", alignItems: "baseline" }}>
							<label>Type:&nbsp;</label>
							<p>{model.cur_proj.type}</p>
						</div>
						<div style={{ textAlign: "right", marginLeft: "auto" }}>
							<label>Pledges:&nbsp;</label>
							{renderPledgesHandler()}
							<button onClick={() => openPopupHandler(create_pledge_popup_ref)}>Add Pledge</button>
							{/* //TODO: this sucks */}
							<p>(Refresh to update.)</p>
						</div>
					</div>
					<div>
						<label>Goal:&nbsp;</label>
						<p>${model.cur_proj.amount} / ${model.cur_proj.goal}</p>
					</div>
					<div style={{ width: "100%", textAlign: "right" }}>
						<p>Deadline: {parseDeadline(model.cur_proj.deadline)}</p>
						<div style={{ alignItems: "flex-end" }}>
							<button onClick={() => deleteProjectHandler(view_project_popup_ref)}>Delete Project</button>
							<button onClick={() => openPopupHandler(direct_support_popup_ref)}>Direct Support</button>
						</div>
					</div>
				</div>



				<div ref={view_pledge_popup_ref} className="view-pledge-popup" style={layout.view_pledge_popup}>
					<div className="close-button" style={layout.close_button}>
						<button onClick={() => closePopupHandler(view_pledge_popup_ref)}>X</button>
					</div>
					<div style={{ display: "flex", alignItems: "center" }}>
						<label>Reward:&nbsp;</label>
						<p>{model.cur_pl.reward}</p>
					</div>
					<div style={{ display: "flex", alignItems: "center" }}>
						<label>Supporters:&nbsp;</label>
						<p>{model.cur_pl.curSupporters} / {model.cur_pl.maxSupporter}</p>
					</div>
					<div style={{ display: "flex", alignItems: "center" }}>
						<label>Amount ($):&nbsp;</label>
						<input ref={view_pledge_popup_amount_ref} type="text" placeholder="ex: 20"></input>
					</div>
					<button onClick={() => claimPledgeHandler(view_pledge_popup_amount_ref)}>Claim Pledge</button>
				</div>



				<div ref={add_funds_popup_ref} className="add-funds-popup" style={layout.add_funds_popup}>
					<div className="close-button" style={layout.close_button}>
						<button onClick={() => closePopupHandler(add_funds_popup_ref)}>X</button>
					</div>
					<p>Add Funds</p>
					<div style={{ display: "flex", alignItems: "flex-start" }}>
						<label>Balance ($):&nbsp;</label>
						<p style={{ margin: 0 }}>$BALANCE</p>
					</div>
					<div>
						<label>Amount to add ($):&nbsp;</label>
						<input type="text" placeholder="ex: 100.00"></input>
					</div>
					<button>Add</button>
				</div>



				<div ref={direct_support_popup_ref} className="direct-support-popup" style={layout.direct_support_popup}>
					<div className="close-button" style={layout.close_button}>
						<button onClick={() => closePopupHandler(direct_support_popup_ref)}>X</button>
					</div>
					<p>Direct Support</p>
					<div style={{ display: "flex", alignItems: "flex-start" }}>
						<label>Goal ($):&nbsp;</label>
						<p style={{ margin: 0 }}>${model.cur_proj.amount} / ${model.cur_proj.goal} ({Math.round(100 * model.cur_proj.amount/model.cur_proj.goal)}%)</p>
					</div>
					<div>
						<label>Amount to add ($):&nbsp;</label>
						<input ref={direct_support_popup_amount_ref} type="text" placeholder="ex: 100.00"></input>
					</div>
					<button onClick={() => directSupportHandler(direct_support_popup_amount_ref)}>Add</button>
				</div>	
			</div>



			<div className="search-projects-wrapper" style={layout.search_projects_wrapper}>
				<input ref={search_projects_input_ref} className="search-projects-bar" type="text" 
				placeholder="Search Projects..." 
				onKeyDown={(e) => updateSearchHandler(e, search_projects_input_ref, search_projects_field_ref)} style={layout.search_projects_bar}></input>
				<div style={{width: "100%"}}>
					<select ref={search_projects_field_ref} className="search-projects-field" >
						<option value="name">Project Name</option>
						<option value="type">Type/Genre</option>
						<option value="creator">Creator</option>
					</select>
				</div>
				{renderProjectsHandler()}
			</div>
		</main>
	);
}

export default App;