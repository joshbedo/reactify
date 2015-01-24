var TaskActions = require('../actions/TaskActions');

module.exports = {
	// Load mock data
	getTasks: function () {
		var data = JSON.parse(localStorage.getItem('tasks'));
		TaskActions.receiveTasks(data);
	}
	
};