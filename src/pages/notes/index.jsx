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

  const [somenteArquivadas, setSomenteArquivadas] = useState(false);

  const [atualizarLista, setAtualizarLista] = useState(0);

  return (
    <>
      <div className="page__container">

        <LeftPanel 
          enviarTag={tag => setTag(tag)} 
          listarSomenteArquivadas={somenteArquivadas => setSomenteArquivadas(somenteArquivadas)}
        />

        <div className="page__content">

          <Header/>

          <div className="page__content__main">

            <NotesList 
              enviarNota={nota => setNota(nota)} 
              tagSelecionada={tag} 
              somenteArquivadas={somenteArquivadas} 
              atualizarLista={atualizarLista}
            />

            <Note 
              notaSelecionada={nota}
              aoFecharANota={() => {
                setNota(null);
                setAtualizarLista(true);
              }}
            />

            {nota && (
              <NoteOptions 
                notaSelecionada={nota}
                aoFecharANota={() => {
                  setNota(null);
                  setAtualizarLista(atualizarLista + 1);
                }}
              />
            )}

          </div>

        </div>

      </div>
    
    </>
  
  );

}

export default Notes;