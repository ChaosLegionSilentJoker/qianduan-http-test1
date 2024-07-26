import io from 'socket.io-client';
const socket = io('ws://127.0.0.1/ws');
socket.on('connect',()=>{
    console.log('Connected to server');
});

socket.on('randomNumber',(data)=>{
    console.log('Received random number:',data);
    document.getElementById('randomNumber').textContent='Random Number:'+data;
})