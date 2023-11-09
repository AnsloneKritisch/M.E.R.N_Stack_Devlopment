// Import Mongoose

const mongoose = require('mongoose');

// Connect with the database
// just by writing the name of the database it will automatically create and connect

mongoose.connect('mongodb://localhost:27017/fruitDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Create a schema for the database -> a blueprint for the database or the struture of DB

const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
});

// Create a model for the database -> which means we are creating a collection in DB

const Fruit = mongoose.model('Fruit', fruitSchema);


// Adding Data to the database

const fruit = new Fruit({
    name: 'Apple',
    rating: 5,
    review: 'Great fruit'
});

// Saving the data

fruit.save();

