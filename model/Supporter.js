export class Supporter
{
	constructor(username, budget)
	{
		this.username = username;  // username used to login (string)
		this.budget = budget;  // current budget/balance on account (float)
		this.pledges = [];  // list of successful pledges (list(Pledge))
		this.support = [];  // list of past support (list(float))
	}
}