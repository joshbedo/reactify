var React = require('React');
var TaskStore = require('../stores/TaskStore');

function getTasksState () {
	return {
		allTasks: TaskStore.getAll()
	};
}

var DashboardComponent = React.createClass({

	// When component is initialized fetch data from store.
	getInitialState: function () {
		return getTasksState();
	},

	// When component is attached add listener.
	componentDidMount: function () {
		TaskStore.addChangeListener(this._onChange);
	},

	// When component is destroyed remove listener.
	componentWillUnmount: function () {
		TaskStore.removeChangeListener(this._onChange);
	},

	// When state is changed refetch books.
	_onChange: function () {
		this.setState(getTasksState());
	},

	propTypes: {
		title: React.PropTypes.string.isRequired
	},

	render: function () {
		return (
      <div className="dashboard">
      	<div className="row">
      		<div class="col-md-7">
      			{this.state.allTasks.map(function (task) {
      				return <div>{task.text}</div>
      			}, this)}
      		</div>
      		<div class="col-md-1"></div>
      	</div>
      </div>
		);
	}
});

module.exports = DashboardComponent