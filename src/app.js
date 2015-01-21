var React = require('react');
var _     = require('underscore');

var Quiz = require('./components/Quiz');

var data = [
	{ name: 'Mark Twain', books: ['The Adventures of Huckleberry'] },
	{ name: 'Joseph Condrad', books: ['Heart of Darkness'] },
	{ name: 'J.K Rowling', books: ['Harry Potter'] },
	{ name: 'Stephen King', books: ['The Shining'] },
	{ name: 'William Shakespear', books: ['Hamlet', 'MacBeth', 'Romeo and Juliet'] }
];

data.selectGame = function() {
	var books = _.shuffle(this.reduce(function(p, c, i) {
		return p.concat(c.books);
	}, [])).slice(0,4);

	var answer = books[_.random(books.length - 1)];

	return {
		books: books,
		author: _.find(this, function (author) {
			return author.books.some(function (title) {
				return title === answer;
			});
		})
	}
}

React.render(
  <Quiz data={data} />,
  document.getElementById('app')
);
