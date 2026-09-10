import React, { useState } from "react";

export default function Chat() {
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "Rahul",
      text: "Hey! Are you coming to the coding club meeting?",
    },
    {
      id: 2,
      sender: "You",
      text: "Yes, I will be there!",
    },
  ]);

  const sendMessage = () => {
    if (!message.trim()) return;

    setMessages([
      ...messages,
      {
        id: Date.now(),
        sender: "You",
        text: message,
      },
    ]);

    setMessage("");
  };

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1>Chat</h1>
          <p>Connect and communicate with other students.</p>
        </div>
      </div>

      <div
        className="card"
        style={{
          maxWidth: "800px",
          margin: "auto",
        }}
      >
        <div
          style={{
            minHeight: "350px",
            maxHeight: "450px",
            overflowY: "auto",
            padding: "10px",
          }}
        >
          {messages.map((item) => (
            <div
              key={item.id}
              style={{
                marginBottom: "15px",
                textAlign:
                  item.sender === "You" ? "right" : "left",
              }}
            >
              <small>{item.sender}</small>

              <div
                style={{
                  display: "inline-block",
                  padding: "10px 15px",
                  marginTop: "5px",
                  borderRadius: "12px",
                  background:
                    item.sender === "You"
                      ? "#4f46e5"
                      : "#f1f5f9",
                  color:
                    item.sender === "You"
                      ? "white"
                      : "black",
                }}
              >
                {item.text}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            gap: "10px",
            marginTop: "15px",
          }}
        >
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") sendMessage();
            }}
            placeholder="Type a message..."
            style={{
              flex: 1,
              padding: "12px",
              border: "1px solid #ddd",
              borderRadius: "8px",
            }}
          />

          <button
            onClick={sendMessage}
            style={{
              padding: "12px 20px",
              border: "none",
              borderRadius: "8px",
              background: "#4f46e5",
              color: "white",
              cursor: "pointer",
            }}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}