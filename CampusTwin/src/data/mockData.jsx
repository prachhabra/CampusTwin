// ============================================================
// CampusTwin - Mock Data
// Temporary frontend data for development and UI testing
// ============================================================


// ============================================================
// USERS
// ============================================================

export const users = [
  {
    id: 1,
    name: "Prachi Chhabra",
    email: "prachi@campustwin.com",
    role: "student",
    department: "Computer Science",
    year: "3rd Year",
    rollNo: "CSE23045",
    avatar: "P",
  },

  {
    id: 2,
    name: "Dr. Rahul Sharma",
    email: "rahul@campusconnect.com",
    role: "teacher",
    department: "Computer Science",
    designation: "Professor",
    avatar: "R",
  },

  {
    id: 3,
    name: "Campus Admin",
    email: "admin@campusconnect.com",
    role: "admin",
    department: "Administration",
    avatar: "A",
  },
];


// ============================================================
// STUDENTS
// ============================================================

export const students = [
  {
    id: 1,
    name: "Prachi Chhabra",
    rollNo: "CSE23045",
    department: "CSE",
    year: "3rd Year",
    email: "prachi@example.com",
    attendance: 85,
    cgpa: 8.6,
    status: "Active",
  },

  {
    id: 2,
    name: "Aarav Singh",
    rollNo: "CSE23046",
    department: "CSE",
    year: "3rd Year",
    email: "aarav@example.com",
    attendance: 91,
    cgpa: 9.1,
    status: "Active",
  },

  {
    id: 3,
    name: "Ananya Sharma",
    rollNo: "ECE23021",
    department: "ECE",
    year: "3rd Year",
    email: "ananya@example.com",
    attendance: 78,
    cgpa: 8.2,
    status: "Active",
  },

  {
    id: 4,
    name: "Rohan Kumar",
    rollNo: "CSE23051",
    department: "CSE",
    year: "3rd Year",
    email: "rohan@example.com",
    attendance: 72,
    cgpa: 7.9,
    status: "Active",
  },

  {
    id: 5,
    name: "Simran Kaur",
    rollNo: "AIML23018",
    department: "AI & ML",
    year: "3rd Year",
    email: "simran@example.com",
    attendance: 94,
    cgpa: 9.3,
    status: "Active",
  },
];


// ============================================================
// TEACHERS
// ============================================================

export const teachers = [
  {
    id: 1,
    name: "Dr. Rahul Sharma",
    employeeId: "FAC001",
    department: "CSE",
    designation: "Professor",
    email: "rahul@campusconnect.com",
    subjects: ["Data Structures", "Algorithms"],
  },

  {
    id: 2,
    name: "Dr. Neha Kapoor",
    employeeId: "FAC002",
    department: "CSE",
    designation: "Associate Professor",
    email: "neha@campusconnect.com",
    subjects: ["DBMS", "Operating Systems"],
  },

  {
    id: 3,
    name: "Dr. Amit Verma",
    employeeId: "FAC003",
    department: "ECE",
    designation: "Assistant Professor",
    email: "amit@campusconnect.com",
    subjects: ["Digital Electronics"],
  },
];


// ============================================================
// EVENTS
// ============================================================

export const events = [
  {
    id: 1,
    title: "Campus Hackathon 2026",
    description:
      "A 24-hour coding and innovation challenge for students.",
    date: "2026-08-20",
    time: "10:00 AM",
    location: "Main Auditorium",
    organizer: "Coding Club",
    category: "Technical",
    participants: 180,
    status: "Upcoming",
  },

  {
    id: 2,
    title: "AI & Machine Learning Workshop",
    description:
      "Hands-on workshop covering modern AI and ML concepts.",
    date: "2026-08-25",
    time: "11:00 AM",
    location: "Seminar Hall",
    organizer: "AI Club",
    category: "Workshop",
    participants: 120,
    status: "Upcoming",
  },

  {
    id: 3,
    title: "Independence Day Celebration",
    description:
      "Cultural and patriotic celebration on campus.",
    date: "2026-08-15",
    time: "09:00 AM",
    location: "University Ground",
    organizer: "Student Council",
    category: "Cultural",
    participants: 850,
    status: "Completed",
  },

  {
    id: 4,
    title: "Resume Building Session",
    description:
      "Interactive session on creating industry-ready resumes.",
    date: "2026-08-28",
    time: "02:00 PM",
    location: "Block A",
    organizer: "Placement Cell",
    category: "Career",
    participants: 95,
    status: "Upcoming",
  },
];


// ============================================================
// CLUBS
// ============================================================

