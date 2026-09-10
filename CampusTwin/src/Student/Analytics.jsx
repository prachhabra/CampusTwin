import React from "react";

const attendance = [
  { subject: "Data Structures", attended: 28, total: 30 },
  { subject: "DBMS", attended: 25, total: 28 },
  { subject: "Operating Systems", attended: 23, total: 27 },
  { subject: "Computer Networks", attended: 24, total: 26 },
  { subject: "Web Development", attended: 29, total: 30 },
];

export default function Attendance() {
  const totalClasses = attendance.reduce(
    (sum, item) => sum + item.total,
    0
  );

  const totalAttended = attendance.reduce(
    (sum, item) => sum + item.attended,
    0
  );

  const overall = Math.round(
    (totalAttended / totalClasses) * 100
  );

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1>Attendance</h1>
          <p>Track your subject-wise attendance.</p>
        </div>
      </div>

      <div className="stats-grid">
        <div className="card">
          <h3>Overall Attendance</h3>
          <h2>{overall}%</h2>
        </div>

        <div className="card">
          <h3>Total Classes</h3>
          <h2>{totalClasses}</h2>
        </div>

        <div className="card">
          <h3>Classes Attended</h3>
          <h2>{totalAttended}</h2>
        </div>
      </div>

      <div className="card">
        <h2>Subject Attendance</h2>

        <div style={{ overflowX: "auto" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              marginTop: "20px",
            }}
          >
            <thead>
              <tr>
                <th style={{ textAlign: "left", padding: "12px" }}>
                  Subject
                </th>
                <th>Attended</th>
                <th>Total</th>
                <th>Percentage</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {attendance.map((item) => {
                const percentage = Math.round(
                  (item.attended / item.total) * 100
                );

                return (
                  <tr key={item.subject}>
                    <td style={{ padding: "12px" }}>
                      {item.subject}
                    </td>

                    <td style={{ textAlign: "center" }}>
                      {item.attended}
                    </td>

                    <td style={{ textAlign: "center" }}>
                      {item.total}
                    </td>

                    <td style={{ textAlign: "center" }}>
                      {percentage}%
                    </td>

                    <td style={{ textAlign: "center" }}>
                      {percentage >= 75 ? "✅ Good" : "⚠️ Low"}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}