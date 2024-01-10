// Load env variables
if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

// Import Dependencies
const express = require("express");
const connectToDb = require("./config/connectToDb");
const Note = require("./models/note");

// Create an express app
const app = express();

// Configure express app
app.use(express.json());

// Connect to the database
connectToDb();

// Rouning
app.get("/", (req, res) => {
  res.json({ hello: "world" });
});

app.get("/notes", async (req, res) => {
  // Find all notes
  const notes = await Note.find();
  // Respond with them
  res.json({ notes: notes });
});

app.post("/notes", async (req, res) => {
  // Get the sent in data of request body
  const title = req.body.title;
  const body = req.body.body;

  // Create a note with it
  const note = await Note.create({
    title: title,
    body: body,
  });

  // Respond with the new note
  res.json({ note: note });
});

// Start our server
app.listen(process.env.PORT);
