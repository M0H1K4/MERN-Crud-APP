import { create } from "zustand";
import axios from "axios";

const notesStore = create((set) => ({
  notes: null,

  createForm: {
    title: "",
    body: "",
  },

  fetchNotes: async () => {
    // Fetch the notes
    const res = await axios.get("http://localhost:3000/notes");

    // Set to state
    set({
      notes: res.data.notes,
    });
  },
  updateCreateFormField: (e) => {
    const { name, value } = e.target;

    set((state) => {
      return {
        createForm: {
          ...state.createForm,
          [name]: value,
        },
      };
    });
  },
  createNote: async (e) => {
    e.preventDefault();

    const { createForm, notes } = notesStore.getState();
    const res = await axios.post("http://localhost:3000/notes", createForm);

    set({
      notes: [...notes, res.data.note],
      createForm: {
        title: "",
        body: "",
      },
    });
  },
  deleteNote: async (_id) => {
    // Delete the note
    const res = await axios.delete(`http://localhost:3000/notes/${_id}`);
    const { notes } = notesStore.getState().notes;

    // Update state
    const newNotes = notes.filter((note) => {
      return note._id !== _id;
    });

    setNotes(newNotes);
  },
}));

export default notesStore;
