import openSocket from 'socket.io-client';

const socket = openSocket('http://localhost:8000');

function subscribeToServer(onMessage, onError, onClose, onOpen) {
    socket.on('message', onMessage);
    socket.on('error', onError);
    socket.on('close', onClose);
    socket.on('open', onOpen);

    socket.emit('subscribeToTimer', 1000);
}


export { subscribeToServer };