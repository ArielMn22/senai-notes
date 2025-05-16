import { faGear, faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css"

function Header() {

  return (
    <nav className="page__content__header">

      <div className="left">

        <p>All Notes</p>

      </div>

      <div className="right">

        <div className="search__input">
        
          <FontAwesomeIcon icon={faMagnifyingGlass} className="icon"/>
          <input type="text" placeholder="Search by title, content, or tags…" />

        </div>

        <button>
          <FontAwesomeIcon icon={faGear} className="icon"/>
        </button>

        <button>
          <FontAwesomeIcon icon={faUser} className="icon"/>
        </button>

      </div>

    </nav>
  )
}

export default Header;