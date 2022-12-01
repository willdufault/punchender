import { Designer } from "../model/Designer";
import { Supporter } from "../model/Supporter";
import { Admin } from "../model/Admin";
import { Project } from "../model/Project";

var base_url = "https://g6kz80jtk5.execute-api.us-east-1.amazonaws.com/Prod/";

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
		let data =
		{
			"username": user,
			"password": pw,
			"role": role
		};
		let body = JSON.stringify(data);
		let xhr = new XMLHttpRequest();
		let add_url = (base_url + "register");
		xhr.open("POST", add_url, true);
		xhr.send(body);
		xhr.onloadend = function () {
		if (xhr.readyState === XMLHttpRequest.DONE)
		{
			// console.log(JSON.parse(xhr.response).statusCode)
			let code = JSON.parse(xhr.response).statusCode
			if(code === 200)
			{
				console.log(code)
				alert("successfully registered.");
			}
			else
			{
				alert("cannot register. there is already a user with that name.");
			}
		}
		else
		{
			alert("Error: " + xhr.response.statusCode);
		}
		console.log(xhr.response)
		}
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
		let data =
		{
			"name": name,
			"type": type,
			"story": story,
			"goal": goal,
			"deadline": deadline
		};
		let body = JSON.stringify(data);
		let xhr = new XMLHttpRequest();
		let add_url = base_url + "project"
		xhr.open("POST", add_url, true);
		xhr.send(body);
		xhr.onloadend = function () {
		let info = JSON.parse(xhr.response)
		if(xhr.readyState === XMLHttpRequest.DONE) 
		{
			console.log(JSON.parse(xhr.response).statusCode);
			if(info.code === 200)
			{
				console.log(info.code);
				alert("successfully registered.");
			}
			else
			{
				alert("error occurred. cannot create project.");
			}
		}
		else
		{
			alert("Error: " + info.statusCode);
		}
		console.log(xhr);
		}
	}

	// TODO: add pledge, need to know project id
	// static createPledge(model, amount, reward, max)
	// {
	// 	for(let i = 0; i < model.db.pledges.length; i++)
	// 	{
	// 		let cur = model.db.projects[i];
	// 		if((cur.name === name) && (cur.creator === model.user.username))
	// 		{
	// 			alert("cannot make two projects with the same name by the same person.");
	// 			return;
	// 		}
	// 	}
	// 	// got through, no issues
	// 	model.db.projects.push({"name": name, "creator": model.user.username, "type": type, "story": story, "amount": 0, "goal": goal, "deadline": deadline})
	// 	alert("project created");
	// }
}