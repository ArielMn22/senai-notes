import { useState } from "react";
import Header from "../../components/header";
import LeftPanel from "../../components/left-panel";
import NotesList from "../../components/notes-list";
import "./styles.css";
import Note from "../../components/note";

function Notes() {

  const [tag, setTag] = useState('');

  const aoClicarNaTag = (tag) => {

    setTag(tag);

  }

  return (
    <>
      <div className="page__container">

        <LeftPanel aoSalvarTag={aoClicarNaTag} enviarTag={tag => setTag(tag)}/>

        <div className="page__content">

          <Header/>

          <div className="page__content__main">

            <NotesList tagSelecionada={tag} />

            <Note />

            <div className="page__content__main__options">
            </div>

          </div>

        </div>

      </div>
    
    </>
  
  );

}

export default Notes;