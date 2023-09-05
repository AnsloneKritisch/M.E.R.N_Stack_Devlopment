const express = require('express')
const app = express()
const axios = require('axios');
const port = 3000


app.get('/', (req, res) => {

  const apiUrl = 'https://www.boredapi.com/api/activity/';

    axios.get(apiUrl)
    
        .then((response) => {
        
            console.log('Data fetched successfully:', response.data);

            const todayQuote = response.data.activity;

            res.send(todayQuote);
        })

        .catch(error => {

            console.error('Error fetching data:', error);

          });

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
