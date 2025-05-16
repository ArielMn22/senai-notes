import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css"
import { faBoxArchive, faTrash } from "@fortawesome/free-solid-svg-icons";

function NoteOptions() {

  return (
    <div className="page__content__main__options">

      <button>
        <FontAwesomeIcon icon={faBoxArchive} className="icon" />
        Archive Note
      </button>
      
      <button>
        <FontAwesomeIcon icon={faTrash} className="icon" />
        Delete Note
      </button>
      
    </div>
  )
}

export default NoteOptions;