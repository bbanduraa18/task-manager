const mongoose = require('mongoose')

const connectionString = 'mongodb+srv://bandura:Galya228322@nodeexpressprojects.10gdg.mongodb.net/Task-Manager?retryWrites=true&w=majority'

mongoose.connect(connectionString)
	.then(() => console.log('Connected to the DB'))
	.catch((err) => console.log(err))