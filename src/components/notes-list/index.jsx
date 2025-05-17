import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css"
import { useEffect, useState } from "react";

function NotesList({enviarNota}) {

  const [notes, setNotes] = useState([]);

  useEffect(() => {

    getNotes();

  }, []);

  const getNotes = async () => {

    const response = await fetch('http://localhost:3000/notes');
    const data = await response.json();

    console.log(data);

    setNotes(data);

  }

  return (
    <div className="page__content__main__notes">

      <button className="btn__primary">
        + Create New Note
      </button>

      <div className="notes__list">

        {notes.map((note) => (
          <div className="note__item" key={note.id} onClick={() => enviarNota(note)}>
            <div className="image"></div>

            <div className="texts">

              <p className="title">{note.title}</p>

              <div className="tags">
                {note.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <p className="date">{note.date}</p>

            </div>
          </div>
        ))}

      </div>

    </div>
  )
}

export default NotesList;