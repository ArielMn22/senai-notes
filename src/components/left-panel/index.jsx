import { faBoxArchive, faHouse, faTag } from "@fortawesome/free-solid-svg-icons";
import HomeIcon from "../../assets/imgs/Home.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

function LeftPanel({ enviarTag }) {

  const [tags, setTags] = useState([]);

  useEffect(() => {

    getTags();

  }, []);

  const getTags = async () => {

    const response = await fetch('http://localhost:3000/tags');
    const data = await response.json();

    setTags(data);

  }

  return (
    <nav className="left-panel">

      <img className="logo" src="assets/logo.svg" alt="Logo da aplicação." />

      <div className="buttons-container">

        <button>
          <FontAwesomeIcon icon={faHouse} className="icon" />
          All Notes
        </ button>
        
        <button>
          <FontAwesomeIcon icon={faBoxArchive} className="icon" />
          Archived Notes
        </ button>

      </div>

      <div className="tags-container">

        <span className="tag">Tags</span>

        {tags.map((tag) => (
          <button key={tag.id} onClick={() => enviarTag(tag.name)}>
            <FontAwesomeIcon icon={faTag} className="icon" />
            {tag.name}
          </button>
        ))}

      </div>

    </nav>
  )
}

export default LeftPanel;