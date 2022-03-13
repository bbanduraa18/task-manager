const getAllTasks = (req, res) => {
	res.send('get all tasks');
};

const createTask = (req, res) => {
	res.send(req.body);
};

const getOneTask = (req, res) => {
	res.send({ id: req.params.id });
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