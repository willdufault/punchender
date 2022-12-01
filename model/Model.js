import { Supporter } from "./Supporter";
import { Designer } from "./Designer";
import { Admin } from "./Admin";
import { Database } from "./Database";

export class Model
{
	constructor()
	{
		//// this.projects = [];  // list of all projects (list(Project))
		//// this.admins = [];  // list of all admins (list(Admin))
		//// this.designers = [];  // list of all designers (list(Designer))
		//// this.supportes = [];  // list of all supporters (list(Supporter))
		this.user = null;  // current user (Admin, Designer, or Supporter)
		this.proj = {};
		this.search = "";
		this.db = new Database();
	}

	clone()
	{
		const m = new Model();
		m.user = this.user;
		m.proj = this.proj;
		m.db = this.db;
		return m;
	}

	sup1()
	{
		this.user = new Supporter("sup1");
	}

	des1()
	{
		this.user = new Designer("des1");
	}

	adm1()
	{
		this.user = new Admin("adm1");
	}
}