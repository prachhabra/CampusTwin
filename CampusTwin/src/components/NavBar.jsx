// import { useAuth } from "../context/AuthContext";

// const NavBar = () => {

//   const { user, logout } = useAuth();

//   return (
//     <header className="navbar">

//       <div className="navbar-brand">

//         <span className="logo">
//           🏫
//         </span>

//         <span>
//           CampusTwin
//         </span>

//       </div>

//       <div className="navbar-right">

//         {user && (
//           <>
//             <span className="welcome">
//               Hi, {user.name}
//             </span>

//             <button
//               className="logout-btn"
//               onClick={logout}
//             >
//               Logout
//             </button>
//           </>
//         )}

//       </div>

//     </header>
//   );
// };

// export default NavBar;





import { useAuth } from "../context/AuthContext";

function Navbar({ name, role }) {
  const { user } = useAuth();
  const displayName = name || user?.name || "User";
  const displayRole = role || user?.role || "";

  return (
    <nav className="navbar">
      <div className="mobile-logo">CampusTwin</div>
      <div className="search-box">
        <span>🔍</span>
        <input type="text" placeholder="Search...." />
      </div>
      <div className="navbar-right">
        <button className="notification-btn">🔔</button>
        <div className="user-info">
          <div className="avatar">{displayName.charAt(0)}</div>
          <div>
            <strong>{displayName}</strong>
            <small>{displayRole}</small>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
