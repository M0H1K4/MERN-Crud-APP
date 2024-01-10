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

// Fetching notes
app.get("/notes", async (req, res) => {
  // Find all notes
  const notes = await Note.find();
  // Respond with them
  res.json({ notes: notes });
});

// Fetch a single note
app.get("/notes/:id", async (req, res) => {
  // Get id off the Url
  const noteId = req.params.id;

  // Find the note using Id
  const note = await Note.findById(noteId);

  // Respond with the note
  res.json({ note: note });
});

// Add a note to the db
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

// Update the note
app.put("/notes/:id", async (req, res) => {
  // Get the id off the Url
  const noteId = req.params.id;

  // Get the data off the req body
  const title = req.body.title;
  const body = req.body.body;

  // Find and update the record
  await Note.findByIdAndUpdate(noteId, {
    title: title,
    body: body,
  });

  // Find updated note
  const note = await Note.findById(noteId);

  // Respond with it
  res.json({ note: note });
});

// Start our server
app.listen(process.env.PORT);
