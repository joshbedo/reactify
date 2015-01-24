module.exports = {
	// Load mock data
	init: function () {
		localStorage.clear();
		localStorage.setItem('tasks', JSON.stringify([
			{
				id: 1422129851173,
				text: 'random task text',
				completed: false
			},
			{
				id: 1422129876350,
				text: 'another random task',
				completed: false
			},
			{
				id: 1422129896917,
				text: 'another random test task',
				completed: false
			}
		]))
	}
};