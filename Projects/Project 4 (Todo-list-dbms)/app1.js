const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/list') ;

const listSchema = new mongoose.Schema({
    name: String
});

const List = mongoose.model('List', listSchema);

const item1 = new List({

    name: "Let's Do it "

});

item1.save();


