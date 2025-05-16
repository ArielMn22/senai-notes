import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css"
import { faClock, faTag } from "@fortawesome/free-solid-svg-icons";

function Note() {

  return (
    <div className="page__content__main__note">

      <div className="image"></div>

      <h1>React - Optimization</h1>

      <div className="info__list">

        <div className="info__item">
          
          <div className="info__name">
            <FontAwesomeIcon className="icon" icon={faTag} />
            <p>Tags</p>
          </div>

          <p>Tag 1, Tag2</p>

        </div>

        <div className="info__item">
          
          <div className="info__name">
            <FontAwesomeIcon className="icon" icon={faClock} />
            <p>Last edited</p>
          </div>

          <p>29 Oct, 2024</p>

        </div>

      </div>

      <textarea placeholder="Type your note..."></textarea>

      <div className="buttons__container">
        <button className="btn__primary">Save</button>
        <button className="btn__secondary">Archive</button>
      </div>

    </div>
  )
}

export default Note;