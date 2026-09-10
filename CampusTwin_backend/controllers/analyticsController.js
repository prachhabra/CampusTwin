const asyncHandler = require("../utils/asyncHandler");
const User = require("../models/User");
const Attendance = require("../models/Attendance");
const Company = require("../models/Company");
const Event = require("../models/Event");
const Complaint = require("../models/Complaint");

// GET /api/analytics/overview  (admin — campus-wide stats for the analytics dashboard)
const getOverview = asyncHandler(async (req, res) => {
  const [totalStudents, totalFaculty, totalEvents, openComplaints] = await Promise.all([
    User.countDocuments({ role: "student" }),
    User.countDocuments({ role: "faculty" }),
    Event.countDocuments(),
    Complaint.countDocuments({ status: { $ne: "resolved" } }),
  ]);

  const attendanceAgg = await Attendance.aggregate([
    { $group: { _id: "$status", count: { $sum: 1 } } },
  ]);
  const present = attendanceAgg.find((a) => a._id === "present")?.count || 0;
  const absent = attendanceAgg.find((a) => a._id === "absent")?.count || 0;
  const attendancePercent = present + absent ? Math.round((present / (present + absent)) * 100) : 0;

  const placementAgg = await Company.aggregate([
    { $unwind: "$applications" },
    { $group: { _id: "$applications.status", count: { $sum: 1 } } },
  ]);
  const selected = placementAgg.find((p) => p._id === "selected")?.count || 0;

  res.json({
    totalStudents,
    totalFaculty,
    totalEvents,
    openComplaints,
    attendancePercent,
    studentsPlaced: selected,
  });
});

// GET /api/analytics/department-strength
const getDepartmentStrength = asyncHandler(async (req, res) => {
  const result = await User.aggregate([
    { $match: { role: "student" } },
    { $group: { _id: "$department", count: { $sum: 1 } } },
    { $sort: { count: -1 } },
  ]);
  res.json(result.map((r) => ({ department: r._id || "Unspecified", count: r.count })));
});

module.exports = { getOverview, getDepartmentStrength };
