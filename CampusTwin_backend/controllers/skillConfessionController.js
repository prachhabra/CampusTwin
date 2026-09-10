const asyncHandler = require("../utils/asyncHandler");
const Skill = require("../models/Skill");
const Confession = require("../models/Confession");

// ---- Skills ----

// POST /api/skills
const createSkill = asyncHandler(async (req, res) => {
  const { title, description, type } = req.body;
  if (!title) return res.status(400).json({ message: "title is required" });

  const skill = await Skill.create({ title, description, type, owner: req.user._id });
  res.status(201).json(skill);
});

// GET /api/skills
const getSkills = asyncHandler(async (req, res) => {
  const skills = await Skill.find().populate("owner", "name department");
  res.json(skills);
});

// ---- Confessions (anonymous posts) ----

// POST /api/confessions
const createConfession = asyncHandler(async (req, res) => {
  const { text } = req.body;
  if (!text) return res.status(400).json({ message: "text is required" });

  const confession = await Confession.create({ text, postedBy: req.user._id });
  res.status(201).json({ id: confession._id, text: confession.text, createdAt: confession.createdAt }); // author withheld
});

// GET /api/confessions  (author never included in the response — stays anonymous)
const getConfessions = asyncHandler(async (req, res) => {
  const confessions = await Confession.find()
    .select("-postedBy")
    .sort({ createdAt: -1 });
  res.json(confessions);
});

// POST /api/confessions/:id/like
const likeConfession = asyncHandler(async (req, res) => {
  const confession = await Confession.findById(req.params.id);
  if (!confession) return res.status(404).json({ message: "Confession not found" });

  if (confession.likes.includes(req.user._id)) {
    confession.likes.pull(req.user._id); // toggle unlike
  } else {
    confession.likes.push(req.user._id);
  }
  await confession.save();
  res.json({ likeCount: confession.likes.length });
});

// POST /api/confessions/:id/comment
const commentOnConfession = asyncHandler(async (req, res) => {
  const { text } = req.body;
  const confession = await Confession.findById(req.params.id);
  if (!confession) return res.status(404).json({ message: "Confession not found" });

  confession.comments.push({ text, postedBy: req.user._id });
  await confession.save();
  res.status(201).json(confession.comments[confession.comments.length - 1]);
});

// POST /api/confessions/:id/report
const reportConfession = asyncHandler(async (req, res) => {
  const confession = await Confession.findById(req.params.id);
  if (!confession) return res.status(404).json({ message: "Confession not found" });

  confession.isReported = true;
  await confession.save();
  res.json({ success: true });
});

module.exports = {
  createSkill, getSkills,
  createConfession, getConfessions, likeConfession, commentOnConfession, reportConfession,
};
