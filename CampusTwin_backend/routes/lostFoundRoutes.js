const express = require("express");
const router = express.Router();
const { reportItem, getItems, markReturned } = require("../controllers/lostFoundController");
const { protect } = require("../middleware/authMiddleware");

router.post("/", protect, reportItem);
router.get("/", getItems);
router.put("/:id/returned", protect, markReturned);

module.exports = router;
