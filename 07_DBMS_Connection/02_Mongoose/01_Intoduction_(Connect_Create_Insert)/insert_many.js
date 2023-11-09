const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fruitDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
});

const Fruit = mongoose.model('Fruit', fruitSchema);

const kiwi = new Fruit({
    name: 'Kiwi',
    rating: 10, 
    review: 'The best fruit'
});

const orange = new Fruit({
    name: 'Orange',
    rating: 8, 
    review: 'A very good fruit'
});

const banana = new Fruit({
    name: 'Banana',
    rating: 7, 
    review: 'A decent fruit'
});

// Use promises to handle the result of insertMany
Fruit.insertMany([kiwi, orange, banana])
    .then(() => {
        console.log('Successfully saved all the fruits');
    })
    .catch((err) => {
        console.error(err);
    });
