const io = require("socket.io")(http);

io.on("connection", () =>{
    console.log("a user is connected")
})