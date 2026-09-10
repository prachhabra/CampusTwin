const asyncHandler = require("../utils/asyncHandler");
const CampusLocation = require("../models/CampusLocation");
const User = require("../models/User");

// ---- Campus ----

// POST /api/campus  (admin — add a building/location)
const addLocation = asyncHandler(async (req, res) => {
  const { name, code, kind, lat, lng, description } = req.body;
  if (!name || !code) return res.status(400).json({ message: "name and code are required" });

  const location = await CampusLocation.create({ name, code, kind, lat, lng, description });
  res.status(201).json(location);
});

// GET /api/campus
const getLocations = asyncHandler(async (req, res) => {
  const locations = await CampusLocation.find();
  res.json(locations);
});

// ---- Achievements / points & badges ----
// Simple rule-based point system: award points for an activity, and
// auto-grant a badge once the user crosses a threshold.
const BADGE_THRESHOLDS = [
  { points: 50, badge: "Getting Started" },
  { points: 150, badge: "Campus Regular" },
  { points: 300, badge: "Campus Legend" },
];

// POST /api/achievements/award  (internal/admin — body: { userId, points, reason })
const awardPoints = asyncHandler(async (req, res) => {
  const { userId, points, reason } = req.body;
  const user = await User.findById(userId);
  if (!user) return res.status(404).json({ message: "User not found" });

  user.points += Number(points) || 0;

  BADGE_THRESHOLDS.forEach((tier) => {
    if (user.points >= tier.points && !user.badges.includes(tier.badge)) {
      user.badges.push(tier.badge);
    }
  });

  await user.save();
  res.json({ success: true, points: user.points, badges: user.badges, reason });
});

module.exports = { addLocation, getLocations, awardPoints };
