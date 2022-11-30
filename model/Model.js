import { Supporter } from "./Supporter";
import { Designer } from "./Designer";
import { Admin } from "./Admin";

export class Model
{
	constructor()
	{
		//// this.projects = [];  // list of all projects (list(Project))
		//// this.admins = [];  // list of all admins (list(Admin))
		//// this.designers = [];  // list of all designers (list(Designer))
		//// this.supportes = [];  // list of all supporters (list(Supporter))
		this.user = null;  // current user (Admin, Designer, or Supporter)
	}

	clone()
	{
		const m = new Model();
		m.user = this.user;
		return m;
	}

	sam()
	{
		this.user = new Supporter("sam");
	}

	dave()
	{
		this.user = new Designer("dave");
	}

	amy()
	{
		this.user = new Admin("amy");
	}
}