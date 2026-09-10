const asyncHandler = require("../utils/asyncHandler");
const Event = require("../models/Event");
const Club = require("../models/Club");

// ---- Events ----

// POST /api/events
const createEvent = asyncHandler(async (req, res) => {
  const { title, description, date, venue } = req.body;
  if (!title || !date) return res.status(400).json({ message: "title and date are required" });

  const event = await Event.create({ title, description, date, venue, organizer: req.user._id });
  res.status(201).json(event);
});

// GET /api/events
const getEvents = asyncHandler(async (req, res) => {
  const events = await Event.find().populate("organizer", "name").sort({ date: 1 });
  res.json(events);
});

// POST /api/events/:id/register
const registerForEvent = asyncHandler(async (req, res) => {
  const event = await Event.findById(req.params.id);
  if (!event) return res.status(404).json({ message: "Event not found" });

  if (event.registeredStudents.includes(req.user._id)) {
    return res.status(400).json({ message: "Already registered" });
  }
  event.registeredStudents.push(req.user._id);
  await event.save();
  res.json({ success: true, event });
});

// ---- Clubs ----

// POST /api/clubs
const createClub = asyncHandler(async (req, res) => {
  const { name, description } = req.body;
  if (!name) return res.status(400).json({ message: "name is required" });

  const club = await Club.create({ name, description, createdBy: req.user._id, members: [req.user._id] });
  res.status(201).json(club);
});

// GET /api/clubs
const getClubs = asyncHandler(async (req, res) => {
  const clubs = await Club.find().populate("createdBy", "name").populate("members", "name");
  res.json(clubs);
});

// POST /api/clubs/:id/join
const joinClub = asyncHandler(async (req, res) => {
  const club = await Club.findById(req.params.id);
  if (!club) return res.status(404).json({ message: "Club not found" });

  if (club.members.includes(req.user._id)) {
    return res.status(400).json({ message: "Already a member" });
  }
  club.members.push(req.user._id);
  await club.save();
  res.json({ success: true, club });
});

module.exports = { createEvent, getEvents, registerForEvent, createClub, getClubs, joinClub };
