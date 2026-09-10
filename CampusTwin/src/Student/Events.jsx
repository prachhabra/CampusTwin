import { useEffect, useState } from "react";
import StudentLayout from "../../../layouts/StudentLayOut";
import api from "../../../services/Api";

/**
 * Events page — calls GET /api/events (list, Chapter 6) and
 * POST /api/events/:id/register (join an event).
 * Deliberately simple: fetch a list, render cards, one button per card.
 */
function Events() {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const loadEvents = () => {
    api
      .get("/events")
      .then((res) => setEvents(res.data))
      .catch(() => setError("Could not load events — is the backend running?"));
  };

  useEffect(() => {
    loadEvents();
  }, []);

  const handleRegister = async (id) => {
    setMessage("");
    try {
      await api.post(`/events/${id}/register`);
      setMessage("Registered! ✅");
      loadEvents(); // refresh so the registered count updates
    } catch (err) {
      setMessage(err.response?.data?.message || "Could not register for this event.");
    }
  };

  return (
    <StudentLayout>
      <h1>Campus Events</h1>
      <p className="page-subtitle">Pulled live from /api/events</p>

      {error && <p className="auth-error">{error}</p>}
      {message && <p style={{ color: "#4f46e5", fontWeight: 600 }}>{message}</p>}

      <div className="event-list">
        {events.map((ev) => (
          <div className="card" key={ev._id} style={{ marginBottom: "1rem", padding: "1rem" }}>
            <h3>{ev.title}</h3>
            <p style={{ color: "#64748b", margin: "0.3rem 0" }}>{ev.description}</p>
            <p style={{ fontSize: "0.85rem" }}>
              📅 {new Date(ev.date).toLocaleDateString()} &nbsp;|&nbsp; 📍 {ev.venue || "TBA"}
            </p>
            <p style={{ fontSize: "0.8rem", color: "#94a3b8" }}>
              {ev.registeredStudents?.length || 0} students registered
            </p>
            <button className="primary-btn" style={{ marginTop: "0.5rem" }} onClick={() => handleRegister(ev._id)}>
              Register
            </button>
          </div>
        ))}

        {!error && events.length === 0 && <p style={{ color: "#94a3b8" }}>No events yet. Check back soon!</p>}
      </div>
    </StudentLayout>
  );
}

export default Events;
