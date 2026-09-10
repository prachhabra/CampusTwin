const asyncHandler = require("../utils/asyncHandler");
const Complaint = require("../models/Complaint");
const StudyGroup = require("../models/StudyGroup");

// ---- Complaints ----

// POST /api/complaints
const submitComplaint = asyncHandler(async (req, res) => {
  const { subject, description, category } = req.body;
  if (!subject || !description) return res.status(400).json({ message: "subject and description are required" });

  const complaint = await Complaint.create({ subject, description, category, submittedBy: req.user._id });
  res.status(201).json(complaint);
});

// GET /api/complaints  (admin sees all, others see their own)
const getComplaints = asyncHandler(async (req, res) => {
  const filter = req.user.role === "admin" ? {} : { submittedBy: req.user._id };
  const complaints = await Complaint.find(filter).populate("submittedBy", "name email").sort({ createdAt: -1 });
  res.json(complaints);
});

// PUT /api/complaints/:id/status  (admin only)
const updateComplaintStatus = asyncHandler(async (req, res) => {
  const { status } = req.body;
  const complaint = await Complaint.findById(req.params.id);
  if (!complaint) return res.status(404).json({ message: "Complaint not found" });

  complaint.status = status;
  await complaint.save();
  res.json(complaint);
});

// ---- Study Groups ----

// POST /api/study-groups
const createStudyGroup = asyncHandler(async (req, res) => {
  const { name, subject, description } = req.body;
  if (!name) return res.status(400).json({ message: "name is required" });

  const group = await StudyGroup.create({ name, subject, description, createdBy: req.user._id, members: [req.user._id] });
  res.status(201).json(group);
});

// GET /api/study-groups
const getStudyGroups = asyncHandler(async (req, res) => {
  const groups = await StudyGroup.find().populate("createdBy", "name").populate("members", "name");
  res.json(groups);
});

// POST /api/study-groups/:id/join
const joinStudyGroup = asyncHandler(async (req, res) => {
  const group = await StudyGroup.findById(req.params.id);
  if (!group) return res.status(404).json({ message: "Study group not found" });

  if (group.members.includes(req.user._id)) {
    return res.status(400).json({ message: "Already a member" });
  }
  group.members.push(req.user._id);
  await group.save();
  res.json({ success: true, group });
});

module.exports = {
  submitComplaint, getComplaints, updateComplaintStatus,
  createStudyGroup, getStudyGroups, joinStudyGroup,
};
