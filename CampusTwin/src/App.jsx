// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// import { AuthProvider } from "./context/AuthContext";

// // Layouts
// import AdminLayout from "./layouts/AdminLayout";
// import StudentLayout from "./layouts/StudentLayout";
// import TeacherLayout from "./layouts/TeacherLayout";

// // Authentication
// import Login from "./pages/Login";
// import Register from "./pages/Register";

// // Protection
// import ProtectedRoute from "./components/ProtectedRoute";

// // Admin pages
// import AdminDashboard from "./admin/AdminDashboard";
// import AdminAnalytics from "./admin/AdminAnalytics";
// import AdminEvents from "./admin/AdminEvents";
// import Teachers from "./admin/Teachers";
// import Students from "./admin/Students";
// import AdminClubs from "./admin/AdminClubs";


// // Student pages
// import Achievements from "./student/Achievements";
// import StudentDashboard from "./student/StudentDashboard";
// import Attendance from "./student/Attendance";
// import Analytics from "./student/Analytics";
// import CampusMap from "./Student/CampusMap";
// import Chat from "./Student/Chat";
// import Clubs from "./Student/Clubs";
// import Complaints from "./Student/Complaints";
// import Confession from "./Student/Confession";
// import DigitalID from "./Student/DigitalID";
// import Events from "./Student/Events";
// import LostAndFound from "./Student/LostAndFound";
// import MarketPlace from "./Student/MarketPlace";
// import Placement from "./Student/Placement";
// import Skills from "./Student/Skills";
// import StudyGroup from "./Student/StudyGroup";

// // Teacher pages
// import MyClasses from "./Teacher/MyClasses";
// import TeacherAnalytics from "./teacher/TeacherAnalytics";
// import TeacherAttendance from "./teacher/TeacherAttendance";
// import TeacherDashboard from "./teacher/TeacherDashboard";
// import TeacherEvents from "./teacher/TeacherEvents";
// import TeacherStudents from "./teacher/TeacherStudents";

// function App() {
//   return (
//     <AuthProvider>

//       <BrowserRouter>

//         <Routes>

//           {/* ================================================= */}
//           {/* AUTHENTICATION ROUTES */}
//           {/* ================================================= */}

//           <Route path="/" element={<Login />} />

//           <Route
//             path="/register"
//             element={<Register />}
//           />


//           {/* ================================================= */}
//           {/* ADMIN ROUTES */}
//           {/* ================================================= */}

//           <Route
//             path="/admin"
//             element={
//               <ProtectedRoute role="admin">
//                 <AdminLayout />
//               </ProtectedRoute>
//             }
//           >

//             {/* /admin */}
//             <Route
//               index
//               element={<AdminDashboard />}
//             />

//             {/* /admin/analytics */}
//             <Route
//               path="analytics"
//               element={<AdminAnalytics />}
//             />

//             {/* /admin/students */}
//             <Route
//               path="students"
//               element={<AdminStudents />}
//             />

//             {/* /admin/teachers */}
//             <Route
//               path="teachers"
//               element={<AdminTeachers />}
//             />

//             {/* /admin/users */}
//             <Route
//               path="users"
//               element={<AdminUsers />}
//             />

//             {/* /admin/clubs */}
//             <Route
//               path="clubs"
//               element={<AdminClubs />}
//             />

//             {/* /admin/alerts */}
//             <Route
//               path="alerts"
//               element={<AdminAlerts />}
//             />

//           </Route>


//           {/* ================================================= */}
//           {/* STUDENT ROUTES */}
//           {/* ================================================= */}

//           <Route
//             path="/student"
//             element={
//               <ProtectedRoute role="student">
//                 <StudentLayout />
//               </ProtectedRoute>
//             }
//           >

//             {/* /student */}
//             <Route
//               index
//               element={<StudentDashboard />}
//             />

//             {/* /student/classes */}
//             <Route
//               path="classes"
//               element={<StudentClasses />}
//             />

//             {/* /student/attendance */}
//             <Route
//               path="attendance"
//               element={<StudentAttendance />}
//             />

