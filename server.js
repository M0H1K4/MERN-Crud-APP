// Load env variables
require("dotenv").config();

// Import Dependencies
const express = require("express");

// Create an express app
const app = express();

// Rouning
app.get("/", (req, res) => {
  res.json({ hello: "world" });
});

// Start our server
app.listen(process.env.PORT);
