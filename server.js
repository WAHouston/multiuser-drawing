var express = require("express");
var app = express();
var PORT = process.env.PORT || 3001;
var server = app.listen(PORT);

app.use(express.static("public"));

var socket = require("socket.io");
var io = socket(server);

io.sockets.on("connection", newConnection);

function newConnection(socket) {
  console.log("new connection: " + socket.id);

  socket.on("mouse", mouseMsg);

  function mouseMsg(data) {
    /*This sends the message to everyone except yourself*/
    socket.broadcast.emit("mouse", data);
    /*This sends the message to everyone including yourself*/
    // io.sockets.emit('mouse', data);
  }
}
