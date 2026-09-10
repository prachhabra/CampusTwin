const express = require("express");
const router = express.Router();
const { getOverview, getDepartmentStrength } = require("../controllers/analyticsController");
const { protect, authorize } = require("../middleware/authMiddleware");

router.get("/overview", protect, authorize("admin"), getOverview);
router.get("/department-strength", protect, authorize("admin"), getDepartmentStrength);

module.exports = router;
