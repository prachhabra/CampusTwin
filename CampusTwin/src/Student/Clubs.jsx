import React, { useState } from "react";

const initialClubs = [
  {
    id: 1,
    name: "FlareOn",
    category: "Film Making",
    members: 120,
    description: "Film making and creative development club.",
  },
  {
    id: 2,
    name: "CodeChef Club",
    category: "Coding",
    members: 250,
    description: "Competitive programming and coding community.",
  },
  {
    id: 3,
    name: "CreoAwave",
    category: "Content",
    members: 180,
    description: "Content creation and media club.",
  },
  {
    id: 4,
    name: "Robotics Club",
    category: "Technology",
    members: 95,
    description: "Robotics, electronics and innovation.",
  },
];

export default function Clubs() {
  const [clubs, setClubs] = useState(initialClubs);

  const joinClub = (id) => {
    setClubs(
      clubs.map((club) =>
        club.id === id
          ? { ...club, members: club.members + 1 }
          : club
      )
    );

    alert("Successfully joined the club!");
  };

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1>Clubs</h1>
          <p>Explore and join student clubs.</p>
        </div>
      </div>

      <div className="dashboard-grid">
        {clubs.map((club) => (
          <div className="card" key={club.id}>
            <h2>{club.name}</h2>

            <p>
              <strong>Category:</strong> {club.category}
            </p>

            <p>{club.description}</p>

            <p>👥 {club.members} members</p>

            <button
              onClick={() => joinClub(club.id)}
              style={{
                padding: "10px 18px",
                border: "none",
                borderRadius: "8px",
                background: "#4f46e5",
                color: "white",
                cursor: "pointer",
              }}
            >
              Join Club
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}