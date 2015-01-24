var Promise = require('es6-promise');
var assign = require('object-assign');

var _callbacks = [];
var _promises = [];

var Dispatcher = function() {};
Dispatcher.prototype = assign({}, Dispatcher.prototype, {
	
	// Register a Store's callback.
	register: function (callback) {
		_callbacks.push(callback);
		return _callbacks.length - 1;
	},

	// Dispatch the payload from the action.
	dispatch: function (payload) {
		var resolves = [];
		var rejects = [];

		_promises = _callbacks.map(function (_, i) {
			return new Promise(function (resolve, reject) {
				resolves[i] = resolve;
				rejects[i] = reject;
			});
		});

		// Dispatch callbacks and resolve/reject promises.
		_callbacks.forEach(function (callback, i) {
			Promise.resolve(callback(payload)).then(function () {
				resolves[i](payload);
			}, function () {
				rejects[i](new Error('Dispatcher callback unsuccessful'));
			});
		});
		_promises = [];
	}
});

module.exports = Dispatcher;