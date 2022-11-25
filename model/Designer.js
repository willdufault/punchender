export class Designer
{
	constructor(email, password)
	{
		this.email = email;  // email used to login (string)
		this.password = password;  // password used to login (string)
		this.projects = [];  // list of projects by this designer (list(Project))
	}
}