const net = require('net');



//server
const server = net.createServer((socket) => {
        socket.end('goodbye\n');
}).on('error', (err) => {
    // handle errors here
    throw err;
}).on('connection',(socket)=> {
    console.log('Dosla');
}).on('pisanje',client=> {
    console.log('pisanje');
});

// grab an arbitrary unused port.
server.listen({
    port:8018},() => {
    console.log('opened server on', server.address());
});


//klijent

const client = net.createConnection({ port:80 ,host:'pmf.unsa.ba'}, () => {
    //'connect' listener
    console.log('connected to server!');
    client.write('world!\r\n');
});
client.on('data', (data) => {
    console.log(data.toString());
    client.end();
});
client.write('pisanje', () => {
console.log('haha');
});
client.on('end', () => {
    console.log('disconnected from server');
});


