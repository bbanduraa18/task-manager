const connectDB = require('./db/connect');
const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
require('dotenv').config()

app.use(express.json());
app.use('/api/v1/tasks', tasks);

const start = async () => {
	try {
		await connectDB(process.env.MONGO_URI);
		app.listen(5000, () => {
			console.log('Server is running on port 5000');
		});
	} catch (err) {
		console.log(err);
	}
}

start();