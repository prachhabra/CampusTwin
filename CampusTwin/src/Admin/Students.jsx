import React, { useState } from "react";

const initialStudents = [
  {
    id: 1,
    name: "Prachi Chhabra",
    email: "prachi1419.be24@chitkarauniversity.edu.in",
    rollNo: "2411981419",
    course: "B.E. CSE",
    semester: "5",
    status: "Active",
  },
  {
    id: 2,
    name: "Kumar jitin",
    email: "kumar1301.be24@chitkarauniversity.eu.in",
    rollNo: "2411981301",
    course: "B.E. CSE",
    semester: "5",
    status: "Active",
  },
  {
    id: 3,
    name: "Sameer",
    email: "Sameer1493.be24@chitkarauniversity.edu.in",
    rollNo: "2411981493",
    course: "B.E. CSE",
    semester: "5",
    status: "Active",
  },
  {
    id: 4,
    name: "Sukhvinder Kaur",
    email: "sukhvinder1561.be24@chitkarauniversity.edu.in",
    rollNo: "2411981561",
    course: "B.E. CSE",
    semester: "5",
    status: "Active",
  },
  {
    id: 5,
    name: "Drishti Pathak",
    email: "drishti1084.be25@chitkarauniversity.edu.in",
    rollNo: "2511981084",
    course: "B.E. CSE",
    semester: "3",
    status: "Active",
  }
];

export default function Students() {

  const [students, setStudents] =
    useState(initialStudents);

  const [search, setSearch] = useState("");

  const [showForm, setShowForm] =
    useState(false);

  const [editingStudent, setEditingStudent] =
    useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rollNo: "",
    course: "",
    semester: "",
    status: "Active",
  });

  // Handle input
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Add student
  const handleAddStudent = () => {

    setEditingStudent(null);

    setFormData({
      name: "",
      email: "",
      rollNo: "",
      course: "",
      semester: "",
      status: "Active",
    });

    setShowForm(true);
  };

  // Edit student
  const handleEdit = (student) => {

    setEditingStudent(student);

    setFormData({
      name: student.name,
      email: student.email,
      rollNo: student.rollNo,
      course: student.course,
      semester: student.semester,
      status: student.status,
    });

    setShowForm(true);
  };

  // Save student
  const handleSubmit = (e) => {

    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.rollNo ||
      !formData.course ||
      !formData.semester
    ) {
      alert("Please fill all fields");
      return;
    }

    if (editingStudent) {

      setStudents(
        students.map((student) =>
          student.id === editingStudent.id
            ? {
                ...student,
                ...formData,
              }
            : student
        )
      );

      alert("Student updated successfully!");

    } else {

      const newStudent = {
        id: Date.now(),
        ...formData,
      };

      setStudents([
        ...students,
        newStudent,
      ]);

      alert("Student added successfully!");
    }

    setShowForm(false);
  };

  // Delete student
  const handleDelete = (id) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?"
    );

    if (!confirmDelete) return;

    setStudents(
      students.filter(
        (student) => student.id !== id
      )
    );

    alert("Student deleted successfully!");
  };

  // Search
  const filteredStudents =
    students.filter((student) => {

      const text =
        search.toLowerCase();

      return (
        student.name
          .toLowerCase()
          .includes(text) ||

        student.email
          .toLowerCase()
          .includes(text) ||

        student.rollNo
          .toLowerCase()
          .includes(text) ||

        student.course
          .toLowerCase()
          .includes(text)
      );
    });

  return (
    <div className="page-container">

      {/* Header */}

      <div className="admin-page-header">

        <div>

          <h1>👨‍🎓 Student Management</h1>

          <p className="page-subtitle">
            Manage all registered students
          </p>

        </div>

        <button onClick={handleAddStudent}>
          + Add Student
        </button>

      </div>

      {/* Statistics */}

      <div className="card-grid">

        <div className="dashboard-card">

          <h3>Total Students</h3>

          <div className="big-number">
            {students.length}
          </div>

        </div>

        <div className="dashboard-card">

          <h3>Active Students</h3>

          <div className="big-number">

            {
              students.filter(
                (student) =>
                  student.status === "Active"
              ).length
            }

          </div>

        </div>

        <div className="dashboard-card">

          <h3>Inactive Students</h3>

          <div className="big-number">

            {
              students.filter(
                (student) =>
                  student.status === "Inactive"
              ).length
            }

          </div>

        </div>

      </div>

      {/* Search */}

      <div className="dashboard-card">

        <input
          type="text"
          placeholder="🔍 Search by name, email, roll number..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

      </div>

      {/* Students Table */}

      <div className="dashboard-card">

        <h2>All Students</h2>

        <div className="table-container">

          <table>

            <thead>

              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Roll No.</th>
                <th>Course</th>
                <th>Semester</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>

            </thead>

            <tbody>

              {filteredStudents.length > 0 ? (

                filteredStudents.map(
                  (student) => (

                    <tr key={student.id}>

                      <td>
                        <strong>
                          {student.name}
                        </strong>
                      </td>

                      <td>
                        {student.email}
                      </td>

                      <td>
                        {student.rollNo}
                      </td>

                      <td>
                        {student.course}
                      </td>

                      <td>
                        {student.semester}
                      </td>

                      <td>
                        <span className="badge">
                          {student.status}
                        </span>
                      </td>

                      <td>

                        <button
                          onClick={() =>
                            handleEdit(student)
                          }
                        >
                          Edit
                        </button>

                        <button
                          onClick={() =>
                            handleDelete(student.id)
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
                    No students found.
                  </td>

                </tr>

              )}

            </tbody>

          </table>

        </div>

      </div>

      {/* Modal */}

      {showForm && (

        <div className="modal-overlay">

          <div className="modal">

            <h2>
              {editingStudent
                ? "Edit Student"
                : "Add New Student"}
            </h2>

            <form onSubmit={handleSubmit}>

              <label>Full Name</label>

              <input
                type="text"
                name="name"
                placeholder="Enter student name"
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

              <label>Roll Number</label>

              <input
                type="text"
                name="rollNo"
                placeholder="Enter roll number"
                value={formData.rollNo}
                onChange={handleChange}
              />

              <label>Course</label>

              <input
                type="text"
                name="course"
                placeholder="Example: B.E. CSE"
                value={formData.course}
                onChange={handleChange}
              />

              <label>Semester</label>

              <input
                type="number"
                name="semester"
                placeholder="Enter semester"
                value={formData.semester}
                onChange={handleChange}
                min="1"
                max="8"
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
                  {editingStudent
                    ? "Update Student"
                    : "Add Student"}
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