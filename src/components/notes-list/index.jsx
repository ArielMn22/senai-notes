import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css"

function NotesList() {

  return (
    <div className="page__content__main__notes">

      <button className="create__note__btn">
        + Create New Note
      </button>

      <div className="notes__list">

        <div className="note__item">
        
          <div className="image"></div>

          <div className="texts">

            <p className="title">React</p>

            <div className="tags">
              <span>Tag1</span>
              <span>Tag2</span>
            </div>

            <p className="date">29 Oct, 2024</p>

          </div>

        </div>
        <div className="note__item">
        
          <div className="image"></div>

          <div className="texts">

            <p className="title">React</p>

            <div className="tags">
              <span>Tag1</span>
              <span>Tag2</span>
            </div>

            <p className="date">29 Oct, 2024</p>

          </div>

        </div>

      </div>

    </div>
  )
}

export default NotesList;