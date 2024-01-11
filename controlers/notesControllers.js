const Note = require("../models/note");

const fetchNotes = async (req, res) => {
  // Find all notes
  const notes = await Note.find();
  // Respond with them
  res.json({ notes: notes });
};

const fetchNote = async (req, res) => {
  // Get id off the Url
  const noteId = req.params.id;

  // Find the note using Id
  const note = await Note.findById(noteId);

  // Respond with the note
  res.json({ note: note });
};

const createNote = async (req, res) => {
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
};

const updateNote = async (req, res) => {
  const noteId = req.params.id;

  const title = req.body.title;
  const body = req.body.body;

  await Note.findByIdAndUpdate(noteId, {
    title: title,
    body: body,
  });

  const note = await Note.find(noteId);

  res.json({
    note: note,
  });
};

const deleteNote = async (req, res) => {
  const noteId = req.params.id;

  try {
    const result = await Note.deleteOne({ _id: noteId });

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.json({
      success: "Note deleted successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  fetchNotes: fetchNotes,
  fetchNote: fetchNote,
  createNote: createNote,
  updateNote: updateNote,
  deleteNote: deleteNote,
};
