const express = require("express");
const router = express.Router();
const { getUsers, getUserById, updateProfile, getDashboardStats } = require("../controllers/userController");
const { protect, authorize } = require("../middleware/authMiddleware");

router.get("/", protect, authorize("admin"), getUsers);
router.get("/dashboard", protect, getDashboardStats);
router.put("/profile", protect, updateProfile);
router.get("/:id", protect, getUserById);

module.exports = router;
