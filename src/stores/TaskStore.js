var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var TaskConstants = require('../constants/TaskConstants');
var assign = require('object-assign');

// collection of todo items.
var _tasks = [];
var _selected = [];

// Method to load data from mock api
function loadTasks(data) {
	_tasks = data;
}

// Create a book item.
function create (text) {
	var id = Date.now();
	_tasks[id] = {
		id: id,
		text: text
	};
}

// Delete a book item.
function destroy (id) {
	delete _tasks[id];
}

var TaskStore = assign({}, EventEmitter.prototype, {

	// Get entire collection of books.
	getAll: function () {
		return _tasks;
	},

	emitChange: function () {
		this.emit('change');
	},

	addChangeListener: function (callback) {
		this.on('change', callback);
	},

	removeChangeListener: function (callback) {
		this.removeListener('change', callback);
	}
	
});

// Register callback with AppDispatcher.
AppDispatcher.register(function (payload) {
	debugger;
	var action = payload.action;
	var text;

	switch(action.actionType) {

		case TaskConstants.RECEIVE_DATA:
		  loadTasks(action.data);
		  break;

		default: 
			return true;
	}

	// If action was responded to, emit change event
	TaskStore.emitChange();
	return true;
});

module.exports = TaskStore;