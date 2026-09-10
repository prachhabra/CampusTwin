const express = require("express");
const router = express.Router();
const {
  submitComplaint, getComplaints, updateComplaintStatus,
  createStudyGroup, getStudyGroups, joinStudyGroup,
} = require("../controllers/complaintStudyGroupController");
const { protect, authorize } = require("../middleware/authMiddleware");

router.post("/complaints", protect, submitComplaint);
router.get("/complaints", protect, getComplaints);
router.put("/complaints/:id/status", protect, authorize("admin"), updateComplaintStatus);

router.post("/study-groups", protect, createStudyGroup);
router.get("/study-groups", protect, getStudyGroups);
router.post("/study-groups/:id/join", protect, joinStudyGroup);

module.exports = router;
