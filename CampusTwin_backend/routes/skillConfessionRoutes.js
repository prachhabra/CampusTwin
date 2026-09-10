const express = require("express");
const router = express.Router();
const {
  createSkill, getSkills,
  createConfession, getConfessions, likeConfession, commentOnConfession, reportConfession,
} = require("../controllers/skillConfessionController");
const { protect } = require("../middleware/authMiddleware");

router.post("/skills", protect, createSkill);
router.get("/skills", getSkills);

router.post("/confessions", protect, createConfession);
router.get("/confessions", getConfessions);
router.post("/confessions/:id/like", protect, likeConfession);
router.post("/confessions/:id/comment", protect, commentOnConfession);
router.post("/confessions/:id/report", protect, reportConfession);

module.exports = router;
