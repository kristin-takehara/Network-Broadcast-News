//jshint esversion: 6
console.log('hello world');


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

server.listen(6969, '0.0.0.0', () => {
  console.log('server bound');
});