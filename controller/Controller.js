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
							model.supporterLogIn(info.body.username, info.body.budget);
							break;
					}
					model.search = model.user.username;
					model.by = "creator";
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
		model.search = "";
		model.by = "name";
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

	static addFunds(model, amt)
	{
		return new Promise((resolve, reject) =>
		{
			instance.post('/AddFunds',
			{
				"username": model.user.username,
				"amount": amt
			})
			.then(function(response)
			{
				console.log(response)
				let info = response.data;
				console.log("this is info:", info)
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
			.catch(function (error)
			{
				console.log(error);
				reject(error);
			});
		});
	}

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
				console.log("createpledge:", response)
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
					alert(`you claimed this pledge!`);
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

	static launchProject(model)
	{
		return new Promise((resolve, reject) =>
		{
			instance.post('/LaunchProject',
			{
				"projectID": model.cur_proj.projectID
			})
			.then(function(response)
			{
				let info = response.data;
				if(info.statusCode === 200)
				{
					alert("project successfully launched.");
					resolve(true);
				}
				else
				{
					alert("failed to launch project.")
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
				console.log("SEARCH PROJECT INFO:", info)
				if(info.statusCode === 200)
				{
					model.projects = info.body;
					resolve(true);
				}
				else
				{
					alert("no projects found")
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

	static dList(model)
	{
		return new Promise((resolve, reject) =>
		{
			instance.post('/dList',
			{
				"username": model.user.username
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
					alert("you have no projects")
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

	static aList(model)
	{
		return new Promise((resolve, reject) =>
		{
			instance.post('/aList',
			{})
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
					alert("no projects found")
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

	static supporterBudget(model)
	{
		return new Promise((resolve, reject) =>
		{
			console.log("username:", model.user.username)
			instance.post('/SupporterBudget',
			{
				"username": model.user.username
			})
			.then(function(response)
			{
				let info = response.data;
				console.log("suppBUDGET:", info)
				if(info.statusCode === 200)
				{
					model.user.budget = info.body;
					console.log("budget now:", model.user.budget)
					resolve(true);
				}
				else
				{
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

	static updateProject(model)
	{
		return new Promise((resolve, reject) =>
		{
			instance.post('/getProject',
			{
				"projectID": model.cur_proj.projectID
			})
			.then(function(response)
			{
				let info = response.data;
				if(info.statusCode === 200)
				{
					model.cur_proj = info.body;
					resolve(true);
				}
				else
				{
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

	static updatePledge(model)
	{
		return new Promise((resolve, reject) =>
		{
			instance.post('/GetPledge',
			{
				"pledgeID": model.cur_pl.pledgeID
			})
			.then(function(response)
			{
				let info = response.data;
				if(info.statusCode === 200)
				{
					model.cur_pl = info.body;
					resolve(true);
				}
				else
				{
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

	static reap()
	{
		return new Promise((resolve, reject) =>
		{
			instance.post('/Reap',
			{})
			.then(function(response)
			{
				let info = response.data;
				console.log(info)
				if(info.statusCode === 200)
				{
					alert("succesfully reaped old projects.")
					resolve(true);
				}
				else
				{
					alert("no old projects to reap.")
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
				console.log("supp act=", response)
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
}