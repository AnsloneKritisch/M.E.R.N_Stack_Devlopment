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

const item1 = new List({

  name: "Let's Do it "

});

const item2 = new List({

  name: "Let's Do it please "

});

const item3 = new List({

  name: "Let's Do it too "
});

const defaultItems = [item1, item2, item3];


List.insertMany(defaultItems)

  .then(() => {
    console.log('Successfully saved all the fruits');
  })
  .catch((err) => {
    console.error(err);
  });

app.get("/", function (req, res) {

  List.find()

    .then((foundItems) => {
      console.log(foundItems);
    })


  // res.render("list", { listTitle: "today", newListItems: items });

});

app.post("/", function (req, res) {

  const item = req.body.newItem;

  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
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
