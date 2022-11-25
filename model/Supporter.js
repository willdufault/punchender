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
}