import axios from "axios";

var instance = axios.create({
	baseURL: "https://4q26r3x548.execute-api.us-east-1.amazonaws.com/Prod/"
});

export class Controller
{
	static logIn(model, user)
	{
		return new Promise((resolve, reject) =>
		{
			instance.post('/LogIn',
			{
				"username": user,
			})
			.then(function(response)
			{
				// console.log(response)
				let info = response.data;
				if(info.statusCode === 200)
				{
					switch(info.body.role)
					{
						case "admin":
							model.adminLogIn(info.body.username)
							break;
						case "designer":
							model.designerLogIn(info.body.username);
							break;
						case "supporter":
							model.supporterLogIn(info.body.username);
							break;
					}
					alert(`welcome, ${info.body.username} (${info.body.role})!`);
					resolve(true);
				}
				else
				{
					alert("login failed.");
					resolve(false);
				}
			})
			.catch(function (error)
			{
				console.log(error);
				reject(error);
			});
		});
	}

	static logOut(model, redrawPage)
	{
		model.logOut();
	}

	static register(user, role)
	{
		return new Promise((resolve, reject) =>
		{
			instance.post('/Register',
			{
				"username": user,
				"role": role
			})
			.then(function(response)
			{
				// console.log(response)
				let info = response.data;
				if(info.statusCode === 200)
				{
					alert("successfully registered");
					resolve(true);
				}
				else
				{
					alert("failed to register.");
					resolve(false);
				}
			})
			.catch(function (error)
			{
				console.log(error);
				reject(error);
			});
		});
	}

	static createProject(model, name, type, story, goal, deadline)
	{
		return new Promise((resolve, reject) =>
		{
			instance.post('/Project',
			{
				"creator": model.user.username,
				"name": name,
				"type": type,
				"story": story,
				"goal": goal,
				"deadline": deadline
			})
			.then(function(response)
			{
				console.log(response)
				let info = response.data;
				if(info.statusCode === 200)
				{
					alert(`successfully added project \"${name}\"`);
					resolve(true);
				}
				else
				{
					alert(`failed to add project \"${name}\".`);
					resolve(false);
				}
			})
			.catch(function (error)
			{
				console.log(error);
				reject(error);
			});
		});
	}

	// TODO: could manually add pledge to model, this idea sucks
	static createPledge(model, amt, reward, max)
	{
		// console.log(model.cur_proj.projectID, amt, reward, max)
		return new Promise((resolve, reject) =>
		{
			instance.post('/Pledge',
			{
				"projectID": model.cur_proj.projectID,
				"amount": amt,
				"reward": reward,
				"maxSupporter": max
			})
			.then(function(response)
			{
				console.log(response)
				let info = response.data;
				console.log("this is info:", info)
				if(info.statusCode === 200)
				{
					alert("successfully added pledge");
					resolve(true);
				}
				else
				{
					alert("failed to add pledge.");
					resolve(false);
				}
			})
			.catch(function (error)
			{
				console.log(error);
				reject(error);
			});
		});
	}

	static claimPledge(model, amt)
	{
		return new Promise((resolve, reject) =>
		{
			instance.post('/ClaimPledge',
			{
				"pledgeID": model.cur_pl.pledgeID,
				"projectID": model.cur_proj.projectID,
				"pay": amt,
				"username": model.user.username
			})
			.then(function(response)
			{
				console.log(response)
				let info = response.data;
				console.log("this is info:", info)
				if(info.statusCode === 200)
				{
					alert(`you claimed this pledge! (refresh to update)`);
					resolve(true);
				}
				else
				{
					alert(`claim pledge failed.`);
					resolve(false);
				}
			})
			.catch(function (error)
			{
				console.log(error);
				reject(error);
			});
		});
	}

	static deleteProject(model)
	{
		return new Promise((resolve, reject) =>
		{
			instance.post('/DeleteProject',
			{
				"projectID": model.cur_proj.projectID
			})
			.then(function(response)
			{
				let info = response.data;
				if(info.statusCode === 200)
				{
					alert("project successfully deleted.");
					resolve(true);
				}
				else
				{
					alert("failed to delete project.")
					resolve(false);
				}
			})
			.catch(function (error)
			{
				console.log(error);
				reject(error);
			});
		});
	}

	static searchProjects(model)
	{
		return new Promise((resolve, reject) =>
		{
			instance.post('/Search',
			{
				"by": model.by,
				"search": model.search
			})
			.then(function(response)
			{
				let info = response.data;
				console.log(info)
				if(info.statusCode === 200)
				{
					model.projects = info.body;
					resolve(true);
				}
				else
				{
					alert("somehow, search projects failed... idk")
					resolve(false);
				}
			})
			.catch(function (error)
			{
				console.log(error);
				reject(error);
			});
		});
	}

	static reviewSupporterActivity(model)
	{
		return new Promise((resolve, reject) =>
		{
			console.log(model.user.username)
			instance.post('/ReviewSupporterActivity',
			{
				"supporter": model.user.username
			})
			.then(function(response)
			{
				model.supp_activity = response.data.body;
				console.log(response)
				resolve(true);
			})
			.catch(function(error)
			{
				console.log(error);
				reject(error);
			});
		});	
	}

	static directSupport(model, amt)
	{
		return new Promise((resolve, reject) =>
		{
			instance.post('/directsupport',
			{
				"username": model.user.username,
				"amount": amt,
				"projectID": model.cur_proj.projectID
			})
			.then(function(response)
			{
				let info = response.data;
				console.log(info)
				// model.supp_activity = response.data.body;
				if(info.statusCode === 200)
				{
					alert("successfully added funds.");
					resolve(true);
				}
				else
				{
					alert("failed to add funds.");
					resolve(false);
				}
			})
			.catch(function(error)
			{
				console.log(error);
				reject(error);
			});
		});	
	}

	static deletePledge(model)
	{
		return new Promise((resolve, reject) =>
		{
			instance.post('/DeletePledge',
			{
				"pledgeID": model.cur_pl.pledgeID
			})
			.then(function(response)
			{
				let info = response.data;
				console.log(info)
				// model.supp_activity = response.data.body;
				if(info.statusCode === 200)
				{
					alert("successfully deleted pledge.");
					resolve(true);
				}
				else
				{
					alert("failed to delete pledge.");
					resolve(false);
				}
			})
			.catch(function(error)
			{
				console.log(error);
				reject(error);
			});
		});	
	}




	// fake fetch functions

	static fetchSupporterActivity1(model)
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