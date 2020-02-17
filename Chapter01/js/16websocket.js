window.onload = () => {
    WEBSOCKET.init();
}

WEBSOCKET = {
    init() {
        var wsConnection;
        var chatBox = document.getElementById("chatWindow");
        var disconnectButton = document.getElementById("Disconnect");
        var connectButton = document.getElementById("Connect");
        var sendButton = document.getElementById("Send");
        var msgToSend = document.getElementById("msgSendText");
        disconnectButton.onclick = function() {
            wsConnection.close();
        }
        connectButton.onclick = function() {
            //Or the use of wss for secure WebSockets. IE: wss://studygroup.70480.com
            //Opens the WebSocket
            console.log('Attempt to connect to ws');
            wsConnection = new WebSocket('ws://studygroup.70480.com', ['soap', 'xmpp']);

            // event handler for when the WebSocket connection is established
            wsConnection.onopen = function() {
                chatBox.textContent = chatBox.textContent +
                    "System: Connection has been established";
            }
            //event handler for when the WebSocket encounters an error
            wsConnection.onerror = function(err) {
                //write an error to the screen
                NewLine();
                chatBox.value = chatBox.value + "System: Error Occurred. ";
            }
            wsConnection.onclose = function() {
                //write the connection has been closed.
                NewLine();
                chatBox.value = chatBox.value + "System: Connection has been closed.";
            }
            wsConnection.onmessage = function(msg) {
                //write message
                NewLine();
                chatBox.value = chatBox.value + "Them: " + msg.data;
            }
        }
        sendButton.onclick = function() {
            //check the state of the connection
            if (wsConnection.readyState == WebSocket.OPEN) {
                //send message to server.
                wsConnection.send(msgToSend.value);
            } else
                return;
            //show message in chat window.
            NewLine();
            chatBox.value = chatBox.value + "You: " + msgToSend.value;
            //clear message text box
            msgToSend.value = '';
        }
        //helper functions.
        function NewLine() {
            chatBox.textContent = chatBox.textContent + '\r\n';
        }
    },
}