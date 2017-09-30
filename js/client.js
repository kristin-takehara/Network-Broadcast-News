//jshint esversion: 6
console.log('hello world');

const port = 6969;
const address = '0.0.0.0';

const net =require('net');
const client = net.createConnection({ port: 6969}, () => {
  //'connect' listener
  console.log('connected to server');

  process.stdin.on('readable', () => {
    const chunk = process.stdin.read();
  if(chunk !== null) {
    client.write(chunk.toString());
    }
  });
});

client.on('end', () => {
  console.log('disconnected from server');
});
