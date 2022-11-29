export const layout = 
{
	App:
	{
		margin: 0,
		padding: 0,
		boxSizing: "border-box",
		width: "100%",
		height: "100%",
		background: "#191919"
	},

	header:
	{
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		padding: "0 2%",
		fontSize: 20,
		color: "white"
		// border: "3px solid blue"
	},

	punchender_logo:
	{
		fontSize: 32,
		fontFamily: "Courier New, Monospace",
		color: "red"
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
		color: "red"
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

	developer_dashboard:
	{
		border: "1px double hotpink"
	},

	supporter_dashboard:
	{
		border: "1px double yellow"
	},



	// TODO: popups have a lot of repeated code, make a popup class that contains all repeated code

	// popups:
	register_popup:
	{
		position: "absolute",
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
		position: "absolute",
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
		position: "absolute",
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
		position: "absolute",
		top: "50%",
		left: "50%",
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

	add_funds_popup:
	{
		position: "absolute",
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
	}
}; 	