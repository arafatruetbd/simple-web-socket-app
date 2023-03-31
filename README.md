# simple-web-socket-app
WebSockets provide a bi-directional communication channel between the client and the server, allowing real-time communication between them. In a Node.js application, you can implement real-time communication using the "ws" (WebSocket) module.

# server
In server side, we create a WebSocket server using the ws module and listen on port 8080. When a client connects, the server logs a message to the console and adds a message event listener to the WebSocket object. When the client sends a message, the server logs the message to the console and echoes it back to the client.

# client
In client side, we create a WebSocket object and connect to the server at ws://localhost:8080. When the WebSocket connection is opened, we log a message to the console and send a message to the server. When the server sends a message back, we log the message to the console. Finally, when the WebSocket connection is closed, we log a message to the console.

# Run
At first, run server.js file by running node server.js and the run client.js file by putting node client.js command in terminal. Thats all.