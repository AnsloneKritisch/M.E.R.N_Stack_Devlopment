const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fruitDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

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

const Fruit = mongoose.model('Fruit', fruitSchema);


Fruit.updateOne({ _id:"6513eb5911153dbb9b1b3fcc"}, {$set: { rating: 9 }})

.then(fruits => {
    console.log(fruits);
})
.catch(err => {
    console.log(err);
})