export const clubs = [
  {
    id: 1,
    name: "Coding Club",
    category: "Technical",
    members: 245,
    president: "Aarav Singh",
    description:
      "A community for programming, competitive coding and development.",
    status: "Active",
  },

  {
    id: 2,
    name: "AI & Robotics Club",
    category: "Technical",
    members: 180,
    president: "Simran Kaur",
    description:
      "Explore artificial intelligence, robotics and automation.",
    status: "Active",
  },

  {
    id: 3,
    name: "Photography Club",
    category: "Creative",
    members: 96,
    president: "Riya Mehta",
    description:
      "A creative community for photography enthusiasts.",
    status: "Active",
  },

  {
    id: 4,
    name: "Dance Club",
    category: "Cultural",
    members: 130,
    president: "Mehak Sharma",
    description:
      "Promoting dance, performance and cultural expression.",
    status: "Active",
  },
];


// ============================================================
// MARKETPLACE
// ============================================================

export const marketplaceItems = [
  {
    id: 1,
    title: "Engineering Mathematics Book",
    description: "Used but well-maintained textbook.",
    price: 350,
    seller: "Aarav Singh",
    category: "Books",
    condition: "Good",
    location: "Hostel Block A",
    image: "📚",
  },

  {
    id: 2,
    title: "Scientific Calculator",
    description: "Casio scientific calculator.",
    price: 700,
    seller: "Rohan Kumar",
    category: "Electronics",
    condition: "Excellent",
    location: "Academic Block",
    image: "🧮",
  },

  {
    id: 3,
    title: "Drawing Tablet",
    description: "Graphics tablet suitable for design students.",
    price: 2500,
    seller: "Simran Kaur",
    category: "Electronics",
    condition: "Good",
    location: "Hostel Block B",
    image: "🎨",
  },

  {
    id: 4,
    title: "Programming Books Bundle",
    description: "Collection of C++, Java and Python books.",
    price: 900,
    seller: "Riya Mehta",
    category: "Books",
    condition: "Good",
    location: "Library",
    image: "📖",
  },
];


// ============================================================
// LOST & FOUND
// ============================================================

export const lostFoundItems = [
  {
    id: 1,
    title: "Black Wallet",
    type: "Lost",
    category: "Personal",
    location: "Library",
    date: "2026-08-12",
    reportedBy: "Prachi Chhabra",
    status: "Searching",
  },

  {
    id: 2,
    title: "Blue Water Bottle",
    type: "Found",
    category: "Accessories",
    location: "Cafeteria",
    date: "2026-08-13",
    reportedBy: "Aarav Singh",
    status: "Available",
  },

  {
    id: 3,
    title: "AirPods Case",
    type: "Lost",
    category: "Electronics",
    location: "Block B",
    date: "2026-08-14",
    reportedBy: "Ananya Sharma",
    status: "Searching",
  },

  {
    id: 4,
    title: "College ID Card",
    type: "Found",
    category: "Documents",
    location: "Main Gate",
    date: "2026-08-14",
    reportedBy: "Security Office",
    status: "Available",
  },
];


// ============================================================
// HOSTEL COMPLAINTS
// ============================================================

export const complaints = [
  {
    id: "CMP001",
    title: "Water leakage in bathroom",
    category: "Maintenance",
    hostel: "Hostel A",
    room: "A-204",
    submittedBy: "Prachi Chhabra",
    date: "2026-08-12",
    priority: "High",
    status: "Pending",
  },

  {
    id: "CMP002",
    title: "AC not working",
    category: "Electrical",
    hostel: "Hostel B",
    room: "B-302",
    submittedBy: "Rohan Kumar",
    date: "2026-08-13",
    priority: "Medium",
    status: "In Progress",
  },

  {
    id: "CMP003",
    title: "Room light replacement",
    category: "Electrical",
    hostel: "Hostel A",
    room: "A-102",
    submittedBy: "Simran Kaur",
    date: "2026-08-14",
    priority: "Low",
    status: "Resolved",
  },
];


// ============================================================
// STUDY GROUPS
// ============================================================

export const studyGroups = [
  {
    id: 1,
    name: "DSA Warriors",
    subject: "Data Structures & Algorithms",
    members: 18,
    maxMembers: 25,
    createdBy: "Aarav Singh",
    schedule: "Monday & Wednesday - 6 PM",
    location: "Library",
  },

  {
    id: 2,
    name: "DBMS Study Circle",
    subject: "Database Management Systems",
    members: 12,
    maxMembers: 20,
    createdBy: "Prachi Chhabra",
    schedule: "Tuesday - 5 PM",
    location: "Block B",
  },

  {
    id: 3,
    name: "ML Beginners",
    subject: "Machine Learning",
    members: 22,
    maxMembers: 30,
    createdBy: "Simran Kaur",
    schedule: "Friday - 4 PM",
    location: "Innovation Lab",
  },
];


