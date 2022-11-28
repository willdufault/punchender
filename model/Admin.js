export class Admin
{
	constructor(email, password)
	{
		this.email = email;  // email used to login (string)
		this.password = password;  // password used to login (string)
	}

	reapProjects()
	{
		// TODO: lambda:  { email }
	}

	deleteProject(proj)
	{
		// TODO: lambda: { email, proj_name }
	}
}