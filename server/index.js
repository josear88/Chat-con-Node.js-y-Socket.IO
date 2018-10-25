var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static('client'));

app.get('/', function(req,res){
    res.status(200).send("hola");
})



var messages = [];

io.on('connection', function(socket){

    console.log("El cliente con ip"+ socket.handshake.address +" se ha conectado");

    socket.emit('messages', messages);

    socket.on('add-mesage', function(data){
        messages.push(data);
        io.sockets.emit('messages', messages);
    })
})

server.listen(6680, function(){
    console.log("Servidor escuchando");
})
