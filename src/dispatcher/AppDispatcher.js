// var Dispatcher = require('./Dispatcher');
var Dispatcher = require('flux').Dispatcher;
var AppDispatcher = new Dispatcher();
var assign = require('object-assign');

// var AppDispatcher = assign({}, Dispatcher.prototype, {
// 	// bridge function between the view and dispatcher action.
// 	handleViewAction: function (action) {
// 		this.dispatch({
// 			source: 'VIEW_ACTION',
// 			action: action
// 		});
// 	}
// });
AppDispatcher.handleViewAction = function (action) {
	this.dispatch({
		source: 'VIEW_ACTION',
		action: action
	});
}

module.exports = AppDispatcher;