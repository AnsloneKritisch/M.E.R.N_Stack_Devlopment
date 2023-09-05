const express = require('express');
let ejs = require('ejs');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index.ejs');
});




// io.on('connection', (socket) => {
//     console.log('a user connected');
// });

// io.on('connection', (socket) => {
//     console.log('a user connected');
//     socket.on('disconnect', () => {
//         console.log('user disconnected');
//     });
// });

// io.on('connection', (socket) => {
//     socket.on('chat message', (msg) => {
//         io.emit('chat message', msg);
//     });
// });


server.listen(3000, () => {
    console.log('listening on *:3000');
});