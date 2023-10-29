const http = require("http").Server(app);
export const io = require("socket.io")(http);

io.on("connection", () =>{
    console.log("a user is connected")
})