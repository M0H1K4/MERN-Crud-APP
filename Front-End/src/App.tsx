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
  };
  return (
    <>
      <div>Hello Yleo! world ara chemi yle</div>
    </>
  );
}

export default App;
