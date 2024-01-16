const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");

// In your index.js file, add the following at the top.
require("dotenv").config();

const app = express();

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//MiddleWare

app.post(userRoutes);

app.use(express.json());
app.listen(5000, () => {
  console.log(`Server Started at ${5000}`);
});
