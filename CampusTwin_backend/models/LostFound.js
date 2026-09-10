const mongoose = require("mongoose");

const lostFoundSchema = new mongoose.Schema(
  {
    type: { type: String, enum: ["lost", "found"], required: true },
    itemName: { type: String, required: true, trim: true },
    description: { type: String, default: "" },
    location: { type: String, default: "" },
    image: { type: String, default: "" },
    reportedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    isReturned: { type: Boolean, default: false },
  },
  { timestamps: true }
);

lostFoundSchema.index({ itemName: "text", description: "text" });

module.exports = mongoose.model("LostFound", lostFoundSchema);
