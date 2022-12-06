export class Supporter
{
	constructor(username, balance)
	{
		this.username = username;  // username used to login (string)
		this.balance = balance;  // current balance on account (float)
		this.pledges = [];  // list of successful pledges (list(Pledge))
		this.support = [];  // list of past support (list(float))
	}
}