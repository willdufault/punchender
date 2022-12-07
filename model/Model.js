import { Supporter } from "./Supporter";
import { Designer } from "./Designer";
import { Admin } from "./Admin";
import { Database } from "./Database";

export class Model
{
	constructor()
	{
		this.user = null;  // current user (Admin, Designer, or Supporter)
		this.cur_proj = {};
		this.cur_pl = {};
		this.projects = [];
		this.search = "";
		this.by = "name";  // search by this
		this.supp_activity = [];
		this.db = new Database();
	}

	adminLogIn(user)
	{
		this.user = new Admin(user);
	}

	designerLogIn(user)
	{
		this.user = new Designer(user);
	}

	supporterLogIn(user, bal)
	{
		this.user = new Supporter(user, bal);
	}

	logOut()
	{
		this.user = null;
	}

	updateSearch(s)
	{
		this.search = s;
	}

	updateCurProj()
	{
		let id = this.cur_proj.projectID;
		for(let i = 0; i < this.projects.length; i++)
		{
			if(this.projects[i].projectID === id)
			{
				this.cur_proj = this.projects[i];

				return;
			}
		}
	}

	updateCurPl()
	{
		let id = this.cur_pl.pledgeID;
		for(let i = 0; i < this.cur_proj.pledges.length; i++)
		{
			if(this.cur_proj.pledges[i].pledgeID === id)
			{
				this.cur_pl = this.cur_proj.pledges[i];
				return;
			}
		}
	}
}