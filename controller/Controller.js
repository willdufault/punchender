import { Designer } from "../model/Designer";
import { Supporter } from "../model/Supporter";
import { Admin } from "../model/Admin";
import { Project } from "../model/Project";

export class Controller
{
	static logIn(model, user, pw)
	{
		for(let i = 0; i < model.db.users.length; i++)
		{
			let cur = model.db.users[i];
			if((cur.username === user) && (cur.password === pw))
			{
				switch(cur.role)
				{
					case "admin":
						model.user = new Admin(user, pw);
						break;
					case "designer":
						model.user = new Designer(user, pw);
						break;
					case "supporter":
						model.user = new Supporter(user, pw);
						break;
				}
				alert("successfully logged in.");
				return;
			}
		}
		alert("incorrect login information.");
	}

	static logOut(model)
	{
		model.user = null;
	}

	static register(model, user, pw, role)
	{
		for(let i = 0; i < model.db.users.length; i++)
		{
			let cur = model.db.users[i];
			if(cur.username === user)
			{
				alert("cannot register. there is already a user with that name.");
				return;
			}
		}
		// got through without issues
		model.db.users.push({"username": user, "password": pw, "role": role});
		alert("successfully registered.");
	}

	static fetchSupporterActivity(model)
	{
		const ans = [];
		for(let i = 0; i < model.db.past_support.length; i++)
		{
			let cur = model.db.past_support[i];
			if(cur["supporter"] === model.user.username)
			{
				ans.push(cur);
			}
		}
		return ans;
	}

	static fetchProject(model, id)
	{
		for(let i = 0; i < model.db.projects.length; i++)
		{
			let cur = model.db.projects[i];
			if(cur.projectID === id)
			{
				return cur;
			}
		}
	}

	static fetchPledge(model, id)
	{
		for(let i = 0; i < model.db.pledges.length; i++)
		{
			let cur = model.db.pledges[i];
			if(cur.pledgeID === id)
			{
				return cur;
			}
		}
	}

	static fetchProjectPledges(model, id)
	{
		let ans = [];
		for(let i = 0; i < model.db.pledges.length; i++)
		{
			let cur = model.db.pledges[i];
			if(cur.projectID === id)
			{
				ans.push(cur);
			}
		}
		return ans;
	}

	static fetchPledgeClaims(model, id)
	{
		let ans = 0;
		for(let i = 0; i < model.db.past_support.length; i++)
		{
			let cur = model.db.pledges[i];
			if(cur.pledgeID === id)
			{
				ans++;
			}
		}
		return ans;
	}

	// TODO: figure out how to draw # of current supporters is renderPleges() function
	static appendPledges()
	{
		for(let i = 0; i < this.db.past_support.length; i++)
		{

		}
	}

	static createProject(model, name, type, story, goal, deadline)
	{
		for(let i = 0; i < model.db.projects.length; i++)
		{
			let cur = model.db.projects[i];
			if((cur.name === name) && (cur.creator === model.user.username))
			{
				alert("cannot make two projects with the same name by the same person.");
				return;
			}
		}
		// got through, no issues
		model.db.projects.push({"name": name, "creator": model.user.username, "type": type, "story": story, "amount": 0, "goal": goal, "deadline": deadline})
		alert("project created");
	}

	// TODO: add pledge, need to know project id
	static createPledge(model, amount, reward, max)
	{
		for(let i = 0; i < model.db.pledges.length; i++)
		{
			let cur = model.db.projects[i];
			if((cur.name === name) && (cur.creator === model.user.username))
			{
				alert("cannot make two projects with the same name by the same person.");
				return;
			}
		}
		// got through, no issues
		model.db.projects.push({"name": name, "creator": model.user.username, "type": type, "story": story, "amount": 0, "goal": goal, "deadline": deadline})
		alert("project created");
	}
}