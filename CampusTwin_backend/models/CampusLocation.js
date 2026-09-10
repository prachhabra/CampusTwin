const mongoose = require("mongoose");

const campusLocationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    code: { type: String, required: true },
    kind: { type: String, default: "academic" }, // academic | admin | hostel | sports | library | event
    lat: { type: Number },
    lng: { type: Number },
    description: { type: String, default: "" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("CampusLocation", campusLocationSchema);
