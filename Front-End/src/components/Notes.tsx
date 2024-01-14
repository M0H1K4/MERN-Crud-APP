import React from "react";

export default function Notes() {
  return (
    <div>
      <h2>Notes:</h2>
      {notes &&
        notes.map((note) => {
          return (
            <div key={note._id}>
              <h3>{note.title}</h3>
              <button onClick={() => deleteNote(note._id)}>Delete note</button>
              <button onClick={() => toggleUpdate(note)}>Update note</button>
            </div>
          );
        })}
    </div>
  );
}
