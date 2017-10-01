//jshint esversion: 6
console.log('hello world');
const PORT = process.env.PORT || 6969;
const address = '0.0.0.0';
const clients =[];
const admin = '[ADMIN]';

const broadcast = (sender, message) =>clients
    .filter ( c => c!== sender) //filter out all who are NOT the sender of the message
    .forEach ( c => {
      c.write(message);
    });


const net = require('net');
const server = net.createServer ((client) => {
//client is a socket

//connection established
  console.log('client connected');

  //register client into 'clients' array
  clients.push( client );

  client.username = null;
  //prompt for username
  client.write('Enter Your username\n');

  client.on('data', (data) => {
      //the firse message should be te client's username
    if( client.username === null && client.username !== admin){
      client.username = data.toString().trim();
      client.write(`.:Welcome, ${client.username}:.  Begin chat!\n`);
    }else{
      //broadcase the message to all other clients
      broadcast(client, `[${client.username}]: ` + data.toString()); //pass in the 'client' sending the message and print
      }
     });
  client.on('end', () => {
  console.log('client disconnected');
  });
});

 //'connection' listeners
server.listen(PORT, address, () => {
  console.log('SERVER BCAST FROM ' + address + ':' + PORT);
});
server.on('error', (err) => {
  throw err;
});