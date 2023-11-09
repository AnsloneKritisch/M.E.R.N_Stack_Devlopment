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


Fruit.deleteOne({ _id:"6513eb5911153dbb9b1b3fcc"})

.then(fruits => {
    console.log(fruits);
})
.catch(err => {
    console.log(err);
})


Fruit.deleteMany({ name: 'Apple' })

.then(fruits => {
    console.log(fruits);
})
.catch(err => {
    console.log(err);
})





