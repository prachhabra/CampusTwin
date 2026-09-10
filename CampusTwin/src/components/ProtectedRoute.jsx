// import { Navigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
// const ProtectedRoute = ({children, role})=>{
//   const {user}= useAuth();
//   if(!user){
//     return <Navigate to="/login" replace />
//   }
//   if(role && user.role!==role){
//     return <Navigate to="/login" replace />
//   }
//   return children;
// };
// export default ProtectedRoute;







import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute({ allowedRoles }) {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  // User is not logged in
  if (!token) {
    return <Navigate to="/" replace />;
  }

  // User doesn't have permission for this section
  if (allowedRoles && !allowedRoles.includes(role)) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
