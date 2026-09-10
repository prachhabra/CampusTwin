const asyncHandler = require("../utils/asyncHandler");
const Company = require("../models/Company");

// POST /api/placements  (admin/faculty — add a company drive)
const addCompany = asyncHandler(async (req, res) => {
  const { name, role, package: pkg, eligibility, driveDate } = req.body;
  if (!name) return res.status(400).json({ message: "name is required" });

  const company = await Company.create({ name, role, package: pkg, eligibility, driveDate });
  res.status(201).json(company);
});

// GET /api/placements
const getCompanies = asyncHandler(async (req, res) => {
  const companies = await Company.find().populate("applications.student", "name email department");
  res.json(companies);
});

// POST /api/placements/:id/apply  (student)
const applyToCompany = asyncHandler(async (req, res) => {
  const company = await Company.findById(req.params.id);
  if (!company) return res.status(404).json({ message: "Company not found" });

  const already = company.applications.find((a) => String(a.student) === String(req.user._id));
  if (already) return res.status(400).json({ message: "Already applied" });

  company.applications.push({ student: req.user._id });
  await company.save();
  res.status(201).json({ success: true });
});

// PUT /api/placements/:id/applications/:studentId  (admin — update selection status)
const updateApplicationStatus = asyncHandler(async (req, res) => {
  const { status } = req.body;
  const company = await Company.findById(req.params.id);
  if (!company) return res.status(404).json({ message: "Company not found" });

  const application = company.applications.find((a) => String(a.student) === req.params.studentId);
  if (!application) return res.status(404).json({ message: "Application not found" });

  application.status = status;
  await company.save();
  res.json({ success: true, application });
});

module.exports = { addCompany, getCompanies, applyToCompany, updateApplicationStatus };
