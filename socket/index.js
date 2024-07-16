import { Server } from "socket.io";
import { createServer } from "http";
import express from "express";

// Initialize Express
const app = express();

// HTTP Server
const server = createServer(app);

// Server Listens to Port...
server.listen(9000, () => {
    console.log("Server Running on - ", 9000);
});

// Default Route
app.get("/", (req, res) => {
    res.send("Server is Running");
});

// Initialize Socket...
const io = new Server(server, {
    cors: {
        origin: "*"
    }
});

let users = [];

const addUser = (userData, socketId) => {
    if (users.some(user => user.sub === userData.sub)) {
        return console.log("User Exists");
    } 
    users.push({ ...userData, socketId });
    console.log(users);
};

const getUser = (userId) => {
    return users.find(user => user.sub === userId);
};

//Connection to socket
io.on('connection', (socket) => {
    console.log('user connected');

    socket.on("joinRoom", userData => {
        addUser(userData, socket.id);
        // io.emit("getUsers",users)
    });

    socket.on("sendMessage", (data) => {
        const user = getUser(data.receiverId);
        if (user && user.socketId) {
            socket.to(user.socketId).emit('getMessage', data);
        } else {
            console.error('User not found or socketId is undefined for receiverId:', data.receiverId);
        }
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
        users = users.filter(user => user.socketId !== socket.id);
    });
});
