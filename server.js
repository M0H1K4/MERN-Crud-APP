// Load env variables
if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

// Import Dependencies
const express = require("express");
const connectToDb = require("./config/connectToDb");
const notesController = require("./controlers/notesControllers");

// Create an express app
const app = express();

// Configure express app
app.use(express.json());

// Connect to the database
connectToDb();

// Rouning

// Fetching notes
app.get("/notes", notesController.fetchNotes);

// Fetch a single note
app.get("/notes/:id", notesController.fetchNote);

// Create a new note
app.post("/notes", notesController.createNote);

// update notes
app.put("/notes/:id", notesController.updateNote);

// Delete the note
app.delete("/notes/:id", notesController.deleteNote);

// Start our server
app.listen(process.env.PORT);
