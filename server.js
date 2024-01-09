// Load env variables
if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

// Import Dependencies
const express = require("express");
const connectToDb = require("./config/connectToDb");

// Create an express app
const app = express();

// Connect to the database
connectToDb();

// Rouning
app.get("/", (req, res) => {
  res.json({ hello: "world" });
});

app.post("/notes", (req, res) => {
  // Get the sent in data of request body
  // Create a note with it
  // Respond with the new note
});

// Start our server
app.listen(process.env.PORT);
