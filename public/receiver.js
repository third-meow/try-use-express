const wSocket = require('ws');
const ws = new wSocket('path-to-host');

ws.on('message', function(data){
  document.write(data);
});
