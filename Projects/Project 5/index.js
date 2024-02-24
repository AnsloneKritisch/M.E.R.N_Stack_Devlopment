const express = require('express');
const axios = require('axios');

const app = express()
const port = 3000

app.get('/', async (req, res) => {

  const options = {
    method: 'GET',
    url: 'https://love-calculator.p.rapidapi.com/getPercentage',
    params: {
      sname: 'Anslone',
      fname: 'Palak'
    },
    headers: {
      'X-RapidAPI-Key': 'a338918f7dmshe46c6554a8352bep1e0fa6jsn68ae8bfda132',
      'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
    }
  };

  try {

    const response = await axios.request(options);

    console.log(response.data);

  }

  catch (error) {
    console.error(error);
  }

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
