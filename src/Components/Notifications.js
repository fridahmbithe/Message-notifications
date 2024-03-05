import { useState, useNavigate } from "react";
import './Notifications.css';

const Notifications = () => {
  const [navigate, useNavigate] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      content:
        "Hello Fridah, you have a new task kindly go through it and let me know if you have any questions.",
      isSentByUser: false,
    },
    {
      id: 2,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam maxime cumque ab, aliquam corrupti porro cupiditate quasi inventore sapiente officiis.",
      isSentByUser: true,
    },
    {
      id: 3,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam maxime cumque ab, aliquam corrupti porro cupiditate quasi inventore sapiente officiis.",
      isSentByUser: true,
    },
    {
      id: 4,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam maxime cumque ab, aliquam corrupti porro cupiditate quasi inventore sapiente officiis.",
      isSentByUser: false,
    },
    {
      id: 5,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam maxime cumque ab, aliquam corrupti porro cupiditate quasi inventore sapiente officiis.",
      isSentByUser: true,
    },
    {
      id: 6,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam maxime cumque ab, aliquam corrupti porro cupiditate quasi inventore sapiente officiis.",
      isSentByUser: false,
    },
  ]);

  // Function to mark all messages as read
  const markAllAsRead = () => {
    const updatedMessages = messages.map((message) => {
      return { ...message, isSentByUser: true };
    });
    setMessages(updatedMessages);
  };

  const markAsRead = (id) => {
    const updatedMessages = messages.map((message) => {
      if (message.id === id) {
        return { ...message, read: true };
      }
      return message;
    });
    setMessages(updatedMessages);
  };

  const openChatWindow = (message) => {
    console.log("Opening chat window for message:", message);
  };
  const unreadMessagesCount = messages.filter((message) => !message.read).length;

  return (
    <div className="container">
      <div className="notificationcontainer">
        <header>
          <div className="notificationheader">
            <h3>Notifications</h3>
            <span id="num-of-notification">{unreadMessagesCount}</span>
          </div>
          <h3 id="mark-as-read" onClick={markAllAsRead}>
            Mark All as Read
          </h3>
        </header>
        <main id="notification-list">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`notificationCard ${!message.read ? 'unread' : ''}`}
              onClick={() => markAsRead(message.id)}
            >
              {message.content}
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};
export default Notifications;
