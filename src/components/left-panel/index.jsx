import { faHouse, faTag } from "@fortawesome/free-solid-svg-icons";
import HomeIcon from "../../assets/imgs/Home.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function LeftPanel() {

  return (
    <nav className="left-panel">

      <img className="logo" src="assets/logo.svg" alt="Logo da aplicação." />

      <div className="buttons-container">

        <button>
          <FontAwesomeIcon icon={faHouse} className="icon" />
          All Notes
        </ button>
        
        <button>
          <FontAwesomeIcon icon={faHouse} className="icon" />
          Archived Notes
        </ button>

      </div>

      <div className="tags-container">

        <span className="tag">Tags</span>

        <button>
          <FontAwesomeIcon icon={faTag} className="icon" />
          Cooking
        </button>

        <button>
          <FontAwesomeIcon icon={faTag} className="icon" />
          Cooking
        </button>

        <button>
          <FontAwesomeIcon icon={faTag} className="icon" />
          Cooking
        </button>

        <button>
          <FontAwesomeIcon icon={faTag} className="icon" />
          Cooking
        </button>

        <button>
          <FontAwesomeIcon icon={faTag} className="icon" />
          Cooking
        </button>

      </div>

    </nav>
  )
}

export default LeftPanel;