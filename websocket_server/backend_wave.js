
const wSocket = require('ws');
const wss = new wSocket.Server({ port: 3081 });

wss.on('connection', function connection(ws) {
  ws.send('good day');
});
