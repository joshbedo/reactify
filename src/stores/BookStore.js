var AppDispatcher = require('../dispatchers/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _books = {}; // collection of todo items.

// Create a book item.
function create (text) {
	var id = Date.now();
	_books[id] = {
		id: id,
		text: text
	};
}

// Delete a book item.
function destroy (id) {
	delete _books[id];
}

var BookStore = assign({}, EventEmitter.prototype, {

	// Get entire collection of books.
	getAll: function () {
		return _books;
	},

	emitChange: function () {
		this.emit(CHANGE_EVENT);
	},

	addChangeListener: function (callback) {
		this.on(CHANGE_EVENT, callback);
	},

	removeChangeListener: function (callback) {
		this.removeListener(CHANGE_EVENT, callback);
	}
});

module.exports = BookStore;