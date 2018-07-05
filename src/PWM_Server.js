var app = require('http').createServer(handler);
var io = require('socket.io').listen(app);
var fs = require('fs');
var b = require('bonescript');
var htmlPage = 'PWM.html';
var freq = 12000;

app.listen(8085);

function handler (req, res) {
  fs.readFile(htmlPage,
    function (err, data) {
      if (err) {
        res.writeHead(500);
        return res.end('Error loading file: ' + htmlPage);
      }
      res.writeHead(200);
      res.end(data);
    });
}

function onConnect(socket) {
    socket.on('analogWrite', handleAnalogWrite);
}

function handleAnalogWrite(message) {
    var data = JSON.parse(message);
    b.pinMode(data.pin, b.OUTPUT);
    b.analogWrite(data.pin, data.value,freq);
}
io.sockets.on('connection', onConnect);