// ============================================================
// SKILL EXCHANGE
// ============================================================

export const skillExchange = [
  {
    id: 1,
    student: "Prachi Chhabra",
    teaches: "Web Development",
    wantsToLearn: "UI/UX Design",
    level: "Intermediate",
  },

  {
    id: 2,
    student: "Aarav Singh",
    teaches: "Competitive Programming",
    wantsToLearn: "Machine Learning",
    level: "Advanced",
  },

  {
    id: 3,
    student: "Simran Kaur",
    teaches: "Machine Learning",
    wantsToLearn: "Cloud Computing",
    level: "Intermediate",
  },

  {
    id: 4,
    student: "Riya Mehta",
    teaches: "Photography",
    wantsToLearn: "Video Editing",
    level: "Advanced",
  },
];


// ============================================================
// ANONYMOUS CONFESSIONS
// ============================================================

export const confessions = [
  {
    id: 1,
    text: "The campus library has become my favourite place to study.",
    category: "Campus Life",
    likes: 34,
    comments: 8,
    date: "2026-08-14",
  },

  {
    id: 2,
    text: "I wish there were more late-night study spaces.",
    category: "Suggestion",
    likes: 51,
    comments: 12,
    date: "2026-08-13",
  },

  {
    id: 3,
    text: "The coding club event was amazing!",
    category: "Appreciation",
    likes: 73,
    comments: 15,
    date: "2026-08-12",
  },
];


// ============================================================
// PLACEMENT COMPANIES
// ============================================================

export const placementCompanies = [
  {
    id: 1,
    company: "TechNova",
    role: "Software Engineer",
    package: "12 LPA",
    eligibility: "7.5 CGPA",
    deadline: "2026-08-22",
    applicants: 145,
    status: "Open",
  },

  {
    id: 2,
    company: "DataSphere",
    role: "Data Analyst",
    package: "9 LPA",
    eligibility: "7.0 CGPA",
    deadline: "2026-08-25",
    applicants: 98,
    status: "Open",
  },

  {
    id: 3,
    company: "CloudWorks",
    role: "Cloud Engineer",
    package: "10 LPA",
    eligibility: "7.5 CGPA",
    deadline: "2026-08-28",
    applicants: 76,
    status: "Open",
  },

  {
    id: 4,
    company: "Innovate Labs",
    role: "Frontend Developer",
    package: "8 LPA",
    eligibility: "7.0 CGPA",
    deadline: "2026-08-18",
    applicants: 120,
    status: "Closing Soon",
  },
];


// ============================================================
// ATTENDANCE
// ============================================================

export const attendance = [
  {
    subject: "Data Structures",
    totalClasses: 40,
    attended: 36,
    percentage: 90,
  },

  {
    subject: "DBMS",
    totalClasses: 38,
    attended: 32,
    percentage: 84,
  },

  {
    subject: "Operating Systems",
    totalClasses: 35,
    attended: 30,
    percentage: 86,
  },

  {
    subject: "Computer Networks",
    totalClasses: 32,
    attended: 25,
    percentage: 78,
  },

  {
    subject: "Web Development",
    totalClasses: 30,
    attended: 28,
    percentage: 93,
  },
];


// ============================================================
// ACHIEVEMENTS / BADGES
// ============================================================

export const achievements = [
  {
    id: 1,
    name: "Event Explorer",
    description: "Participated in 5 campus events.",
    icon: "🎯",
    earned: true,
    date: "2026-07-20",
  },

  {
    id: 2,
    name: "Club Champion",
    description: "Actively participated in a campus club.",
    icon: "🏆",
    earned: true,
    date: "2026-07-25",
  },

  {
    id: 3,
    name: "Study Buddy",
    description: "Joined 3 study groups.",
    icon: "📚",
    earned: true,
    date: "2026-08-01",
  },

  {
    id: 4,
    name: "Helping Hand",
    description: "Helped resolve a lost & found case.",
    icon: "🤝",
    earned: false,
    date: null,
  },

  {
    id: 5,
    name: "Skill Sharer",
    description: "Successfully completed a skill exchange.",
    icon: "💡",
    earned: false,
    date: null,
  },
];


// ============================================================
// ANNOUNCEMENTS
// ============================================================

