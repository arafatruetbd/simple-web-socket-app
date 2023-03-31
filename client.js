const WebSocket = require('ws');

const ws = new WebSocket('ws://localhost:8080');

ws.addEventListener('open', () => {
  console.log('Connected to WebSocket server');

  // send a message to the server
  ws.send('Hello from the client!');
});

ws.addEventListener('message', (event) => {
  console.log(`Received message => ${event.data}`);
});

ws.addEventListener('close', () => {
  console.log('Disconnected from WebSocket server');
});
