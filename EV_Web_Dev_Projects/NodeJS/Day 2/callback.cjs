const net = require('net');
const server = net.createServer((socket) => {
    socket.on('close', () => {
        console.log("Socket closed");
    });
});
server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});