const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/todolistDB');

const itemSchema = new mongoose.Schema({
  name: String
});

const List = mongoose.model('List', itemSchema);



// new model 

const cis = new mongoose.Schema({
  name: String,
  item: [itemSchema]
});

const cl = mongoose.model('cl', cis);




const item1 = new cl({

  name: "Let's Do it "

});

const item2 = new cl({

  name: "Let's Do it please "

});

const item3 = new cl({

  name: "Let's Do it too "
});

const defaultItems = [item1, item2, item3];




app.get("/", function (req, res) {

  List.find()

    .then((foundItems) => {
      console.log(foundItems);
      res.render("list", { listTitle: "today", newListItems: foundItems });

    })



});

app.post("/", function (req, res) {

  const item = req.body.newItem;

  console.log(item);


  const newitem = new List({

    name: item

  });

  newitem.save();

  res.redirect("/");

});


app.post("/del", function (req, res) {
  
  let delitem = req.body.delitem;
  console.log(delitem);

  List.deleteOne({ _id : delitem })

    .then(() => {
      console.log("deleted");
      res.redirect("/");
    })

    .catch((err) => {
      console.log(err);
    })
  
});

app.get("/:customListName", function (req, res) {

  const customListName = req.params.customListName;
  console.log(customListName);

  const nl = new cl({
    name: customListName ,
    item: defaultItems
  });

  nl.save();

  
});

app.get("/work", function (req, res) {
  res.render("list", { listTitle: "Work List", newListItems: workItems });
});

app.get("/about", function (req, res) {
  res.render("about");
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
