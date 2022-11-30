export class Designer
{
	constructor(username, password)
	{
		this.username = username;  // username used to login (string)
		this.password = password;  // password used to login (string)
		this.projects = [];  // list of projects by this designer (list(Project))
	}

	createProject(proj)
	{
		// TODO: lambda: { username, proj: { proj_info } }
	}

	deleteProject(proj)
	{
		// TODO: lambda: { username, proj_name }
	}

	createPledge(proj, p)
	{
		// TODO: lambda: { username, proj_name, p: { p_info } }
	}

	deletePledge(proj, p)
	{
		// TODO: lambda: { username, proj_name, p_name }
	}

	launchProject(proj)
	{
		// TODO: lambda: { username, proj_name }
	}

	reviewProjectActivity(proj)
	{
		// TODO: lambda: { username, proj_name }
	}
}