const express = require("express");
const http = require("http");
const app = express();
const path = require("path");
const {Server} = require("socket.io");
const server = http.createServer(app);

const io = new Server(server)
 io.on("connection",(socket)=>{
socket.on("user-message",(message)=>{
    console.log("A new user message", message)
    io.emit("msg", message)
})
})

app.use(express.static(path.resolve("./public")));
app.get("/", (req, res) => {
  res.sendFile("/public/index.html");
});

server.listen(5009, () => console.log(`Server running at 5009`));
