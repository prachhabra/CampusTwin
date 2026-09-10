import { useEffect, useState } from "react";
import StudentLayout from "../../../layouts/StudentLayOut";
import api from "../../../services/Api";

/**
 * Attendance page — calls GET /api/attendance/me (built in Chapter 11
 * of the backend). Shows overall % and a simple per-subject breakdown.
 * Falls back to a friendly message if the backend isn't reachable yet.
 */
function Attendance() {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    api
      .get("/attendance/me")
      .then((res) => setData(res.data))
      .catch(() => setError("Could not load attendance — is the backend running?"));
  }, []);

  return (
    <StudentLayout>
      <h1>My Attendance</h1>
      <p className="page-subtitle">Pulled live from /api/attendance/me</p>

      {error && <p className="auth-error">{error}</p>}

      {!error && !data && <p>Loading...</p>}

      {data && (
        <>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">📋</div>
              <div>
                <p className="stat-title">Overall Attendance</p>
                <h2 className="stat-value">{data.overallPercent}%</h2>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">✅</div>
              <div>
                <p className="stat-title">Classes Present</p>
                <h2 className="stat-value">{data.present} / {data.total}</h2>
              </div>
            </div>
          </div>

          <h3 style={{ marginTop: "1.5rem" }}>By Subject</h3>
          <div className="stats-grid" style={{ marginTop: "0.6rem" }}>
            {Object.entries(data.bySubject || {}).map(([subject, s]) => (
              <div className="stat-card" key={subject}>
                <div className="stat-icon">📚</div>
                <div>
                  <p className="stat-title">{subject}</p>
                  <h2 className="stat-value">{Math.round((s.present / s.total) * 100)}%</h2>
                  <small className="stat-description">{s.present}/{s.total} classes</small>
                </div>
              </div>
            ))}
            {Object.keys(data.bySubject || {}).length === 0 && (
              <p style={{ color: "#94a3b8" }}>No attendance recorded yet — scan a session QR to get started.</p>
            )}
          </div>
        </>
      )}
    </StudentLayout>
  );
}

export default Attendance;
