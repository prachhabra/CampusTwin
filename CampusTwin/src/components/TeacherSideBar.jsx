import { NavLink } from "react-router-dom";

const TeacherSideBar = () => {
  const links = [
    ["🏠", "Dashboard", "/teacher"],
    ["👨‍🎓", "Students", "/teacher/students"],
    ["📋", "Attendance", "/teacher/attendance"],
    ["📊", "Analytics", "/teacher/analytics"],
    ["🎉", "Events", "/teacher/events"],
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-title">TEACHER PANEL</div>

      <nav>
        {links.map(([icon, name, path]) => (
          <NavLink
            key={path}
            to={path}
            end={path === "/teacher"}
            className={({ isActive }) =>
              isActive ? "sidebar-link active" : "sidebar-link"
            }
          >
            <span>{icon}</span>
            {name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default TeacherSideBar;