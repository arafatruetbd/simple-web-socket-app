const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
  console.log('Client connected');

  ws.on('message', (message) => {
    console.log(`Received message => ${message}`);

    // echo the message back to the client
    ws.send(`You said: ${message}`);
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});
