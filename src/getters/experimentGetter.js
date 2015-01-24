/**
* Getter for various stores and building relationships without coupling
* Stores together
* NOTE: Still a work in progress
*/
module.exports = [
	'currentProject',
	'experiments',
	function (currentProjectStore, experimentStore) {
		var currentProjectId = currentProjectStore.getId();
		if (currentProjectId) {
			return experimentStore.getAll({
				project_id: currentProjectId
			});
		} else {
			return [];
		}
	}
];