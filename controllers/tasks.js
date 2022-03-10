const getAllTasks = (req, res) => {
	res.send('get all items');
};

const createTask = (req, res) => {
	res.send('create new task');
};

const getOneTask = (req, res) => {
	res.send('get one task');
};

const updateTask = (req, res) => {
	res.send('update task');
};

const deleteTask = (req, res) => {
	res.send('delete task');
};

module.exports = {
	getAllTasks,
	createTask,
	getOneTask,
	updateTask,
	deleteTask
}