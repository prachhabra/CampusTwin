import React, { useState } from "react";

const initialSkills = [
  {
    id: 1,
    name: "React Development",
    level: "Advanced",
    owner: "Aman",
  },
  {
    id: 2,
    name: "Video Editing",
    level: "Intermediate",
    owner: "Riya",
  },
  {
    id: 3,
    name: "Python",
    level: "Advanced",
    owner: "Karan",
  },
  {
    id: 4,
    name: "Graphic Design",
    level: "Intermediate",
    owner: "Mehak",
  },
];

export default function Skills() {
  const [skills, setSkills] = useState(initialSkills);
  const [newSkill, setNewSkill] = useState("");

  const addSkill = () => {
    if (!newSkill.trim()) return;

    setSkills([
      ...skills,
      {
        id: Date.now(),
        name: newSkill,
        level: "Beginner",
        owner: "You",
      },
    ]);

    setNewSkill("");
  };

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1>Skill Exchange</h1>
          <p>Share your skills and learn from other students.</p>
        </div>
      </div>

      <div className="card">
        <h2>Add Your Skill</h2>

        <div
          style={{
            display: "flex",
            gap: "10px",
            marginTop: "15px",
          }}
        >
          <input
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            placeholder="Example: Java, Photoshop..."
            style={{
              flex: 1,
              padding: "12px",
            }}
          />

          <button
            onClick={addSkill}
            style={{
              padding: "12px 20px",
              background: "#4f46e5",
              color: "white",
              border: "none",
              borderRadius: "8px",
            }}
          >
            Add
          </button>
        </div>
      </div>

      <div className="dashboard-grid">
        {skills.map((skill) => (
          <div className="card" key={skill.id}>
            <h2>💡 {skill.name}</h2>

            <p>
              Level: <strong>{skill.level}</strong>
            </p>

            <p>Student: {skill.owner}</p>

            {skill.owner !== "You" && (
              <button
                onClick={() =>
                  alert(`Request sent to ${skill.owner}`)
                }
                style={{
                  padding: "10px 18px",
                  background: "#4f46e5",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                }}
              >
                Request Skill Exchange
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}