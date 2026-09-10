import { useEffect, useState } from "react";
import StudentLayout from "../../../layouts/StudentLayOut";
import api from "../../../services/Api";

/**
 * Digital ID page — calls GET /api/attendance/id-card (Chapter 11).
 * The backend generates a QR code (as a base64 image) encoding the
 * student's id/name/role using the `qrcode` npm package, and this page
 * just displays the card + that QR image.
 */
function DigitalID() {
  const [card, setCard] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    api
      .get("/attendance/id-card")
      .then((res) => setCard(res.data))
      .catch(() => setError("Could not load your ID card — is the backend running?"));
  }, []);

  return (
    <StudentLayout>
      <h1>Digital ID</h1>
      <p className="page-subtitle">Pulled live from /api/attendance/id-card</p>

      {error && <p className="auth-error">{error}</p>}
      {!error && !card && <p>Loading...</p>}

      {card && (
        <div className="id-card">
          <div className="id-card-header">
            <div className="sidebar-logo-icon">C</div>
            <div>
              <strong>CampusTwin</strong>
              <div style={{ fontSize: "0.7rem", color: "#94a3b8" }}>Student ID Card</div>
            </div>
          </div>

          <img src={card.qrDataUrl} alt="QR code" className="id-card-qr" />

          <div className="id-card-details">
            <p><strong>{card.user.name}</strong></p>
            <p>{card.user.email}</p>
            <p>{card.user.department} {card.user.year ? `· Year ${card.user.year}` : ""}</p>
            <span className="role-badge student-badge" style={{ display: "inline-block" }}>
              {card.user.role?.toUpperCase()}
            </span>
          </div>
        </div>
      )}
    </StudentLayout>
  );
}

export default DigitalID;
