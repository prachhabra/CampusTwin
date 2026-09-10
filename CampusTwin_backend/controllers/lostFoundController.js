const asyncHandler = require("../utils/asyncHandler");
const LostFound = require("../models/LostFound");

// POST /api/lostfound
const reportItem = asyncHandler(async (req, res) => {
  const { type, itemName, description, location, image } = req.body;
  if (!type || !itemName) return res.status(400).json({ message: "type and itemName are required" });

  const item = await LostFound.create({ type, itemName, description, location, image, reportedBy: req.user._id });
  res.status(201).json(item);
});

// GET /api/lostfound?search=&type=
const getItems = asyncHandler(async (req, res) => {
  const { search, type } = req.query;
  const filter = {};
  if (type) filter.type = type;
  if (search) filter.$text = { $search: search };

  const items = await LostFound.find(filter).populate("reportedBy", "name email").sort({ createdAt: -1 });
  res.json(items);
});

// PUT /api/lostfound/:id/returned
const markReturned = asyncHandler(async (req, res) => {
  const item = await LostFound.findById(req.params.id);
  if (!item) return res.status(404).json({ message: "Item not found" });

  item.isReturned = true;
  await item.save();
  res.json(item);
});

module.exports = { reportItem, getItems, markReturned };
