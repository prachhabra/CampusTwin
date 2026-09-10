const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true, minlength: 6, select: false },
    role: { type: String, enum: ["student", "faculty", "admin"], default: "student" },
    department: { type: String, default: "" },
    year: { type: Number },
    profileImage: { type: String, default: "" },
    points: { type: Number, default: 0 }, // Ch.12 — achievements/points system
    badges: [{ type: String }], // Ch.12 — earned badge names
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
