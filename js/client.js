//jshint esversion: 6
console.log('hello world');


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

  client.write('world!\r\n');
});

  // process.stdin.on('end', () => {
  //   process.stdout.write('end');
  // });

// client.on('data', (data) => {
//   console.log(data.toString());
//   client.end();
// });

client.on('end', () => {
  console.log('disconnected from server');
});
