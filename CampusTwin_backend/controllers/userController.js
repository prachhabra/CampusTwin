const asyncHandler = require("../utils/asyncHandler");
const User = require("../models/User");
const Attendance = require("../models/Attendance");
const Company = require("../models/Company");

// GET /api/users  (admin only — list all users)
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find().select("-password");
  res.json(users);
});

// GET /api/users/:id
const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id).select("-password");
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json(user);
});

// PUT /api/users/profile  (self — update own profile)
const updateProfile = asyncHandler(async (req, res) => {
  const { name, department, year, profileImage } = req.body;
  const user = await User.findById(req.user._id);
  if (!user) return res.status(404).json({ message: "User not found" });

  if (name) user.name = name;
  if (department) user.department = department;
  if (year) user.year = year;
  if (profileImage) user.profileImage = profileImage;

  await user.save();
  res.json({ success: true, user });
});

// GET /api/users/dashboard  (protected — role-aware summary for the logged-in user)
const getDashboardStats = asyncHandler(async (req, res) => {
  const role = req.user.role;

  if (role === "student") {
    const attendanceRecords = await Attendance.find({ student: req.user._id });
    const present = attendanceRecords.filter((a) => a.status === "present").length;
    const attendancePercent = attendanceRecords.length
      ? Math.round((present / attendanceRecords.length) * 100)
      : 0;

    return res.json({
      role,
      attendancePercent,
      totalClasses: attendanceRecords.length,
      points: req.user.points,
      badges: req.user.badges,
    });
  }

  if (role === "admin") {
    const [totalStudents, totalFaculty, totalCompanies] = await Promise.all([
      User.countDocuments({ role: "student" }),
      User.countDocuments({ role: "faculty" }),
      Company.countDocuments(),
    ]);
    return res.json({ role, totalStudents, totalFaculty, totalCompanies });
  }

  // faculty
  return res.json({ role, message: "Faculty dashboard stats — extend as needed (e.g. sections handled)." });
});

module.exports = { getUsers, getUserById, updateProfile, getDashboardStats };
