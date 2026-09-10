import React, { useState } from "react";

const initialEvents = [
  {
    id: 2,
    title: " Content Casino",
    category: "content creation and entertainment",
    date: "2026-07-24",
    venue: "shivalik Hall",
    organizer: "CreoAwave",
    status: "Completed",
  },
  {
    id: 3,
    title: "The Traitors",
    category: "Entertainment",
    date: "2026-08-22",
    venue: "Shivalik Hall",
    organizer: "FlareOn, CreoAwave",
    status: "Completed",
  },
  {
    id: 1,
    title: "The Art of Mastery",
    category: "Filmaking and fitness",
    date: "2026-08-01",
    venue: "chenab Hall",
    organizer: "filmaking and development",
    status: "Completed",
  },
  {
    id: 4,
    title: "Freshers Night",
    category: "Cultural",
    date: "2026-09-12",
    venue: "Open Air Theatre/Auditorium",
    organizer: "OSL",
    status: "Upcoming",
  },
];

export default function AdminEvents() {
  const [events, setEvents] = useState(initialEvents);

  const [search, setSearch] = useState("");

  const [showForm, setShowForm] = useState(false);

  const [editingEvent, setEditingEvent] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    date: "",
    venue: "",
    organizer: "",
    status: "Upcoming",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Open add event form
  const handleAddEvent = () => {
    setEditingEvent(null);

    setFormData({
      title: "",
      category: "",
      date: "",
      venue: "",
      organizer: "",
      status: "Upcoming",
    });

    setShowForm(true);
  };

  // Open edit form
  const handleEdit = (event) => {
    setEditingEvent(event);

    setFormData({
      title: event.title,
      category: event.category,
      date: event.date,
      venue: event.venue,
      organizer: event.organizer,
      status: event.status,
    });

    setShowForm(true);
  };

  // Add or update event
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.title ||
      !formData.category ||
      !formData.date ||
      !formData.venue ||
      !formData.organizer
    ) {
      alert("Please fill all fields");
      return;
    }

    if (editingEvent) {
      setEvents(
        events.map((event) =>
          event.id === editingEvent.id
            ? {
                ...event,
                ...formData,
              }
            : event
        )
      );

      alert("Event updated successfully!");
    } else {
      const newEvent = {
        id: Date.now(),
        ...formData,
      };

      setEvents([...events, newEvent]);

      alert("Event added successfully!");
    }

    setShowForm(false);
  };

  // Delete event
  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this event?"
    );

    if (!confirmDelete) return;

    setEvents(events.filter((event) => event.id !== id));

    alert("Event deleted successfully!");
  };

  // Search
  const filteredEvents = events.filter((event) => {
    const text = search.toLowerCase();

    return (
      event.title.toLowerCase().includes(text) ||
      event.category.toLowerCase().includes(text) ||
      event.organizer.toLowerCase().includes(text) ||
      event.venue.toLowerCase().includes(text)
    );
  });

  return (
    <div className="page-container">

      {/* Header */}
      <div className="admin-page-header">
        <div>
          <h1>📅 Event Management</h1>

          <p className="page-subtitle">
            Manage university events and activities
          </p>
        </div>

        <button onClick={handleAddEvent}>
          + Add Event
        </button>
      </div>

      {/* Statistics */}
      <div className="card-grid">

        <div className="dashboard-card">
          <h3>Total Events</h3>
          <div className="big-number">
            {events.length}
          </div>
        </div>

        <div className="dashboard-card">
          <h3>Upcoming</h3>
          <div className="big-number">
            {
              events.filter(
                (event) => event.status === "Upcoming"
              ).length
            }
          </div>
        </div>

        <div className="dashboard-card">
          <h3>Completed</h3>
          <div className="big-number">
            {
              events.filter(
                (event) => event.status === "Completed"
              ).length
            }
          </div>
        </div>

      </div>

      {/* Search */}
      <div className="dashboard-card">

        <input
          type="text"
          placeholder="🔍 Search events..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      {/* Events table */}
      <div className="dashboard-card">

        <h2>All Events</h2>

        <div className="table-container">

          <table>

            <thead>
              <tr>
                <th>Event</th>
                <th>Category</th>
                <th>Date</th>
                <th>Venue</th>
                <th>Organizer</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>

              {filteredEvents.length > 0 ? (

                filteredEvents.map((event) => (

                  <tr key={event.id}>

                    <td>
                      <strong>{event.title}</strong>
                    </td>

                    <td>{event.category}</td>

                    <td>{event.date}</td>

                    <td>{event.venue}</td>

                    <td>{event.organizer}</td>

                    <td>
                      <span className="badge">
                        {event.status}
                      </span>
                    </td>

                    <td>

                      <button
                        onClick={() => handleEdit(event)}
                      >
                        Edit
                      </button>

                      <button
                        onClick={() =>
                          handleDelete(event.id)
                        }
                        style={{
                          marginLeft: "8px",
                          background: "#dc2626",
                        }}
                      >
                        Delete
                      </button>

                    </td>

                  </tr>

                ))

              ) : (

                <tr>
                  <td colSpan="7">
                    No events found.
                  </td>
                </tr>

              )}

            </tbody>

          </table>

        </div>

      </div>

      {/* Add/Edit Modal */}

      {showForm && (

        <div className="modal-overlay">

          <div className="modal">

            <h2>
              {editingEvent
                ? "Edit Event"
                : "Add New Event"}
            </h2>

            <form onSubmit={handleSubmit}>

              <label>Event Name</label>

              <input
                type="text"
                name="title"
                placeholder="Enter event name"
                value={formData.title}
                onChange={handleChange}
              />

              <label>Category</label>

              <input
                type="text"
                name="category"
                placeholder="Example: Technology"
                value={formData.category}
                onChange={handleChange}
              />

              <label>Date</label>

              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
              />

              <label>Venue</label>

              <input
                type="text"
                name="venue"
                placeholder="Enter venue"
                value={formData.venue}
                onChange={handleChange}
              />

              <label>Organizer</label>

              <input
                type="text"
                name="organizer"
                placeholder="Enter organizer"
                value={formData.organizer}
                onChange={handleChange}
              />

              <label>Status</label>

              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
              >
                <option value="Upcoming">
                  Upcoming
                </option>

                <option value="Ongoing">
                  Ongoing
                </option>

                <option value="Completed">
                  Completed
                </option>
              </select>

              <div className="modal-actions">

                <button type="submit">
                  {editingEvent
                    ? "Update Event"
                    : "Add Event"}
                </button>

                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  style={{
                    background: "#6b7280",
                    marginLeft: "10px",
                  }}
                >
                  Cancel
                </button>

              </div>

            </form>

          </div>

        </div>

      )}

    </div>
  );
}