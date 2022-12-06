import { Controller } from "../controller/Controller";
import { layout } from "../layout/Layout";

export class Boundary
{
	static openPopup(r)
	{
		r.style.display = "flex";
	}

	static closePopup(r)
	{
		r.style.display = "none";
	}

	static renderHeader(model, openPopupHandler, logOutHandler, register_popup_ref, login_popup_ref)
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

	static renderDashboard(model, openPopupHandler, create_project_popup_ref, redrawPage)
	{
		
		const updateSupporterActivity = async () =>
		{
			await Controller.reviewSupporterActivity(model);
			redrawPage();
		}

		const designerListHandler = async () =>
		{
			model.search = model.user.username;
			model.by = "creator";
			await Controller.searchProjects(model);
			redrawPage();
		}

		const adminListHandler = async () =>
		{
			model.search = "";
			model.by = "name";
			await Controller.searchProjects(model);
			redrawPage();
		}

		if(model.user)
		{
			const role = model.user.constructor.name.toLowerCase();
			switch(role)
			{
				case "admin":
					return (
						<div className="admin-dashboard" style={layout.admin_dashboard}>
							<p className="dashboard-title" style={layout.dashboard_title}>Admin Dashboard</p>
							<div style={{width: "100%", display: "flex", justifyContent: "center", gap: "3%"}}>
								<button className="reap-projects-button" style={layout.reap_projects_button}>Reap Projects</button>
								<button onClick={() => adminListHandler()}>List All Projects</button>
							</div>
						</div>
					);
				case "designer":
					return (
						<div className="designer-dashboard" style={layout.designer_dashboard}>
							<p>Designer Dashboard</p>
							<div style={{width: "100%", display: "flex", justifyContent: "center", gap: "3%"}}>
								<button onClick={() => openPopupHandler(create_project_popup_ref)}>Create Project</button>
								<button onClick={() => designerListHandler()}>List My Projects</button>
							</div>
						</div>
					);
				case "supporter":
					return (
						<div className="supporter-dashboard" style={layout.supporter_dashboard}>
							<p>Supporter Dashboard</p>
							<div style={{width: "90%"}}>
								<p>{model.user.username}'s Activity:</p>
								{this.renderSupporterActivity(model)}
								<button onClick={() => updateSupporterActivity()}>Review Supporter Activity</button>
							</div>
						</div>
					);
			}	
		}
	}

	static renderSupporterActivity(model)
	{
		const renderAct = (act) =>
		{
			if(act.pledgeID)
			{
				return (
					<p>Claimed {Controller.fetchProject(model, act.projectID).name}'s {Controller.fetchPledge(model, act.pledgeID).reward} for ${act.amount}</p>
				)
			}
			// project
			return (
				<p>Supported {Controller.fetchProject(model, act.projectID).name} for ${act.amount}</p>
			)
		}

		let i = 0;	
		let activity = model.supp_activity.map((act) =>
			<li key={i++}>
				<div className="supporter-activity-entry" style={layout.supporter_activity_entry}>
				{renderAct(act)}
				</div>
			</li>
		);
		return (
			<ul>{activity}</ul>
		);
	}

	static renderProjects(model, openPopupHandler, view_project_popup_ref, redrawPage)
	{
		const updateProject = (proj) =>
		{
			model.cur_proj = proj;
			redrawPage();
			openPopupHandler(view_project_popup_ref);
		}

		const parseDeadline = (dl) =>
		{
			return (dl.substring(5,7) + '/' + dl.substring(8, 10) + '/' + dl.substring(0, 4));
		}

		let i = 0;
		let projects = model.projects.map((proj) =>
			<div key={i++} onClick={() => {updateProject(proj)}} 
			className="project-result" style={layout.search_result}>
				<p>Name: {proj.name}</p>
				<p>Creator: {proj.creator}</p>
				<p>Type: {proj.type}</p>
				<p>Goal: ${proj.amount} / ${proj.goal}</p>
				<p>Deadline: {parseDeadline(proj.deadline)}</p>
			</div>
		);
		return projects;
	}

	static renderPledges(model, openPopupHandler, view_pledge_popup_ref, redrawPage)
	{
		const updatePledge = (pl) =>
		{
			model.cur_pl = pl;
			redrawPage();
			openPopupHandler(view_pledge_popup_ref);
		}

		let i = 0;
		let tmp = (model.cur_proj.pledges ? model.cur_proj.pledges : [])
		console.log("model proj pledgse null?", !(model.cur_proj.pledges), "=>", model.cur_proj.pledges, "mapping:", tmp);
		let pledges = tmp.map((pl) =>
			<li key={i++}> <button onClick={updatePledge(pl)}>view</button> ${pl.amount}: {pl.reward}</li>
		);
		console.log("pledges:", pledges)
		return <ul style={{listStyle: "none"}}>{pledges}</ul>;
	}

	static renderPledges1(model)
	{
		let i = 0;
		let tmp = Controller.fetchProjectPledges(model, model.cur_proj.projectID);
		// TODO: need to check here if curr user has claimed this pledged, replace o with x, add logic for that
		if(tmp)
		{
			// use loop, not map
			// temp.foreach()
			let pledges = tmp.map((p) =>
			// TODO: error comes from calling inside of child, not field like everything else
			// TODO: could add field to supporter locally after fetched
			<li key={i++}>({() => Controller.fetchPledgeClaims(model, p.pledgeID)}) <button>O</button> ${p.amount}: {p.reward}</li>
			);
			return <ul style={{listStyle: "none"}}>{pledges}</ul>;
		}
	}
}