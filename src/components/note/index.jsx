import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css"
import { faClock, faTag } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

function Note({notaSelecionada}) {

  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {

    if (notaSelecionada) {

      setTitle(notaSelecionada.title);
      setTags(notaSelecionada.tags.join(", "));
      setDescription(notaSelecionada.description);

    }

  }, [notaSelecionada]);

  const onSaveNote = async () => {

    let response = await fetch("http://localhost:3000/notes/" + notaSelecionada.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: notaSelecionada.id,
        title: title,
        description: description,
        tags: tags.split(","),
        date: new Date().toISOString()
      })
    });

    if (response.ok) {


      alert("Nota salva com sucesso!");

    } else {

      console.log("Erro ao salvar a nota.");

    }

  }

  return (
    <div className="page__content__main__note">

      {notaSelecionada && (
        <>
          <div className="image"></div>
          <input className="title" value={title} onChange={event => setTitle(event.target.value)} type="text" />
        </>
      )}

      {notaSelecionada && (
          <>
            <div className="info__list">

              <div className="info__item">
                
                <div className="info__name">
                  <FontAwesomeIcon className="icon" icon={faTag} />
                  <p>Tags</p>
                </div>

                <input value={tags} type="text" onChange={e => setTags(e.target.value)} placeholder="Digite aqui as tags..."/>

              </div>

              <div className="info__item">
                
                <div className="info__name">
                  <FontAwesomeIcon className="icon" icon={faClock} />
                  <p>Last edited</p>
                </div>

                <p>{ new Date(notaSelecionada.date).toLocaleDateString() }</p>

              </div>

            </div>

            <textarea placeholder="Type your note..." value={description} onChange={e => setDescription(e.target.value)}></textarea>

            <div className="buttons__container">
              <button className="btn__primary" onClick={() => onSaveNote()}>Save</button>
              <button className="btn__secondary">Cancel</button>
            </div>
          </>
      )}

      {!notaSelecionada && (
        <p>Nenhuma nota selecionada no momento.</p>
      )}

    </div>
  )
}

export default Note;