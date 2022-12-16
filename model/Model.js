import { Supporter } from "./Supporter";
import { Designer } from "./Designer";
import { Admin } from "./Admin";

export class Model
{
	constructor()
	{
		this.user = null;  // current user (Admin, Designer, or Supporter)
		this.role = ""  // role of current user
		this.cur_proj = {};
		this.cur_pl = {};
		this.proj_act = []  // cur proj activity
		this.projects = [];
		this.search = "";
		this.by = "name";  // search by this
		this.supp_activity = [];
	}

	adminLogIn(user)
	{
		this.user = new Admin(user);
		this.role = "admin";
	}

	designerLogIn(user)
	{
		this.user = new Designer(user);
		this.role = "designer";
	}

	supporterLogIn(user, bal)
	{
		this.user = new Supporter(user, bal);
		this.role = "supporter";
	}

	logOut()
	{
		this.user = null;
		this.role = "";
		this.supp_activity = [];
	}

	updateSearch(s)
	{
		this.search = s;
	}
}