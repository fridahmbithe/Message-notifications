import { useState, useEffect } from "react";
import "./ChatWindow.css";
import { upload } from "@testing-library/user-event/dist/upload";

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
    const selectedFile = event.target.files[0];
    setFile(selectedFile);

    if (selectedFile) {
      console.log("Selected file:", selectedFile);
    } else {
      console.log("No file selected");
    }
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
                    {message.content && (
                      <div>
                        <label htmlFor={`file-input-${index}`}> Attach </label>
                        <input
                          type="file"
                          id={`file-input-${index}`}
                          style={{
                            display: "none",
                          }}
                          onChange={(e) => handleFileChange(e, index)}
                          accept="image/*, .pdf, .doc, .docx, .xls, .xlsx"
                        />
                        Attachment:{" "}
                        {message.file ? message.file.name : "attach"}
                      </div>
                    )}
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
          <label htmlFor="file-input">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M12.232 4.232a2.5 2.5 0 0 1 3.536 3.536l-1.225 1.224a.75.75 0 0 0 1.061 1.06l1.224-1.224a4 4 0 0 0-5.656-5.656l-3 3a4 4 0 0 0 .225 5.865.75.75 0 0 0 .977-1.138 2.5 2.5 0 0 1-.142-3.667l3-3Z" />
              <path d="M11.603 7.963a.75.75 0 0 0-.977 1.138 2.5 2.5 0 0 1 .142 3.667l-3 3a2.5 2.5 0 0 1-3.536-3.536l1.225-1.224a.75.75 0 0 0-1.061-1.06l-1.224 1.224a4 4 0 1 0 5.656 5.656l3-3a4 4 0 0 0-.225-5.865Z" />
            </svg>
            <input
              type="file"
              id="file-input"
              onChange={(e) => handleFileChange(e)}
              accept="image/*, .pdf, .doc, .docx, .xls, .xlsx"
              style={{ display: "none" }}
            />
            Upload {""}
            {upload.file ? file.name : ""}
          </label>

          <button type="submit" className="msger-send-btn">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};
