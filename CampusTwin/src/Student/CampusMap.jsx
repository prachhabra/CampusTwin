import React, { useState } from "react";

const locations = [
  {
    name: "Main Gate",
    type: "Entrance",
    icon: "🚪",
  },
  {
    name: "Central Library",
    type: "Academic",
    icon: "📚",
  },
  {
    name: "Computer Science Block",
    type: "Academic",
    icon: "💻",
  },
  {
    name: "Student Hostel",
    type: "Hostel",
    icon: "🏠",
  },
  {
    name: "Cafeteria",
    type: "Food",
    icon: "🍴",
  },
  {
    name: "Sports Complex",
    type: "Sports",
    icon: "⚽",
  },
];

export default function CampusMap() {
  const [search, setSearch] = useState("");

  const filteredLocations = locations.filter((location) =>
    location.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1>Campus Map</h1>
          <p>Find important locations around your campus.</p>
        </div>
      </div>

      <div className="card">
        <input
          type="text"
          placeholder="Search campus location..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            marginBottom: "20px",
            boxSizing: "border-box",
          }}
        />

        <div
          style={{
            minHeight: "350px",
            background: "#eef2ff",
            borderRadius: "12px",
            padding: "30px",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: "50px" }}>🗺️</div>

          <h2>Campus Interactive Map</h2>

          <p>
            Interactive Leaflet/Google Maps integration can be
            connected here later.
          </p>
        </div>
      </div>

      <div className="dashboard-grid">
        {filteredLocations.map((location) => (
          <div className="card" key={location.name}>
            <div style={{ fontSize: "35px" }}>{location.icon}</div>
            <h3>{location.name}</h3>
            <p>{location.type}</p>
          </div>
        ))}
      </div>
    </div>
  );
}