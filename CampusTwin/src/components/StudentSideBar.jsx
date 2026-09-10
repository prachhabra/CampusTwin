import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function TeacherSidebar() {

  const navigate = useNavigate();
  const { logout } = useAuth();

  const menu = [
    ["📊", "Dashboard", "/teacher/dashboard"],
    ["📚", "My Classes", "/teacher/classes"],
    ["👨‍🎓", "Students", "/teacher/students"],
    ["📋", "Attendance", "/teacher/attendance"],
    ["📅", "Events", "/teacher/events"],
    ["👥", "Study Groups", "/teacher/study-groups"],
    ["🏆", "Clubs", "/teacher/clubs"],
    ["📢", "Complaints", "/teacher/complaints"],
    ["📣", "Announcements", "/teacher/announcements"],
    ["📈", "Analytics", "/teacher/analytics"],
  ];

  return (
    <aside className="sidebar">

      <div className="sidebar-logo">

        <div className="sidebar-logo-icon">
          C
        </div>

        <div>
          <h2>CampusConnect</h2>
          <span>360</span>
        </div>

      </div>

      <div className="role-badge teacher-badge">
        TEACHER
      </div>

      <div className="menu">

        {menu.map(([icon, name, path]) => (

          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              isActive
                ? "menu-item active"
                : "menu-item"
            }
          >

            <span>{icon}</span>

            <span>{name}</span>

          </NavLink>

        ))}

      </div>

      <div className="sidebar-bottom">

        <button
          className="menu-item logout"
          onClick={() => { logout(); navigate("/"); }}
        >
          🚪
          <span>Logout</span>
        </button>

      </div>

    </aside>
  );
}

export default TeacherSidebar;