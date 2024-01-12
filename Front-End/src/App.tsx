import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [notes, setNotes] = useState(null);

  useEffect(() => {
    fetchNotes();
  }, []);
  //

  const fetchNotes = async () => {
    const res = await axios.get("http://localhost:3000/notes");
    console.log(res);
    setNotes(res.data.notes);
    console.log(res);
  };
  return (
    <>
      <div className="no1">
        <div className="2">
          <h2>Notes:</h2>
          {notes &&
            notes.map((note) => {
              return (
                <div>
                  <h3>{note.title}</h3>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default App;
