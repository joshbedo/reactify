var React = require('React');
var BookStore = require('../stores/BookStore');

function getBookState () {
	return {
		allBooks: BookStore.getAll()
	};
}

var BookComponent = React.createClass({

	// When component is initialized fetch data from store.
	getInitialState: function () {
		return getBookState();
	},

	// When component is attached add listener.
	componentDidMount: function () {
		BookStore.addChangeListener(this._onChange);
	},

	// When component is destroyed remove listener.
	componentWillUnmount: function () {
		BookStore.removeChangeListener(this._onChange);
	},

	// When state is changed refetch books.
	_onChange: function () {
		this.setState(getBookState());
	},

	propTypes: {
		title: React.PropTypes.string.isRequired
	},

	render: function () {
		return (
			<div allBooks={this.state.allBooks} />
		);
		// return (
		// 	<div><h4>{this.props.title}</h4></div>
		// );
	}
});

module.exports = BookComponent