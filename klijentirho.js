const net = require('net');
const readline = require('readline');

const client = net.createConnection({host:'localhost', port:8080});


client.setTimeout(15);

client.on('timeout', ()=>{

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });




    rl.question('Unesi poruku: ', (poruka) => {
    client.write(poruka);
});
client.on('data',(data) => {
    console.log(data.toString());
});
});