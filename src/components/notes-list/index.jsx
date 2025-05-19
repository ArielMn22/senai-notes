import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";
import { faClock, faTag } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

function NotesList({ enviarNota, tagSelecionada, somenteArquivadas, atualizarLista }) {
  // Lista de notas carregadas do servidor
  const [notes, setNotes] = useState([]);

  // Recarrega notas nas diferentes mudanças de filtro
  useEffect(() => { getNotes(); }, []);                         // ao montar
  useEffect(() => { getNotes(); }, [tagSelecionada]);           // ao mudar tag
  useEffect(() => { getNotes(); }, [somenteArquivadas]);        // ao pedir arquivadas
  useEffect(() => { getNotes(); }, [atualizarLista]);           // ao atualizar flag

  // Função que busca todas as notas e aplica filtros
  const getNotes = async () => {
    const response = await fetch('http://localhost:3000/notes');
    let data = await response.json();

    if (tagSelecionada) {
      data = data.filter(note =>
        note.tags.map(t => t.trim()).includes(tagSelecionada)
      );
    }
    if (somenteArquivadas) {
      data = data.filter(note => note.archived === true);
    }

    setNotes(data);
  }

  return (
    <div className="page__content__main__notes">
      {/* Botão para criar nova nota (implementação futura) */}
      <button className="btn__primary">+ Create New Note</button>

      <div className="notes__list">
        {/* Mapeia cada nota em um item clicável */}
        {notes.map(note => (
          <div
            className="note__item"
            key={note.id}
            onClick={() => enviarNota(note)}
          >
            <div
              className="image"
              style={{ backgroundImage: `url('${note.image}')` }}
            ></div>
            <div className="texts">
              <p className="title">{note.title}</p>
              <div className="tags">
                {note.tags.map(tag => <span key={tag}>{tag}</span>)}
              </div>
              <p className="date">
                {new Date(note.date).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NotesList;
