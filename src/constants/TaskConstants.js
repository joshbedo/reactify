var keyMirror = require('react/lib/keyMirror');

// Define action constants
module.exports = keyMirror({
	CREATE_TASK: null, // Adds task
	DELETE_TASK: null, // Delete task
	RECEIVE_DATA: null, // Loads our mock data
	SET_SELECTED: null, // Selects a task
});