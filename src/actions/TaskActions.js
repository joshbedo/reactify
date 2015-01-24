var AppDispatcher = require('../dispatcher/AppDispatcher');
var TaskConstants = require('../constants/TaskConstants');

// Handles actions for payloads.
var TaskActions = {

	receiveTasks: function (data) {
		AppDispatcher.handleViewAction({
			actionType: TaskConstants.RECEIVE_DATA,
			data: data
		});
	},

	create: function (text) {
		AppDispatcher.handleViewAction({
			actionType: TaskConstants.CREATE_TASK,
			text: text
		});
	},

	delete: function (id) { 
		AppDispatcher.handleViewAction({
			actionType: TaskConstants.DELETE_TASK,
			id: id
		});
	}

};

module.exports = TaskActions;