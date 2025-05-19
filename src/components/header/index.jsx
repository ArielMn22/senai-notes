import { faGear, faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";
import { useState } from "react";

function Header() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const onLogoutClick = () => {

    localStorage.clear();
    window.location.href = "/login";

  }

  return (
    <nav className="page__content__header">
      <div className="left">
        <p>All Notes</p>
      </div>

      <div className="right">
        {/* <div className="search__input">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
          <input type="text" placeholder="Search by title, content, or tags…" />
        </div>

        <button>
          <FontAwesomeIcon icon={faGear} className="icon" />
        </button> */}

        <div
          className="user__menu"
          onMouseEnter={() => setDropdownVisible(true)}
          onMouseLeave={() => setDropdownVisible(false)}
        >
          <button>
            <FontAwesomeIcon icon={faUser} className="icon" />
          </button>

          {isDropdownVisible && (
            <div className="dropdown">
              <ul>
                <li onClick={() => onLogoutClick()}>Logout</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header;
