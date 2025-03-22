import React, { useState } from 'react';
import './Messages.css';

const MessagesComponent = () => {
  const [messages] = useState([
    { 
      id: 1, 
      user: 'John Doe', 
      avatar: '👨', 
      lastMessage: 'Halo, apa kabar?', 
      time: '10:30',
      conversation: [
        { id: 1, sender: 'John Doe', text: 'Halo!', time: '10:15', isMe: false },
        { id: 2, sender: 'Me', text: 'Hai John!', time: '10:20', isMe: true },
        { id: 3, sender: 'John Doe', text: 'Halo, apa kabar?', time: '10:30', isMe: false }
      ]
    },
    { 
      id: 2, 
      user: 'Jane Smith', 
      avatar: '👩', 
      lastMessage: 'Jadi kapan kita meeting?', 
      time: 'Kemarin',
      conversation: [
        { id: 1, sender: 'Jane Smith', text: 'Hai, bagaimana projectnya?', time: 'Kemarin 15:20', isMe: false },
        { id: 2, sender: 'Me', text: 'Sudah hampir selesai, tinggal beberapa revisi', time: 'Kemarin 15:25', isMe: true },
        { id: 3, sender: 'Jane Smith', text: 'Bagus! Jadi kapan kita meeting?', time: 'Kemarin 15:30', isMe: false }
      ]
    },
    { 
      id: 3, 
      user: 'Bob Johnson', 
      avatar: '🧑', 
      lastMessage: 'Terima kasih atas infonya!', 
      time: 'Sen',
      conversation: [
        { id: 1, sender: 'Me', text: 'Halo Bob, ini dokumen yang kamu minta', time: 'Sen 09:15', isMe: true },
        { id: 2, sender: 'Bob Johnson', text: 'Terima kasih atas infonya!', time: 'Sen 09:20', isMe: false }
      ]
    }
  ]);

  const [selectedChat, setSelectedChat] = useState(null);
  const [newMessage, setNewMessage] = useState('');

  const handleChatSelect = (messageId) => {
    const selected = messages.find(msg => msg.id === messageId);
    setSelectedChat(selected);
  };

  const handleBackToList = () => {
    setSelectedChat(null);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim() === '') return;
    setNewMessage('');
  };

  return (
    <div className="messages-container">
      {!selectedChat ? (
        <>
          <h2>Pesan</h2>
          <div className="messages-list">
            {messages.map(message => (
              <div 
                key={message.id} 
                className="message-item" 
                onClick={() => handleChatSelect(message.id)}
              >
                <div className="message-avatar">{message.avatar}</div>
                <div className="message-content">
                  <div className="message-header">
                    <span className="message-user">{message.user}</span>
                    <span className="message-time">{message.time}</span>
                  </div>
                  <p className="message-text">{message.lastMessage}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="chat-detail">
          <div className="chat-header">
            <button className="back-button" onClick={handleBackToList}>
              ←
            </button>
            <div className="chat-avatar">{selectedChat.avatar}</div>
            <div className="chat-user">{selectedChat.user}</div>
          </div>
          
          <div className="chat-messages">
            {selectedChat.conversation.map(msg => (
              <div 
                key={msg.id} 
                className={`chat-bubble ${msg.isMe ? 'my-message' : 'their-message'}`}
              >
                <div className="chat-bubble-text">{msg.text}</div>
                <div className="chat-bubble-time">{msg.time}</div>
              </div>
            ))}
          </div>
          
          <form className="chat-input-area" onSubmit={handleSendMessage}>
            <input
              type="text"
              placeholder="Ketik pesan..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="chat-input"
            />
            <button type="submit" className="send-button">Kirim</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default MessagesComponent;