//             {/* /student/analytics */}
//             <Route
//               path="analytics"
//               element={<StudentAnalytics />}
//             />

//             {/* /student/achievements */}
//             <Route
//               path="achievements"
//               element={<StudentAchievements />}
//             />

//           </Route>


//           {/* ================================================= */}
//           {/* TEACHER ROUTES */}
//           {/* ================================================= */}

//           <Route
//             path="/teacher"
//             element={
//               <ProtectedRoute role="teacher">
//                 <TeacherLayout />
//               </ProtectedRoute>
//             }
//           >

//             {/* /teacher */}
//             <Route
//               index
//               element={<TeacherDashboard />}
//             />

//             {/* /teacher/students */}
//             <Route
//               path="students"
//               element={<TeacherStudents />}
//             />

//             {/* /teacher/attendance */}
//             <Route
//               path="attendance"
//               element={<TeacherAttendance />}
//             />

//             {/* /teacher/analytics */}
//             <Route
//               path="analytics"
//               element={<TeacherAnalytics />}
//             />

//             {/* /teacher/events */}
//             <Route
//               path="events"
//               element={<TeacherEvents />}
//             />

//           </Route>


//           {/* ================================================= */}
//           {/* FALLBACK ROUTE */}
//           {/* ================================================= */}

//           <Route
//             path="*"
//             element={<Navigate to="/" replace />}
//           />

//         </Routes>

//       </BrowserRouter>

//     </AuthProvider>
//   );
// }

// export default App;

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";

import AdminDashboard from "./Admin/AdminDashboard";
import TeacherDashboard from "./Teacher/TeacherDashboard";
import StudentDashboard from "./Student/StudentDashboard";
import Achievements from "./Student/Achievements";
import Analytics from "./Student/Analytics";
import Attendance from "./Student/Attendance";
import CampusMap from "./Student/CampusMap";
import Chat from ".//Student/Chat";
import Clubs from "./Student/Clubs";
import Complaints from "./Student/Complaints";
import Confession from "./Student/Confession";
import DigitalID from "./Student/DigitalID";
import Events from "./Student/Events";
import LostAndFound from "./Student/LostAndFound";
import Marketplace from "./Student/MarketPlace";
import Placement from "./Student/Placement";
import Skills from "./Student/Skills";
import StudyGroup from "./Student/StudyGroup";
import AdminAnalytics from "./Admin/AdminAnalytics";
import AdminClubs from "./Admin/AdminClubs";
import AdminEvents from "./Admin/AdminEvents";
import Students from "./Admin/Students";
import Teachers from "./Admin/Teachers";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* ADMIN ROUTES */}
        <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Route>

        {/* TEACHER ROUTES */}
        <Route element={<ProtectedRoute allowedRoles={["teacher"]} />}>
          <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
        </Route>

        {/* STUDENT ROUTES */}
        <Route element={<ProtectedRoute allowedRoles={["student"]} />}>
          <Route path="/student/dashboard" element={<StudentDashboard />}/>
          <Route path="/student/achievements" element={<Achievements />}/>
<Route path="/student/analytics" element={<Analytics />}/>

<Route
  path="/student/attendance"
  element={<Attendance />}
/>

<Route
  path="/student/campus-map"
  element={<CampusMap />}
/>

<Route
  path="/student/chat"
  element={<Chat />}
/>

<Route
  path="/student/clubs"
  element={<Clubs />}
/>

<Route
  path="/student/complaints"
  element={<Complaints />}
/>

<Route
  path="/student/confession"
  element={<Confession />}
/>

<Route
  path="/student/digital-id"
  element={<DigitalID />}
/>

<Route
  path="/student/events"
  element={<Events />}
/>

<Route
  path="/student/lost-found"
  element={<LostAndFound />}
/>

<Route
  path="/student/marketplace"
  element={<Marketplace />}
/>

<Route
  path="/student/placement"
  element={<Placement />}
/>

<Route
  path="/student/skills"
  element={<Skills />}
/>

<Route path="/student/study-groups" element={<StudyGroup />}/>
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;