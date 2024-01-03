
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


const list = [];

app.get("/", function (req, res) {

  const currentDate = new Date();
  const day = currentDate.getDate();
  const month_name = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const m_name = month_name[currentDate.getMonth()];
  const year = currentDate.getFullYear();

  res.render("todoList.ejs",
    {

      day: day,
      month: m_name,
      year: year,
      todoItems: list

    });

})



app.post("/", function (req, res) {



  list.push(req.body.list);

  res.redirect("/");

})













app.listen(3000, function () {
  console.log("Server started on port 3000");
});
