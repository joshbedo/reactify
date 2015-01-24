var React = require('react');
var _     = require('underscore');
var MockAPI = require('./MockAPI');
var TaskAPI = require('./utils/TaskAPI');

// Main Dashboard Component
var Dashboard = require('./components/Dashboard');

// Load Mock Data into localStorage.
MockAPI.init();

// Load Mock API Calls.
TaskAPI.getTasks();


React.render(
  <Dashboard />,
  document.getElementById('dashboard')
);
