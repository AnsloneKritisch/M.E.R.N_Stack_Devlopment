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
    name: {
        type: String,
        required: true
    },
    rating:
    {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});


// Create a model for the database -> which means we are creating a collection in DB

const Fruit = mongoose.model('Fruit', fruitSchema);


// Adding Data to the database

const Pineapple = new Fruit({
    name: 'Pineapple',
    rating: 9,
    review: 'Great fruit'
});


const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favouriteFruit: fruitSchema
});

const Person = mongoose.model('Person', personSchema);

const person = new Person({
    name: 'John',
    age: 40,
    favouriteFruit: Pineapple
})

person.save();
Pineapple.save();


