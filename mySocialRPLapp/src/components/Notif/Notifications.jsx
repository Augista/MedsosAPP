import React, { useState } from 'react';
import './Notifications.css';

const NotificationsComponent = () => {
  const [notifications] = useState([
    { id: 1, type: 'like', user: 'Jane Doe', content: 'menyukai tweet Anda', time: '2 jam yang lalu' },
    { id: 2, type: 'mention', user: 'John Smith', content: 'menyebut Anda dalam sebuah post', time: '5 jam yang lalu' },
    { id: 3, type: 'repost', user: 'Alice Johnson', content: 'me-repost postingan Anda', time: 'Kemarin' }
  ]);

  return (
    <div className="notifications-container">
      <h2>Notifikasi</h2>
      {notifications.map(notification => (
        <div key={notification.id} className="notification-item">
          <div className="notification-icon">
            {notification.type === 'like' ? '❤️' : notification.type === 'mention' ? '📣' : '🔄'}
          </div>
          <div className="notification-content">
            <p><strong>{notification.user}</strong> {notification.content}</p>
            <span className="notification-time">{notification.time}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NotificationsComponent;