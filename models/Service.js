const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  partnerId: String,
  title: String,
  city: String,
  price: Number,
  approved: { type: Boolean, default: false }
});

module.exports = mongoose.model("Service", serviceSchema);
