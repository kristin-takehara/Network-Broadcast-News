//jshint esversion: 6
console.log('hello world');

const PORT = process.env.PORT || 6969;
const address = '0.0.0.0';

///////////////JON'S CODE////////////
const net = require('net');
const server = new net.Socket();
server.connect(PORT, () => {
  console.log('connected to server');

  process.stdin.pipe(server);

  server.pipe(process.stdout);
});

server.on('end', () => {
  console.log('disconnected from server');
});

// const net =require('net');
// const client = net.createConnection({ port: 6969}, () => {
//   //'connect' listener
//   console.log('connected to server');

//   process.stdin.on('readable', () => {
//     const chunk = process.stdin.read();
//     console.log('USERNAME');
//   if(chunk !== null) {
//     client.write(chunk.toString());
//     }
//   });
// });

// client.on('end', () => {
//   console.log('disconnected from server');
// });

