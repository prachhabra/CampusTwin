const express = require("express");
const router = express.Router();
const {
  generateSessionQR, markAttendance, getMyAttendance, getDigitalId,
} = require("../controllers/attendanceController");
const { protect, authorize } = require("../middleware/authMiddleware");

router.get("/qr/:subject", protect, authorize("faculty", "admin"), generateSessionQR);
router.post("/mark", protect, authorize("student"), markAttendance);
router.get("/me", protect, getMyAttendance);
router.get("/id-card", protect, getDigitalId);

module.exports = router;
