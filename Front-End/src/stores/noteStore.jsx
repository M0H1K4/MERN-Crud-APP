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
}));

export default notesStore;

//
