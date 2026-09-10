import React from "react";

const achievements = [
  {
    title: "100% Attendance",
    description: "Maintained excellent attendance.",
    icon: "🏆",
    date: "Aug 2026",
  },
  {
    title: "Event Organizer",
    description: "Successfully organized a college event.",
    icon: "🎯",
    date: "Jul 2026",
  },
  {
    title: "Coding Champion",
    description: "Participated in a coding competition.",
    icon: "💻",
    date: "Jun 2026",
  },
  {
    title: "Community Helper",
    description: "Helped other students through skill exchange.",
    icon: "🤝",
    date: "May 2026",
  },
];

export default function Achievements() {
  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1>Achievements</h1>
          <p>View your achievements, badges and milestones.</p>
        </div>
      </div>

      <div className="stats-grid">
        <div className="card">
          <h3>🏅 Total Badges</h3>
          <h2>12</h2>
        </div>

        <div className="card">
          <h3>⭐ Points</h3>
          <h2>850</h2>
        </div>

        <div className="card">
          <h3>🎯 Completed</h3>
          <h2>18</h2>
        </div>
      </div>

      <div className="dashboard-grid">
        {achievements.map((achievement) => (
          <div className="card" key={achievement.title}>
            <div style={{ fontSize: "40px" }}>{achievement.icon}</div>

            <h3>{achievement.title}</h3>

            <p>{achievement.description}</p>

            <small>{achievement.date}</small>
          </div>
        ))}
      </div>
    </div>
  );
}