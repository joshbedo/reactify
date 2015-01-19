var React = require('React');
var Book = require('./Book');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="quiz">
        {this.props.books.map(function (book) {
        	return <Book title={book} />
        })}
      </div>
    );
  }
});
