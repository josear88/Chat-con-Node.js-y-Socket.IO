var socket = io.connect('http://192.168.1.53:6680', {'forceNew': true});

socket.on('messages', function(data){
    // console.log(data);
    render(data);
})

function render(data){

    var ultimo = data[data.length-1];

    if(ultimo == null){

    }else{
        
        var html = `<div class="message"><strong>${ultimo.text}</strong></div>`;

        var div_msgs = document.getElementById('user'+ultimo.id);
        div_msgs.innerHTML += html;
        div_msgs.scrollTop = div_msgs.scrollHeight;
    }



}


function addMesage(e){
    var message = {
        id : document.getElementById('id').value,
        text : document.getElementById('texto').value,
    }

    socket.emit('add-mesage', message);

    return false;
}
