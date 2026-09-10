import React, { useState } from "react";

const initialTeachers = [
  {
    id: 1,
    name: "Dr. Rinku singh",
    email: "rajesh@college.edu",
    employeeId: "T001",
    department: "Computer Science",
    subject: "Data Structures",
    status: "Active",
  },
  {
    id: 2,
    name: "Ayushi Sharma",
    email: "ayushi@college.edu",
    employeeId: "T002",
    department: "Computer Science",
    subject: "Data Structure",
    status: "Active",
  },
  {
    id: 3,
    name: "Dr. Sandhya sharma",
    email: "sandhya@college.edu",
    employeeId: "T003",
    department: "Electronics",
    subject: "Digital Electronics",
    status: "Active",
  },
  {
    id: 4,
    name: "Dr.Mohit",
    email: "mohit@college.edu",
    employeeId: "T004",
    department: "Management",
    subject: "Database Management",
    status: "Active",
  },
];

export default function Teachers() {

  const [teachers, setTeachers] =
    useState(initialTeachers);

  const [search, setSearch] =
    useState("");

  const [showForm, setShowForm] =
    useState(false);

  const [editingTeacher, setEditingTeacher] =
    useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    employeeId: "",
    department: "",
    subject: "",
    status: "Active",
  });

  // Handle changes
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  // Add teacher
  const handleAddTeacher = () => {

    setEditingTeacher(null);

    setFormData({
      name: "",
      email: "",
      employeeId: "",
      department: "",
      subject: "",
      status: "Active",
    });

    setShowForm(true);
  };

  // Edit teacher
  const handleEdit = (teacher) => {

    setEditingTeacher(teacher);

    setFormData({
      name: teacher.name,
      email: teacher.email,
      employeeId: teacher.employeeId,
      department: teacher.department,
      subject: teacher.subject,
      status: teacher.status,
    });

    setShowForm(true);
  };

  // Add / Update
  const handleSubmit = (e) => {

    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.employeeId ||
      !formData.department ||
      !formData.subject
    ) {
      alert("Please fill all fields");
      return;
    }

    if (editingTeacher) {

      setTeachers(
        teachers.map((teacher) =>
          teacher.id === editingTeacher.id
            ? {
                ...teacher,
                ...formData,
              }
            : teacher
        )
      );

      alert("Teacher updated successfully!");

    } else {

      const newTeacher = {
        id: Date.now(),
        ...formData,
      };

      setTeachers([
        ...teachers,
        newTeacher,
      ]);

      alert("Teacher added successfully!");
    }

    setShowForm(false);
  };

  // Delete
  const handleDelete = (id) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this teacher?"
    );

    if (!confirmDelete) return;

    setTeachers(
      teachers.filter(
        (teacher) => teacher.id !== id
      )
    );

    alert("Teacher deleted successfully!");
  };

  // Search
  const filteredTeachers =
    teachers.filter((teacher) => {

      const text =
        search.toLowerCase();

      return (
        teacher.name
          .toLowerCase()
          .includes(text) ||

        teacher.email
          .toLowerCase()
          .includes(text) ||

        teacher.employeeId
          .toLowerCase()
          .includes(text) ||

        teacher.department
          .toLowerCase()
          .includes(text) ||

        teacher.subject
          .toLowerCase()
          .includes(text)
      );
    });

  return (
    <div className="page-container">

      {/* Header */}

      <div className="admin-page-header">

        <div>

          <h1>👨‍🏫 Teacher Management</h1>

          <p className="page-subtitle">
            Manage university faculty members
          </p>

        </div>

        <button onClick={handleAddTeacher}>
          + Add Teacher
        </button>

      </div>

      {/* Statistics */}

      <div className="card-grid">

        <div className="dashboard-card">

          <h3>Total Teachers</h3>

          <div className="big-number">
            {teachers.length}
          </div>

        </div>

        <div className="dashboard-card">

          <h3>Active Teachers</h3>

          <div className="big-number">

            {
              teachers.filter(
                (teacher) =>
                  teacher.status === "Active"
              ).length
            }

          </div>

        </div>

        <div className="dashboard-card">

          <h3>Departments</h3>

          <div className="big-number">

            {
              new Set(
                teachers.map(
                  (teacher) =>
                    teacher.department
                )
              ).size
            }

          </div>

        </div>

      </div>

      {/* Search */}

      <div className="dashboard-card">

        <input
          type="text"
          placeholder="🔍 Search teacher, department, subject..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

      </div>

      {/* Teachers Table */}

      <div className="dashboard-card">

        <h2>All Teachers</h2>

        <div className="table-container">

          <table>

            <thead>

              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Employee ID</th>
                <th>Department</th>
                <th>Subject</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>

            </thead>

            <tbody>

              {filteredTeachers.length > 0 ? (

                filteredTeachers.map(
                  (teacher) => (

                    <tr key={teacher.id}>

                      <td>
                        <strong>
                          {teacher.name}
                        </strong>
                      </td>

                      <td>
                        {teacher.email}
                      </td>

                      <td>
                        {teacher.employeeId}
                      </td>

                      <td>
                        {teacher.department}
                      </td>

                      <td>
                        {teacher.subject}
                      </td>

                      <td>

                        <span className="badge">
                          {teacher.status}
                        </span>

                      </td>

                      <td>

                        <button
                          onClick={() =>
                            handleEdit(teacher)
                          }
                        >
                          Edit
                        </button>

                        <button
                          onClick={() =>
                            handleDelete(
                              teacher.id
                            )
                          }
                          style={{
                            marginLeft: "8px",
                            background:
                              "#dc2626",
                          }}
                        >
                          Delete
                        </button>

                      </td>

                    </tr>

                  )
                )

              ) : (

                <tr>

                  <td colSpan="7">
                    No teachers found.
                  </td>

                </tr>

              )}

            </tbody>

          </table>

        </div>

      </div>

      {/* Add / Edit Modal */}

      {showForm && (

        <div className="modal-overlay">

          <div className="modal">

            <h2>
              {editingTeacher
                ? "Edit Teacher"
                : "Add New Teacher"}
            </h2>

            <form onSubmit={handleSubmit}>

              <label>Full Name</label>

              <input
                type="text"
                name="name"
                placeholder="Enter teacher name"
                value={formData.name}
                onChange={handleChange}
              />

              <label>Email</label>

              <input
                type="email"
                name="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
              />

              <label>Employee ID</label>

              <input
                type="text"
                name="employeeId"
                placeholder="Example: T001"
                value={formData.employeeId}
                onChange={handleChange}
              />

              <label>Department</label>

              <input
                type="text"
                name="department"
                placeholder="Example: Computer Science"
                value={formData.department}
                onChange={handleChange}
              />

              <label>Subject</label>

              <input
                type="text"
                name="subject"
                placeholder="Enter subject"
                value={formData.subject}
                onChange={handleChange}
              />

              <label>Status</label>

              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
              >

                <option value="Active">
                  Active
                </option>

                <option value="Inactive">
                  Inactive
                </option>

              </select>

              <div className="modal-actions">

                <button type="submit">

                  {editingTeacher
                    ? "Update Teacher"
                    : "Add Teacher"}

                </button>

                <button
                  type="button"
                  onClick={() =>
                    setShowForm(false)
                  }
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