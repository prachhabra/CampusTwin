const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
  {
    student: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    status: {
      type: String,
      enum: ["applied", "shortlisted", "interview", "selected", "rejected"],
      default: "applied",
    },
  },
  { timestamps: true }
);

const companySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    role: { type: String, default: "" },
    package: { type: String, default: "" },
    eligibility: { type: String, default: "" }, // e.g. "CSE/ECE, CGPA >= 7"
    driveDate: { type: Date },
    applications: [applicationSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Company", companySchema);
