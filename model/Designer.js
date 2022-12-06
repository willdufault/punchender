export class Designer
{
	constructor(username)
	{
		this.username = username;  // username used to login (string)
		this.projects = [];  // list of projects by this designer (list(Project))
	}
}