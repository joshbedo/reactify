var React = require('react');

var Quiz = require('./components/Quiz');

React.render(
  <Quiz books={['The lord of rings', 'The illiad']} />,
  document.getElementById('app')
);
