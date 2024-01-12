import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  // State
  const [notes, setNotes] = useState(null);
  const [createForm, setCreateForm] = useState({
    title: "",
    body: "",
  });

  // useEffect
  useEffect(() => {
    fetchNotes();
  }, []);

  // Functions
  const fetchNotes = async () => {
    // Fetch notes
    const res = await axios.get("http://localhost:3000/notes");
    // Set to state
    console.log(res);
    setNotes(res.data.notes);
    console.log(res);
  };

  const updateCreateFormField = (e) => {
    const { name, value } = e.target;
    console.log({ name, value });
  };
  return (
    <>
      <div className="no1">
        <div className="container">
          <h2>Notes:</h2>
          {notes &&
            notes.map((note) => (
              <div key={note._id}>
                <h3>{note.title}</h3>
              </div>
            ))}
        </div>

        <div>
          <h2>Crteate note</h2>
          <form action="">
            <input
              onChange={updateCreateFormField}
              value={createForm.title}
              type="title"
            />
            <textarea
              onChange={updateCreateFormField}
              value={createForm.body}
              name="body"
            />
            <button type="submit">Create note</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
