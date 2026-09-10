import TeacherSidebar from "../components/TeacherSidebar";
import Navbar from "../components/NavBar";

function TeacherLayout({ children }) {

  return (
    <div className="app-layout">

      <TeacherSidebar />

      <div className="main-area">

        <Navbar />

        <main className="page-content">
          {children}
        </main>

      </div>

    </div>
  );
}

export default TeacherLayout;