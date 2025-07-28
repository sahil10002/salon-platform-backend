const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const serviceRoutes = require("./routes/serviceRoutes");
const PORT = process.env.PORT || 5000;


const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/salon-platform", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.error("Mongo error:", err));

app.use("/api/auth", authRoutes);
app.use("/api/services", serviceRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

