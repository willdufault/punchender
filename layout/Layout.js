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
		border: "4px double orange"
	},

	admin_dashboard:
	{
		width: "fit-content",
		margin: "auto"
	},

	reap_projects_button:
	{
		fontSize: 40,
		color: "red"
	},

	developer_dashboard:
	{
		border: "1px double lightblue",
		margin: "2%"
	},

	supporter_dashboard:
	{
		border: "1px double lightblue",
		margin: "2%"
	}
}; 	