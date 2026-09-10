// import { Outlet } from "react-router-dom";
// import { StudentSideBar } from "../components/StudentSideBar";
// import NavBar from "../components/Navbar";
// const StudentLayout = ()=>{
//   return(
//     <div className="app-layout">
//       <NavBar />
//       <div className="layout-body">
//         <StudentSideBar />
//         <main className="main-content">
//           <Outlet />
//         </main>
//       </div>
//     </div>
//   );
// };
// export default StudentLayout;


import StudentSidebar from "../components/StudentSideBar";
import Navbar from "../components/NavBar";

function StudentLayout({ children }) {

  return (
    <div className="app-layout">

      <StudentSidebar />

      <div className="main-area">

        <Navbar />

        <main className="page-content">
          {children}
        </main>

      </div>

    </div>
  );
}

export default StudentLayout;