const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://bandura:Galya228322@nodeexpressprojects.10gdg.mongodb.net/Task-Manager?retryWrites=true&w=majority';

const connectDB = (url) => {
	return mongoose.connect(connectionString,
		{
			useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: false,
			useUnifiedTopology: true
		})
};

module.exports = connectDB;