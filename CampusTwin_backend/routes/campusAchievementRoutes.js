const express = require("express");
const router = express.Router();
const { addLocation, getLocations, awardPoints } = require("../controllers/campusAchievementController");
const { protect, authorize } = require("../middleware/authMiddleware");

router.post("/locations", protect, authorize("admin"), addLocation);
router.get("/locations", getLocations);
router.post("/achievements/award", protect, authorize("admin", "faculty"), awardPoints);

module.exports = router;
