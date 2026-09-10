const express = require("express");
const router = express.Router();
const asyncHandler = require("../utils/asyncHandler");
const Message = require("../models/Message");
const { protect } = require("../middleware/authMiddleware");

// GET /api/chat/:room  (protected — fetch message history for a room on load,
// then the client switches to Socket.io for new messages in real time)
router.get(
  "/:room",
  protect,
  asyncHandler(async (req, res) => {
    const messages = await Message.find({ room: req.params.room })
      .populate("sender", "name role")
      .sort({ createdAt: 1 })
      .limit(200);
    res.json(messages);
  })
);

module.exports = router;
