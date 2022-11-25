export class Project
{
	constructor(name, story, type, creator, goal)
	{
		this.name = name;  // name of project (string)
		this.story = story;  // this project's story (string)
		this.type = type;  // this project's type (string)
		this.creator = creator;  // email of designer that created this project
		this.goal = goal;  // goal for this project (float)
		this.amount = 0;  // current amount out of goal (float)
		this.launched = false;  // is project active/launched (bool)
		this.deadline = "FULcrum. COME IN. yuuuuuUUUHH! YOdie! GANG!";  //? deadline for project, (string?/Date?)
		this.pledges = [];  // list of pledges for this project (list(Pledge))
	}
}