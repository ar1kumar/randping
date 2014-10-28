var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendfile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(content){
    io.emit('chat message', content);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});