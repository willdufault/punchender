export class Supporter
{
	constructor(username, password, balance)
	{
		this.username = username;  // username used to login (string)
		this.password = password;  // password used to login (string)
		this.balance = balance;  // current balance on account (float)
		this.pledges = [];  // list of successful pledges (list(Pledge))
		this.support = [];  // list of past support (list(float))
	}

	searchProjects(str)
	{
		// str is substring to search for
		// TODO: lambda: { username, str }
	}

	reviewActivity()
	{
		// TODO: lambda: { username }
	}

	addFunds(amt)
	{
		// amt is amount to be added
		// TODO: lambda: { username, amt }
	}

	viewProject(proj)
	{
		// TODO: lambda: { username, proj_name }
	}

	viewPledge(proj, p)
	{
		// TODO: lambda: { username, proj_name, p_name }
	}

	claimPledge(proj, p)
	{
		// TODO: lambda: { username, proj_name, p_name }
	}

	directSupport(proj, amt)
	{
		// TODO: lambda: { username, proj_name, p_name, amt }
	}
}