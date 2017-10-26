const net = require('net');
var niz=[];

const server = net.createServer((socket) => {
        socket.on('data', (data) => {
            for (var i=0; i<niz.length; i++){
                niz[i].write(data);
            }
          console.log(data.toString());
        });
    niz.push(socket);
}).on('error', (err) => {
    console.log("Greska");
    throw err;
});


server.listen({
    host: 'localhost',
    port: 8080
}, () =>{
    console.log('opened server on', server.address());
});