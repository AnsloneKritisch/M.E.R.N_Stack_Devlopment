const express = require('express')
const app = express()
const axios = require('axios');
const port = 3000

// This code snippet defines an asynchronous function with two parameters: req and res. The async keyword indicates that the function will return a promise.


app.get('/', async(req, res) => {
    

    const response = await axios.get('https://www.boredapi.com/api/activity/');

    // The await axios.get code snippet is used to make an HTTP GET request using the Axios library in JavaScript. The await keyword is used to wait for the promise returned by the axios.get function to resolve before moving on to the next line of code. This allows you to handle the response from the GET request synchronously.



    console.log(response.data);

    res.send(response.data.activity);



 

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
