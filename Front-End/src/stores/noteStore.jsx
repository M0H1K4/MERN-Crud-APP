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
    try {
      // Delete the note
      await axios.delete(`http://localhost:3000/notes/${_id}`);

      // Get the current notes from the store
      const { notes } = notesStore.getState();

      // Update state in the store
      const newNotes = notes.filter((note) => note._id !== _id);
      set({ notes: newNotes });

      // Update state locally (if needed)
      setNotes(newNotes);
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  },
}));

export default notesStore;
