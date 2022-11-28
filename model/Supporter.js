export class Supporter
{
	constructor(email, password, balance)
	{
		this.email = email;  // email used to login (string)
		this.password = password;  // password used to login (string)
		this.balance = balance;  // current balance on account (float)
		this.pledges = [];  // list of successful pledges (list(Pledge))
		this.support = [];  // list of past support (list(float))
	}

	searchProjects(str)
	{
		// str is substring to search for
		// TODO: lambda: { email, str }
	}

	reviewActivity()
	{
		// TODO: lambda: { email }
	}

	addFunds(amt)
	{
		// amt is amount to be added
		// TODO: lambda: { email, amt }
	}

	viewProject(proj)
	{
		// TODO: lambda: { email, proj_name }
	}

	viewPledge(proj, p)
	{
		// TODO: lambda: { email, proj_name, p_name }
	}

	claimPledge(proj, p)
	{
		// TODO: lambda: { email, proj_name, p_name }
	}

	directSupport(proj, amt)
	{
		// TODO: lambda: { email, proj_name, p_name, amt }
	}
}