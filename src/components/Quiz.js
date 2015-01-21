var React = require('React');
var Book = require('./Book');

module.exports = React.createClass({
	propTypes: {
		books: React.PropTypes.array.isRequired
	},
	getInitialState: function () {
		return this.props.data.selectGame();
	},
  render: function() {
    return (
      <div className="quiz">
      	<div className="row">
      		<div class="col-md-7">
      			{this.state.books.map(function (book) {
      				return <Book title={book} />
      			}, this)}
      		</div>
      		<div class="col-md-1"></div>
      	</div>
      </div>
    );
  }
});
