const QRCode = require("qrcode");
const asyncHandler = require("../utils/asyncHandler");
const Attendance = require("../models/Attendance");
const User = require("../models/User");

// GET /api/attendance/qr/:subject  (faculty generates a QR for a class session)
// Returns a QR code (as a data URL) encoding {studentScanUrl, subject, date}.
// In the real app, a student's phone scans this and calls markAttendance below.
const generateSessionQR = asyncHandler(async (req, res) => {
  const { subject } = req.params;
  const payload = JSON.stringify({ subject, date: new Date().toISOString().slice(0, 10) });
  const qrDataUrl = await QRCode.toDataURL(payload);
  res.json({ subject, qrDataUrl });
});

// POST /api/attendance/mark  (student — body: { subject })
const markAttendance = asyncHandler(async (req, res) => {
  const { subject } = req.body;
  if (!subject) return res.status(400).json({ message: "subject is required" });

  const record = await Attendance.create({
    student: req.user._id,
    subject,
    status: "present",
    markedVia: "qr",
  });
  res.status(201).json(record);
});

// GET /api/attendance/me  (student — own attendance % overall and per subject)
const getMyAttendance = asyncHandler(async (req, res) => {
  const records = await Attendance.find({ student: req.user._id });
  const total = records.length;
  const present = records.filter((r) => r.status === "present").length;

  const bySubject = {};
  records.forEach((r) => {
    bySubject[r.subject] = bySubject[r.subject] || { total: 0, present: 0 };
    bySubject[r.subject].total += 1;
    if (r.status === "present") bySubject[r.subject].present += 1;
  });

  res.json({
    overallPercent: total ? Math.round((present / total) * 100) : 0,
    total,
    present,
    bySubject,
  });
});

// GET /api/attendance/id-card  (student — digital ID info)
const getDigitalId = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id).select("name email role department year profileImage");
  const idPayload = JSON.stringify({ id: user._id, name: user.name, role: user.role });
  const qrDataUrl = await QRCode.toDataURL(idPayload);
  res.json({ user, qrDataUrl });
});

module.exports = { generateSessionQR, markAttendance, getMyAttendance, getDigitalId };
