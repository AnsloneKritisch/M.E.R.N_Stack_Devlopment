// Reference -> https://mongoosejs.com/docs/validation.html

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fruitDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const fruitSchema = new mongoose.Schema({
    name: String,
    rating:
    {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const Fruit = mongoose.model('Fruit', fruitSchema);



// Adding wrong Data to the database

// const fruit = new Fruit({
//     name: 'Apple',
//     rating: 35,
//     review: 'Great fruit'
// });


// It is showing us error 


// Adding The right Data to the database


const fruit = new Fruit({
    name: 'Mango',
    rating: 3,
    review: 'Great fruit'
});



// Saving the data

fruit.save();


