const socket = io();

const chatBox = document.getElementById('chat-box');
const messageInput = document.getElementById('message');
const usernameInput = document.getElementById('username');

socket.on('message', function(msg){
    let p = document.createElement('p');
    p.textContent = msg;
    chatBox.appendChild(p);
    chatBox.scrollTop = chatBox.scrollHeight;
});

function sendMessage() {
    const message = messageInput.value;
    const username = usernameInput.value || "Anonymous";

    if(message.trim() !== "") {
        socket.send(`${username}: ${message}`);
        messageInput.value = '';
    }
}
