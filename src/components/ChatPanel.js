// ChatPanel.js
import React, { useState } from 'react';
import axios from 'axios';
import '../styles/ChatPanel.css';

const ChatPanel = ({ uimNumber }) => {
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');

    const sendMessage = () => {
        if (inputMessage.trim()) {
            // Send the message to the backend and handle the response
            axios.post('/api/send_message', { message: inputMessage })
                .then(response => {
                    // Add both user and system messages to the chat
                    setMessages([
                        ...messages, 
                        { type: 'user', text: inputMessage }, 
                        { type: 'system', text: response.data.response }
                    ]);
                    setInputMessage(''); // Clear the input field after sending
                })
                .catch(error => console.error('Error sending message:', error));
        }
    };

    return (
        <div className="chat-panel">
            <div className="chat-top-bar">
                <div className="uim-number">{uimNumber}</div>
                <div className="chat-panel-icons">
                    <div className="icon minimize">-</div>
                    <div className="icon lock">lock</div>
                    <div className="icon unlock">unlock</div>
                    <div className="icon delete">trash</div>
                </div>
            </div>
            <div className="chat-messages">
                {messages.map((msg, index) => (
                    <div key={index} className={`chat-message ${msg.type}`}>{msg.text}</div>
                ))}
            </div>
            <div className="chat-input-area">
                <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Enter your message"
                />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
};

export default ChatPanel;
