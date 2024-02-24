const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/list') ;

const cis = new mongoose.Schema({
    name: String,
    item: [itemSchema]
  });
  
  const cl = mongoose.model('cl', cis);
item1.save();


