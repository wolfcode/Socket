//var app = require('express')();
var server = require('http').createServer(function(req,resp) { console.log("test",req,resp);});
var io = require('socket.io')(server);

io.on('connection', function(socket){
  console.log('Server1 connected to Server2');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
  socket.on('server2', function(msg){
	console.log('server2',msg);
     io.emit('server2', "hello:"+msg);
  });
});

server.listen(8100, function(){
  console.log('listening on *:8100');
});

