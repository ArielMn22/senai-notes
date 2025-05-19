import { useState } from "react";
import Header from "../../components/header";
import LeftPanel from "../../components/left-panel";
import NotesList from "../../components/notes-list";
import "./styles.css";
import Note from "../../components/note";
import NoteOptions from "../../components/note-options";

function Notes() {

  const [tag, setTag] = useState('');
  const [nota, setNota] = useState(null);

  return (
    <>
      <div className="page__container">

        <LeftPanel enviarTag={tag => setTag(tag)}/>

        <div className="page__content">

          <Header/>

          <div className="page__content__main">

            <NotesList enviarNota={nota => setNota(nota)} tagSelecionada={tag} />

            <Note notaSelecionada={nota} />

            {nota && (
              <NoteOptions notaSelecionada={nota} />
            )}

          </div>

        </div>

      </div>
    
    </>
  
  );

}

export default Notes;