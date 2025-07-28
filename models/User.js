const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  role: String, // admin, partner, customer
  name: String,
  email: String,
  password: String
});

module.exports = mongoose.model("User", userSchema);
