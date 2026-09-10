// import { Outlet } from "react-router-dom";
// import AdminSideBar from "../components/AdminSideBar";
// import NavBar from "../components/Navbar";
// const AdminLayout = ()=>{
//   return(
//     <div className="app-layout">
//       <NavBar />
//     <div className="layout-body">
//       <AdminSideBar />
//       <main className="main-content">
//         <Outlet />
//       </main>
//     </div>
//     </div>
//   );
// };
// export default AdminLayout;



import AdminSidebar from "../components/AdminSideBar";
import Navbar from "../components/NavBar";

function AdminLayout({ children }) {

  return (
    <div className="app-layout">

      <AdminSidebar />

      <div className="main-area">

        <Navbar />

        <main className="page-content">
          {children}
        </main>

      </div>

    </div>
  );
}

export default AdminLayout;