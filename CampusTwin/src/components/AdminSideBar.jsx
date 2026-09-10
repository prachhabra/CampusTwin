import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function AdminSidebar() {

  const navigate = useNavigate();
  const { logout } = useAuth();

  const menu = [
    ["📊", "Dashboard", "/admin/dashboard"],
    ["👨‍🎓", "Students", "/admin/students"],
    ["👨‍🏫", "Teachers", "/admin/teachers"],
    ["📅", "Events", "/admin/events"],
    ["🏆", "Clubs", "/admin/clubs"],
    ["🛒", "Marketplace", "/admin/marketplace"],
    ["🔍", "Lost & Found", "/admin/lost-found"],
    ["📢", "Complaints", "/admin/complaints"],
    ["👥", "Study Groups", "/admin/study-groups"],
    ["💬", "Confessions", "/admin/confessions"],
    ["💼", "Placements", "/admin/placements"],
    ["📋", "Attendance", "/admin/attendance"],
    ["🗺️", "Campus Map", "/admin/map"],
    ["🎖️", "Achievements", "/admin/achievements"],
    ["📈", "Analytics", "/admin/analytics"],
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

      <div className="role-badge admin-badge">
        ADMIN
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

export default AdminSidebar;