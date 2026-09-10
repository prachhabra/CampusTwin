const express = require("express");
const router = express.Router();
const {
  addCompany, getCompanies, applyToCompany, updateApplicationStatus,
} = require("../controllers/placementController");
const { protect, authorize } = require("../middleware/authMiddleware");

router.post("/", protect, authorize("admin", "faculty"), addCompany);
router.get("/", protect, getCompanies);
router.post("/:id/apply", protect, authorize("student"), applyToCompany);
router.put("/:id/applications/:studentId", protect, authorize("admin"), updateApplicationStatus);

module.exports = router;
