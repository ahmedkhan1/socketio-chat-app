const express = require('express');

const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);

io.on("connection", () =>{
    console.log("a user is connected")
})


module.exports = io;