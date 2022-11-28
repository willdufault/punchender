export class Designer
{
	constructor(email, password)
	{
		this.email = email;  // email used to login (string)
		this.password = password;  // password used to login (string)
		this.projects = [];  // list of projects by this designer (list(Project))
	}

	createProject(proj)
	{
		// TODO: lambda: { email, proj: { proj_info } }
	}

	deleteProject(proj)
	{
		// TODO: lambda: { email, proj_name }
	}

	createPledge(proj, p)
	{
		// TODO: lambda: { email, proj_name, p: { p_info } }
	}

	deletePledge(proj, p)
	{
		// TODO: lambda: { email, proj_name, p_name }
	}

	launchProject(proj)
	{
		// TODO: lambda: { email, proj_name }
	}

	reviewProjectActivity(proj)
	{
		// TODO: lambda: { email, proj_name }
	}
}