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



Fruit.find()
    .then((fruits) => {

        // too see all the data into database
        console.log(fruits);

        // only see the name
        fruits.forEach((fruit) => {
            console.log(fruit.name);
        })

        // close the connection once we are done
        mongoose.connection.close();
    })

    .catch((err) => {
        console.error(err);
    });



