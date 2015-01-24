var React = require('React');
var Dashboard = require('./Dashboard');

module.exports = React.createClass({
  
	propTypes: {
		books: React.PropTypes.array.isRequired
	},

	// getInitialState: function () {
	// 	return this.props.data.selectGame();
	// },

  render: function() {
    return (
      <Dashboard className="dashboard">
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
