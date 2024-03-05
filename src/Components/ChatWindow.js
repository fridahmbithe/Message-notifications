import { useState, useEffect } from "react";
import "./ChatWindow.css";

export const ChatWindow = () => {
  const [messages, setMessages] = useState([]);
  const [messageText, setMessageText] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!messageText.trim() && !file) return;

    const newMessage = {
      text: messageText,
      file: file,
      isSentByUser: true,
    };
    setMessages([...messages, newMessage]);
    setMessageText("");
    setFile(null);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };
  useEffect(() => {
    // Parse the message from the query parameter
    const query = new URLSearchParams(window.location.search);
    const messageString = query.get("message");
    if (messageString) {
      const message = JSON.parse(decodeURIComponent(messageString));
      setMessages([message]);
    }
  }, []);

  return (
    <div className="body">
      <div className="msger">
        <div className="msger-chat" id="msgs-container">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`msg ${
                message.isSentByUser ? "right-msg" : "left-msg"
              }`}
            >
              <div className="msg-bubble">
                {message.isSentByUser ? (
                  <>
                    <span className="sent-by-user">{message.text}</span>
                    {/* {message.content && (
                      <div>
                        <label htmlFor={`file-input-${index}`}> Attach </label>
                        <input
                          type="file"
                          id={`file-input-${index}`}
                          // style={{
                          //   fontSize: "1rem",
                          //   padding: "10px",
                          //   borderRadius: "3px",
                          // }}
                          style={{display:'inherit'}}

                          onChange={(e) => handleFileChange(e, index)}
                          accept="image/*, .pdf, .doc, .docx, .xls, .xlsx"
                        />
                        Attachment: {message.file ? message.file.name : "attach"}
                      </div>
                    )} */}
                  </>
                ) : (
                  <>
                    <span className="sent-for-user">{message}</span>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
        <form
          className="msger-inputarea"
          id="msgs-container"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            className="msger-input"
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
            placeholder="Enter your message..."
          />
          <input
            type="file"
            id="file-input"
            onChange={handleFileChange}
            accept="image/*, .pdf, .doc, .docx, .xls, .xlsx"
            style={{ display: "none" }}
          />
          <button type="submit" className="msger-send-btn">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};
