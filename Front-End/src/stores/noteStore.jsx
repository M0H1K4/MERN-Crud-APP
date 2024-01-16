import { create } from "zustand";

const notesStore = create((set) => ({
  notes: null,

  fetchNotes: async () => {
    // Fetch the notes
    const res = await axios.get("http://localhost:3000/notes");

    // Set to state
    set({
      notes: res.data.notes,
    });
  },
}));

export default notesStore;

//
