import HomeIcon from "../../assets/imgs/Home.svg";

function LeftPanel() {

  return (
    <nav className="left-panel">

      <img className="logo" src="assets/logo.svg" alt="Logo da aplicação." />

      <div className="buttons-container">

        <button>
          <img src={HomeIcon} alt="Home icon." />
          All Notes
        </ button>
        <button>
          <img src={HomeIcon} alt="Home icon." />
          Archived Notes
        </ button>

      </div>

      <div className="tags-container">
        <span className="tag">Tags</span>

        <button>
          <img src={HomeIcon} alt="Home icon." />
          Cooking
        </button>
        <button>
          <img src={HomeIcon} alt="Home icon." />
          Cooking
        </button>
        <button>
          <img src={HomeIcon} alt="Home icon." />
          Cooking
        </button>
        <button>
          <img src={HomeIcon} alt="Home icon." />
          Cooking
        </button>
        <button>
          <img src={HomeIcon} alt="Home icon." />
          Cooking
        </button>
      </div>

    </nav>
  )
}

export default LeftPanel;