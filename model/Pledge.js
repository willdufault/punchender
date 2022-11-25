export class Pledge
{
	constructor(amount, reward, max)
	{
		this.amount = amount;  // $ amount for pledge (float)
		this.reward = reward;  // reward for purchasing pledge (string)
		this.max = max;  // max # of supporters that can purchase pledge (int)
		this.supporters = [];  // list of supporters that have claimed this pledge (list(Supporter))
	}
}