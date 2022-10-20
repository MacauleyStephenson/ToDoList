'use: strict';

export default class Model {
	constructor() {
		this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
		this.projects = JSON.parse(localStorage.getItem('projects')) || [
			{ id: 1, name: 'uncategorised' },
		];
	}
}