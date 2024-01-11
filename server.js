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

// Fetching notes
app.get("/notes", fetchNotes);

// Fetch a single note
app.get("/notes/:id", );

// Add a note to the db
app.post("/notes",);

// Update the note
app.delete("/notes/:id",);

// Start our server
app.listen(process.env.PORT);


