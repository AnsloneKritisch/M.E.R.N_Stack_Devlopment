var socket = io();

const form = document.getElementById('send-container');
const messageInput = document.getElementById('messageIn');

const messageContainer = document.querySelector("chat-container");

const  name = prompt("Enter your name : ");
socket.emit('new-user-joined', name);

