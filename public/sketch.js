var socket;
var PORT = process.env.PORT || 3001;

function setup() {
  createCanvas(1200, 1200);
  background(51);

  socket = io.connect(PORT);
  socket.on("mouse", newDrawing);
}

function newDrawing(data) {
  noStroke();
  fill(0, 0, 255);
  ellipse(data.x, data.y, 10, 10);
}

function mouseDragged() {
  var data = {
    x: mouseX,
    y: mouseY
  };

  socket.emit("mouse", data);

  noStroke();
  fill(255, 0, 0);
  ellipse(mouseX, mouseY, 10, 10);
}

function draw() {}
