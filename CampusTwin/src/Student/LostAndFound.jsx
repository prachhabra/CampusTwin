import React, { useState } from "react";

export default function LostAndFound() {
  const [item, setItem] = useState("");
  const [location, setLocation] = useState("");

  const [items, setItems] = useState([
    {
      id: 1,
      name: "Black Wallet",
      location: "Library",
      status: "Lost",
    },
    {
      id: 2,
      name: "Blue Water Bottle",
      location: "Sports Complex",
      status: "Found",
    },
  ]);

  const addItem = () => {
    if (!item.trim() || !location.trim()) {
      alert("Please fill all fields.");
      return;
    }

    setItems([
      ...items,
      {
        id: Date.now(),
        name: item,
        location,
        status: "Lost",
      },
    ]);

    setItem("");
    setLocation("");
  };

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1>Lost & Found</h1>
          <p>Report and find lost items on campus.</p>
        </div>
      </div>

      <div className="card">
        <h2>Report Lost Item</h2>

        <input
          placeholder="Item name"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "15px",
            boxSizing: "border-box",
          }}
        />

        <input
          placeholder="Last seen location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "10px",
            boxSizing: "border-box",
          }}
        />

        <button
          onClick={addItem}
          style={{
            marginTop: "15px",
            padding: "12px 20px",
            background: "#4f46e5",
            color: "white",
            border: "none",
            borderRadius: "8px",
          }}
        >
          Report Item
        </button>
      </div>

      <div className="dashboard-grid">
        {items.map((item) => (
          <div className="card" key={item.id}>
            <h3>🔎 {item.name}</h3>

            <p>📍 {item.location}</p>

            <p>
              Status:{" "}
              <strong>
                {item.status === "Found"
                  ? "🟢 Found"
                  : "🔴 Lost"}
              </strong>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}