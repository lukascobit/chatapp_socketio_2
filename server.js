const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const socket = require('socket.io');
const io = socket(server);

let users = [];

const messages = {
    general: [],
    alt: [],
    songs: [],
    convos: []
}

io.on("connection",socket=>{
    socket.on("join server",(username)=>{
        const user = {
            username,
            id: socket.id
        };
        users.push(user);
        io.emit("new user",users);
    });

    socket.on("join room",(roomName,cb)=>{
        socket.join(roomName);
        cb(messages[roomName])
        socket.emit("joined", messages[roomName]);
    });
    socket.on("send message")
});

server.listen(3000,()=> console.log(`running on port 3000`))
