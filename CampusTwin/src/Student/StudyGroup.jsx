import React, { useState } from "react";

const initialGroups = [
  {
    id: 1,
    name: "DSA Warriors",
    subject: "Data Structures",
    members: 18,
    meeting: "Monday, 5:00 PM",
  },
  {
    id: 2,
    name: "DBMS Study Circle",
    subject: "DBMS",
    members: 12,
    meeting: "Wednesday, 6:00 PM",
  },
  {
    id: 3,
    name: "Web Dev Squad",
    subject: "Web Development",
    members: 20,
    meeting: "Friday, 5:30 PM",
  },
];

export default function StudyGroup() {
  const [groups, setGroups] = useState(initialGroups);

  const joinGroup = (id) => {
    setGroups(
      groups.map((group) =>
        group.id === id
          ? {
              ...group,
              members: group.members + 1,
            }
          : group
      )
    );

    alert("You joined the study group!");
  };

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1>Study Groups</h1>
          <p>Find students and study together.</p>
        </div>
      </div>

      <div className="dashboard-grid">
        {groups.map((group) => (
          <div className="card" key={group.id}>
            <div style={{ fontSize: "40px" }}>📚</div>

            <h2>{group.name}</h2>

            <p>
              <strong>Subject:</strong> {group.subject}
            </p>

            <p>👥 {group.members} members</p>

            <p>🕐 {group.meeting}</p>

            <button
              onClick={() => joinGroup(group.id)}
              style={{
                padding: "10px 18px",
                background: "#4f46e5",
                color: "white",
                border: "none",
                borderRadius: "8px",
              }}
            >
              Join Group
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}