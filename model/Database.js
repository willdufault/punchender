// temp database class until sql working

export class Database
{
	constructor()
	{
		this.projects = [
			{"creator": "des1", "name": "first project", "type": "type1", "projectID": 1, "story": "story1", "goal": 100.25, "amount": 100.01, "launched": true, "deadline": "01012000"},
			{"creator": "des1", "name": "second project", "type": "type2", "projectID": 2, "story": "story2", "goal": 200.25, "amount": 200.01, "launched": true, "deadline": "02012000"},
			{"creator": "des1", "name": "third project", "type": "type3", "projectID": 3, "story": "story3", "goal": 300.25, "amount": 300.01, "launched": true, "deadline": "03012000"},
			{"creator": "des1", "name": "fourth project", "type": "type4", "projectID": 4, "story": "story4", "goal": 400.25, "amount": 400.01, "launched": true, "deadline": "04012000"},
		];
		this.pledges = [
			{"projectID": 1, "pledgeID": 1, "amount": 10, "reward": "reward1", "max": 10},
			{"projectID": 1, "pledgeID": 2, "amount": 20, "reward": "reward1", "max": 20},
			{"projectID": 2, "pledgeID": 3, "amount": 30, "reward": "reward2", "max": 30},
			{"projectID": 2, "pledgeID": 4, "amount": 40, "reward": "reward2", "max": 40},
			{"projectID": 3, "pledgeID": 5, "amount": 50, "reward": "reward3", "max": 50},
			{"projectID": 3, "pledgeID": 6, "amount": 60, "reward": "reward3", "max": 60},
			{"projectID": 4, "pledgeID": 7, "amount": 70, "reward": "reward4", "max": 70},
			{"projectID": 4, "pledgeID": 8, "amount": 80, "reward": "reward4", "max": 80},
		];
		this.users = [
			{"username": "sup1", "password": "pw", "role": "supporter", "budget": 100},
			{"username": "des1", "password": "pw", "role": "designer"},
			{"username": "adm1", "password": "pw", "role": "admin"},
		];
		this.past_support = [
			{"supporter": "sup1", "projectID": 1, "amount": 10},
			{"supporter": "sup1", "projectID": 2, "amount": 20},
			{"supporter": "sup1", "projectID": 3, "amount": 30},
			{"supporter": "sup1", "projectID": 4, "amount": 40},
			{"supporter": "sup1", "projectID": 1, "pledgeID": 1, "amount": 10},
			{"supporter": "sup1", "projectID": 2, "pledgeID": 2, "amount": 20},
			{"supporter": "sup1", "projectID": 3, "pledgeID": 3, "amount": 30},
			{"supporter": "sup1", "projectID": 4, "pledgeID": 4, "amount": 40},
		];
	}
}