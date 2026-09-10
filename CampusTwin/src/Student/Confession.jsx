import React, { useState } from "react";

export default function Confession() {
  const [text, setText] = useState("");

  const [confessions, setConfessions] = useState([
    {
      id: 1,
      text: "College life is going way too fast!",
      likes: 24,
    },
    {
      id: 2,
      text: "The cafeteria samosas are underrated.",
      likes: 17,
    },
  ]);

  const submitConfession = () => {
    if (!text.trim()) {
      alert("Please write something first.");
      return;
    }

    setConfessions([
      {
        id: Date.now(),
        text,
        likes: 0,
      },
      ...confessions,
    ]);

    setText("");

    alert("Your confession was posted anonymously.");
  };

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1>Anonymous Confessions</h1>
          <p>Share your thoughts anonymously.</p>
        </div>
      </div>

      <div className="card">
        <h2>Write a Confession</h2>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write something anonymously..."
          rows="5"
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "15px",
            boxSizing: "border-box",
          }}
        />

        <button
          onClick={submitConfession}
          style={{
            marginTop: "15px",
            padding: "12px 20px",
            border: "none",
            borderRadius: "8px",
            background: "#4f46e5",
            color: "white",
          }}
        >
          Post Anonymously
        </button>
      </div>

      {confessions.map((confession) => (
        <div className="card" key={confession.id}>
          <h3>👤 Anonymous</h3>
          <p>{confession.text}</p>
          <button
            onClick={() =>
              setConfessions(
                confessions.map((item) =>
                  item.id === confession.id
                    ? {
                        ...item,
                        likes: item.likes + 1,
                      }
                    : item
                )
              )
            }
          >
            ❤️ {confession.likes}
          </button>
        </div>
      ))}
    </div>
  );
}