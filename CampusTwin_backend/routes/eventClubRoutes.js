const express = require("express");
const router = express.Router();
const {
  createEvent, getEvents, registerForEvent, createClub, getClubs, joinClub,
} = require("../controllers/eventClubController");
const { protect } = require("../middleware/authMiddleware");

router.post("/events", protect, createEvent);
router.get("/events", getEvents);
router.post("/events/:id/register", protect, registerForEvent);

router.post("/clubs", protect, createClub);
router.get("/clubs", getClubs);
router.post("/clubs/:id/join", protect, joinClub);

module.exports = router;
