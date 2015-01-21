var AppDispatcher = require('../dispatcher/AppDispatcher');


// Handles actions for payloads.
var BookAction = {

	create: function (text) {
		// TODO: Replace this with `action` constants
		AppDispatcher.handleViewAction({
			actionType: 'BOOK_CREATE',
			text: text
		});
	},

	destroy: function (id) { 
		AppDispatcher.handleViewAction({
			actionType: 'BOOK_DESTROY',
			id: id
		});
	}

};

module.exports = BookAction;