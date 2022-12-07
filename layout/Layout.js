export const layout = 
{
	App:
	{
		margin: 0,
		paddingBottom: 1,
		boxSizing: "border-box",
		width: "100%",
		minHeight: "100vh",
		background: "#191919"
	},

	header:
	{
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		margin: "0 2%",
		fontSize: 20,
		color: "white"
		// border: "3px solid blue"
	},

	punchender_logo:
	{
		fontSize: 32,
		fontFamily: "Courier New, Monospace",
		color: "red",
		cursor: "pointer",
		textDecoration: "none"
	},

	header_user_wrapper:
	{
		display: "flex",
		alignItems: "center",
		gap: 20,
		fontSize: 20,
		color: "white"
	},

	header_vertical_divider:
	{
		fontSize: 24,
		color: "red",
		cursor: "default"
	},

	header_line:
	{
		background: "red",
		height: 2,
		margin: "0 1%"
	},

	search_projects_wrapper:
	{
		margin: "2%",
		padding: "1% 4%",
		border: "2px solid lime",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		gap: 10
	},

	search_projects_bar:
	{
		background: "lightgray",
		fontSize: 36,
		height: 60,
		width: "calc(100% - 20px)",
		padding: "0 10px",
		margin: "0 0 1%"
	},

	projects_list_wrapper:
	{
		border: "1px dotted yellow",
		width: "100%",
		height: 420,
		margin: 10
	},

	dashboard_wrapper:
	{
		border: "4px double green",
		margin: "1% 2%",
		padding: "1%",
		color: "white"
	},

	dashboard_title:
	{
		margin: 0,
		fontSize: 30
	},

	admin_dashboard:
	{
		border: "1px double blue",
		display: "flex",
		alignItems: "center",
		flexDirection: "column",
		gap: 30
	},

	reap_projects_button:
	{
		fontSize: 30,
		color: "red"
	},

	designer_dashboard:
	{
		border: "1px double hotpink",
		display: "flex",
		alignItems: "center",
		flexDirection: "column",
		gap: 30
	},

	supporter_dashboard:
	{
		border: "1px double yellow",
		display: "flex",
		alignItems: "center",
		flexDirection: "column",
		gap: 30
	},

	supporter_activity_entry:
	{
		width: "100%",
		display: "flex",
		justifyContent: "space-between"
	},

	close_button:
	{
		marginLeft: "auto"
	},

	pointer:
	{
		cursor: "pointer"
	},

	search_result:
	{
		border: "2px double pink",
		background: "lightgray",
		width: "98%",
		padding: "1%"
	},



	// TODO: popups have a lot of repeated code, make a popup class that contains all repeated code

	popup_center:
	{
		position: "fixed",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		padding: "1%",
		border: "2px solid purple",
		background: "#bbb",
		display: "flex",
		gap: 10,
		flexDirection: "column",
		alignItems: "center",	
		width: "fit-content",
	},

	popup_left:
	{
		position: "fixed",
		top: "50%",
		left: "50%",
		minWidth: "50vw",
		transform: "translate(-50%, -50%)",
		padding: "1%",
		border: "2px solid purple",
		background: "#bbb",
		display: "flex",
		gap: 10,
		flexDirection: "column",
		alignItems: "flex-start",
		width: "fit-content",
	},


	// popups:
	login_popup:
	{
		position: "fixed",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		padding: "1%",
		border: "2px solid purple",
		background: "#bbb",
		display: "flex",
		gap: 10,
		flexDirection: "column",
		alignItems: "center",	
		width: "fit-content",
		display: "none"  // hidden by default
	},
	
	register_popup:
	{
		position: "fixed",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		padding: "1%",
		border: "2px solid purple",
		background: "#bbb",
		display: "flex",
		gap: 10,
		flexDirection: "column",
		alignItems: "center",
		width: "fit-content",
		display: "none"  // hidden by default
	},

	create_project_popup:
	{
		position: "fixed",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		padding: "1%",
		border: "2px solid purple",
		background: "#bbb",
		display: "flex",
		gap: 10,
		flexDirection: "column",
		alignItems: "center",
		width: "fit-content",
		display: "none"  // hidden by default
	},

	create_pledge_popup:
	{
		zIndex: "1",  // to go above the create project popup
		position: "fixed",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		padding: "1%",
		border: "2px solid purple",
		background: "#bbb",
		display: "flex",
		gap: 10,
		flexDirection: "column",
		alignItems: "center",
		width: "fit-content",
		display: "none"  // hidden by default
	},

	view_project_popup:
	{
		position: "fixed",
		top: "50%",
		left: "50%",
		minWidth: "40%", 
		transform: "translate(-50%, -50%)",
		padding: "1%",
		border: "2px solid purple",
		background: "#bbb",
		display: "flex",
		gap: 10,
		flexDirection: "column",
		alignItems: "flex-start",
		width: "fit-content",
		display: "none"  // hidden by default
	},

	view_pledge_popup:
	{
		position: "fixed",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		padding: "1%",
		border: "2px solid purple",
		background: "#bbb",
		display: "flex",
		gap: 10,
		flexDirection: "column",
		alignItems: "center",
		width: "fit-content",
		display: "none"  // hidden by default
	},

	add_funds_popup:
	{
		position: "fixed",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		padding: "1%",
		border: "2px solid purple",
		background: "#bbb",
		display: "flex",
		gap: 10,
		flexDirection: "column",
		alignItems: "center",
		width: "fit-content",
		display: "none"  // hidden by default
	},

	direct_support_popup:
	{
		position: "fixed",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		padding: "1%",
		border: "2px solid purple",
		background: "#bbb",
		display: "flex",
		gap: 10,
		flexDirection: "column",
		alignItems: "center",
		width: "fit-content",
		display: "none"  // hidden by default
	},
}; 	