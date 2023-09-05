const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);


app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/chat.html');
});

const users = {};

io.on('connection', (socket) => {

    socket.on('new-user-joined', (name) => {
        console.log(name);
        users[socket.id] = name;
        socket.broadcast.emit('user-joined', name);

    });

    socket.on('send', (message) => {
        socket.broadcast.emit('receive', { message: message, name: users[socket.id] });
    });
});

server.listen(3000, () => {
    console.log('listening on *:3000');
});