export const announcements = [
  {
    id: 1,
    title: "Semester registration deadline extended",
    message:
      "Students can complete their semester registration until August 20.",
    postedBy: "Administration",
    date: "2026-08-15",
    priority: "Important",
  },

  {
    id: 2,
    title: "Hackathon registrations are open",
    message:
      "Register now for the Campus Hackathon 2026.",
    postedBy: "Coding Club",
    date: "2026-08-14",
    priority: "Normal",
  },

  {
    id: 3,
    title: "Placement drive announcement",
    message:
      "TechNova placement registrations are now open.",
    postedBy: "Placement Cell",
    date: "2026-08-13",
    priority: "Important",
  },
];


// ============================================================
// CHAT USERS
// ============================================================

export const chatUsers = [
  {
    id: 1,
    name: "Aarav Singh",
    role: "Student",
    online: true,
    lastMessage: "Did you complete the assignment?",
    time: "10:30 AM",
  },

  {
    id: 2,
    name: "Dr. Rahul Sharma",
    role: "Teacher",
    online: true,
    lastMessage: "See you in class tomorrow.",
    time: "09:45 AM",
  },

  {
    id: 3,
    name: "Simran Kaur",
    role: "Student",
    online: false,
    lastMessage: "Let's join the ML study group.",
    time: "Yesterday",
  },
];


// ============================================================
// CAMPUS LOCATIONS
// ============================================================

export const campusLocations = [
  {
    id: 1,
    name: "Main Academic Block",
    category: "Academic",
    description: "Main teaching and administrative building.",
    latitude: 30.516,
    longitude: 76.659,
  },

  {
    id: 2,
    name: "Central Library",
    category: "Academic",
    description: "Central university library.",
    latitude: 30.517,
    longitude: 76.661,
  },

  {
    id: 3,
    name: "Student Cafeteria",
    category: "Food",
    description: "Main student cafeteria.",
    latitude: 30.515,
    longitude: 76.660,
  },

  {
    id: 4,
    name: "Main Auditorium",
    category: "Events",
    description: "Venue for major campus events.",
    latitude: 30.518,
    longitude: 76.658,
  },

  {
    id: 5,
    name: "Hostel Block A",
    category: "Hostel",
    description: "Student residential block.",
    latitude: 30.514,
    longitude: 76.662,
  },
];


// ============================================================
// ADMIN DASHBOARD STATS
// ============================================================

export const adminStats = {
  totalStudents: 2450,
  totalTeachers: 180,
  activeEvents: 42,
  pendingComplaints: 18,
  activeClubs: 24,
  studyGroups: 56,
  placementDrives: 12,
  marketplaceListings: 148,
};


// ============================================================
// TEACHER DASHBOARD STATS
// ============================================================

export const teacherStats = {
  classes: 5,
  students: 180,
  attendance: 87,
  assignments: 12,
};


// ============================================================
// STUDENT DASHBOARD STATS
// ============================================================

export const studentStats = {
  attendance: 85,
  upcomingEvents: 4,
  applications: 3,
  achievements: 8,
};


// ============================================================
// ANALYTICS DATA
// ============================================================

export const analyticsData = {

  studentsByDepartment: {
    labels: ["CSE", "ECE", "AI & ML", "Mechanical", "Civil"],
    data: [850, 420, 390, 320, 280],
  },

  eventParticipation: {
    labels: [
      "Technical",
      "Cultural",
      "Sports",
      "Workshop",
      "Career",
    ],
    data: [420, 350, 280, 310, 240],
  },

  attendance: {
    labels: [
      "Data Structures",
      "DBMS",
      "OS",
      "Networks",
      "Web Development",
    ],
    data: [90, 84, 86, 78, 93],
  },

};


// ============================================================
// NOTIFICATIONS
// ============================================================

export const notifications = [
  {
    id: 1,
    title: "New event available",
    message: "Campus Hackathon 2026 registrations are open.",
    type: "event",
    read: false,
  },

  {
    id: 2,
    title: "Attendance reminder",
    message: "Your Computer Networks attendance is below 80%.",
    type: "attendance",
    read: false,
  },

  {
    id: 3,
    title: "Achievement unlocked",
    message: "You earned the Study Buddy badge.",
    type: "achievement",
    read: true,
  },

  {
    id: 4,
    title: "Placement update",
    message: "TechNova placement registration is open.",
    type: "placement",
    read: false,
  },
];


// ============================================================
// EXPORT ALL DATA
// ============================================================

const mockData = {
  users,
  students,
  teachers,
  events,
  clubs,
  marketplaceItems,
  lostFoundItems,
  complaints,
  studyGroups,
  skillExchange,
  confessions,
  placementCompanies,
  attendance,
  achievements,
  announcements,
  chatUsers,
  campusLocations,
  adminStats,
  teacherStats,
  studentStats,
  analyticsData,
  notifications,
};

export default mockData;