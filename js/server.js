//jshint esversion: 6
console.log('hello world');
const port = 6969;
const address = '0.0.0.0';


const net = require('net');
const server = net.createServer ((socket) => {
  //'connection' listener
  console.log('client connected');
  socket.on('data', (data) => {
    console.log('[ADMIN]: ' + data.toString());
  });

  socket.on('end', () => {
    console.log('client disconnected');
  });

  socket.write('hello\r\n');
  socket.pipe(socket);
  });

server.on('error', (err) => {
  throw err;
});

server.listen(port, address, () => {
  console.log('SERVER BCAST FROM ' + address + ':' + port);
});