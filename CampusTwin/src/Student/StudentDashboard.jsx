// import { useEffect, useState } from "react";
// import StudentLayout from "../../../layouts/StudentLayOut";
// import StatCard from "../../../components/StatCard";
// import api from "../../../services/Api";
// import { studentStats } from "../../../data/mockData";
// import { useAuth } from "../../../context/AuthContext";

// function StudentDashboard() {
//   const { user } = useAuth();
//   const [stats, setStats] = useState(studentStats);
//   const [live, setLive] = useState(false);

//   useEffect(() => {
//     api
//       .get("/users/dashboard")
//       .then(({ data }) => {
//         setStats({
//           attendance: data.attendancePercent ?? studentStats.attendance,
//           upcomingEvents: studentStats.upcomingEvents, // Ch.6 endpoint not wired here yet
//           applications: studentStats.applications, // Ch.10 endpoint not wired here yet
//           achievements: (data.badges || []).length || studentStats.achievements,
//         });
//         setLive(true);
//       })
//       .catch(() => setLive(false));
//   }, []);

//   return (
//     <StudentLayout>
//       <h1>Hey {user?.name?.split(" ")[0] || "there"}, here's your week.</h1>
//       <p className="page-subtitle">
//         {live ? "Live data from the backend." : "Showing sample data — start the backend to see live numbers."}
//       </p>

//       <div className="stats-grid">
//         <StatCard icon="📋" title="Attendance" value={`${stats.attendance}%`} />
//         <StatCard icon="📅" title="Upcoming Events" value={stats.upcomingEvents} />
//         <StatCard icon="💼" title="Applications" value={stats.applications} />
//         <StatCard icon="🎖️" title="Achievements" value={stats.achievements} />
//       </div>
//     </StudentLayout>
//   );
// }

// export default StudentDashboard;





import React from "react";

export default function StudentDashboard() {
  const quickActions = [
    ["📚", "Study Groups", "/student/study-groups"],
    ["🎉", "Events", "/student/events"],
    ["🏆", "Achievements", "/student/achievements"],
    ["📊", "Analytics", "/student/analytics"],
    ["📍", "Campus Map", "/student/campus-map"],
    ["💬", "Chat", "/student/chat"],
  ];

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1>Student Dashboard</h1>
          <p>Welcome back! Here's your campus overview.</p>
        </div>
      </div>

      <div className="stats-grid">
        <div className="card">
          <h3>👋 Welcome</h3>
          <h2>Prachi</h2>
          <p>Computer Science</p>
        </div>

        <div className="card">
          <h3>📊 Attendance</h3>
          <h2>87%</h2>
          <p>Good standing</p>
        </div>

        <div className="card">
          <h3>🎓 CGPA</h3>
          <h2>8.6</h2>
          <p>Current semester</p>
        </div>

        <div className="card">
          <h3>🏆 Badges</h3>
          <h2>12</h2>
          <p>Achievements unlocked</p>
        </div>
      </div>

      <div className="card">
        <h2>Quick Actions</h2>

        <div className="dashboard-grid">
          {quickActions.map(([icon, title, path]) => (
            <div
              key={title}
              className="card"
              style={{ cursor: "pointer" }}
              onClick={() => {
                window.location.href = path;
              }}
            >
              <div style={{ fontSize: "35px" }}>{icon}</div>
              <h3>{title}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className="dashboard-grid">
        <div className="card">
          <h2>📅 Upcoming</h2>
          <p>Tech Fest 2026 - 20 Sept</p>
          <p>Hackathon - 5 Oct</p>
        </div>

        <div className="card">
          <h2>📢 Notifications</h2>
          <p>New placement opportunity available.</p>
          <p>Your attendance report is updated.</p>
        </div>
      </div>
    </div>
  );
}