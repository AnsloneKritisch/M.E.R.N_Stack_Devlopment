const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

// Your OpenAI API key
const apiKey = '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';

// Handle GET requests on the home page
// ... Other code ...

app.get('/', async (req, res) => {
    const message = 'hi'; // Predefined message

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
    };

    const data = {
        messages: [{ role: 'system', content: 'You are a helpful assistant.' }, { role: 'user', content: message }],
        model: 'gpt-3.5-turbo',
    };

    try {
        const response = await axios.post('https://api.openai.com/v1/chat/completions', data, { headers });
        const reply = response.data.choices[0].message.content;
        res.send(reply);
    } 
    
    catch (error) {
        console.error(error.response.data);
        res.status(500).send('An error occurred.');
    }
});



app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
